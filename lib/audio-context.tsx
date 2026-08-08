"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const GATE_STORAGE_KEY = "invitation-opened";
const AUDIO_SRC = "/audio/background.mp3";
const VOLUME = 0.4;

type AudioContextValue = {
  /** Has the visitor opened the invitation this session (gate dismissed)? */
  opened: boolean;
  /** Is the background track currently playing? */
  isPlaying: boolean;
  /** Dismiss the gate and start playback — call from a real click handler. */
  openInvitation: () => void;
  /** Toggle playback from the nav music control. */
  togglePlayback: () => void;
};

const AudioContext = createContext<AudioContextValue | null>(null);

/**
 * Single global <audio> element + play state, shared across the whole app
 * so navigating between sections never restarts or duplicates playback.
 *
 * Autoplay-safe by construction: the element is created once, but .play()
 * is only ever called from openInvitation()/togglePlayback(), both of
 * which only run inside a real click handler — never on mount, never in an
 * effect — so this never trips browser autoplay blocking. Any rejected
 * play() promise is caught and swallowed (state just falls back to
 * "paused") instead of throwing/logging.
 */
export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Hydration-safe: server always renders "not opened yet" (gate shows).
  // If this browser session already opened the invitation, skip the gate
  // on the very next paint after mount — matches the Countdown/ScrollReveal
  // pattern of correcting state post-mount rather than on the server.
  useEffect(() => {
    // Same deferred-callback pattern as language-context.tsx, required by
    // react-hooks/set-state-in-effect.
    const id = setTimeout(() => {
      const alreadyOpened = window.sessionStorage.getItem(GATE_STORAGE_KEY);
      if (alreadyOpened === "1") {
        setOpened(true);
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = VOLUME;
    audio.preload = "auto";
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const openInvitation = useCallback(() => {
    setOpened(true);
    window.sessionStorage.setItem(GATE_STORAGE_KEY, "1");
    audioRef.current?.play().catch(() => {
      // Playback blocked or interrupted — fail silently, user can still
      // press the music control manually. No console noise.
    });
  }, []);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {
        // Same safe-rejection handling as openInvitation.
      });
    } else {
      audio.pause();
    }
  }, []);

  const value = useMemo<AudioContextValue>(
    () => ({ opened, isPlaying, openInvitation, togglePlayback }),
    [opened, isPlaying, openInvitation, togglePlayback],
  );

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return ctx;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { englishSubtitles } from "@/data/subtitles";

type VideoModalProps = {
  youtubeId: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  language?: "ar" | "en";
};

type YouTubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  loadVideoById: (videoId: string) => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  destroy: () => void;
};

type YouTubePlayerEvent = {
  target: YouTubePlayer;
};

type YouTubePlayerOptions = {
  videoId: string;
  playerVars?: {
    autoplay?: number;
    rel?: number;
    modestbranding?: number;
    playsinline?: number;
  };
  events?: {
    onReady?: (event: YouTubePlayerEvent) => void;
  };
};

type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: YouTubePlayerOptions
  ) => YouTubePlayer;
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.YT?.Player) {
    return Promise.resolve();
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise<void>((resolve) => {
    const previousCallback =
      window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve();
    };

    const existingScript =
      document.querySelector<HTMLScriptElement>(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

    if (!existingScript) {
      const script = document.createElement("script");

      script.src =
        "https://www.youtube.com/iframe_api";

      script.async = true;

      document.head.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

export default function VideoModal({
  youtubeId,
  title,
  isOpen,
  onClose,
  language = "ar",
}: VideoModalProps) {
  /*
   * React owns only this outer container.
   *
   * YouTube will own everything INSIDE it.
   * This prevents React/YouTube DOM conflicts.
   */
  const playerHostRef =
    useRef<HTMLDivElement | null>(null);

  const playerRef =
    useRef<YouTubePlayer | null>(null);

  const playerVideoIdRef =
    useRef<string | null>(null);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [readyYoutubeId, setReadyYoutubeId] =
    useState<string | null>(null);

  const isEnglish = language === "en";

  const isPlayerReady =
    readyYoutubeId === youtubeId;

  /*
   * Load YouTube API early.
   */
  useEffect(() => {
    void loadYouTubeApi();
  }, []);

  /*
   * ESC key and prevent background scrolling.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow =
      document.body.style.overflow;

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [isOpen, onClose]);

  /*
   * Create or reuse YouTube player.
   */
  useEffect(() => {
    if (
      !isOpen ||
      !youtubeId ||
      !playerHostRef.current
    ) {
      return;
    }

    let cancelled = false;

    const startPlayer = async () => {
      await loadYouTubeApi();

      if (
        cancelled ||
        !window.YT?.Player ||
        !playerHostRef.current
      ) {
        return;
      }

      /*
       * Existing player:
       * switch video without rebuilding iframe.
       */
      if (playerRef.current) {
        try {
          if (
            playerVideoIdRef.current !==
            youtubeId
          ) {
            playerVideoIdRef.current =
              youtubeId;

            setCurrentTime(0);
            setReadyYoutubeId(null);

            playerRef.current.loadVideoById(
              youtubeId
            );

            playerRef.current.seekTo(0, true);

            /*
             * The existing player is already ready,
             * so mark this new video ready immediately.
             */
            setReadyYoutubeId(youtubeId);
          } else {
            playerRef.current.seekTo(0, true);
            setCurrentTime(0);
            playerRef.current.playVideo();
          }
        } catch {
          // Ignore temporary YouTube errors.
        }

        return;
      }

      /*
       * FIRST VIDEO ONLY.
       *
       * Create a child element manually.
       *
       * React does NOT render/manage this child.
       * YouTube may safely replace it with an iframe.
       */
      const target =
        document.createElement("div");

      playerHostRef.current.replaceChildren(
        target
      );

      playerVideoIdRef.current =
        youtubeId;

      playerRef.current =
        new window.YT.Player(target, {
          videoId: youtubeId,

          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },

          events: {
            onReady: (event) => {
              if (cancelled) {
                return;
              }

              setCurrentTime(0);
              setReadyYoutubeId(
                youtubeId
              );

              try {
                event.target.seekTo(0, true);
                event.target.playVideo();
              } catch {
                /*
                 * Browser may block autoplay
                 * with sound.
                 */
              }
            },
          },
        });
    };

    void startPlayer();

    return () => {
      cancelled = true;
    };
  }, [isOpen, youtubeId]);

  /*
   * Pause when modal closes.
   *
   * Do NOT destroy the player here.
   * This makes the next video faster.
   */
  useEffect(() => {
    if (isOpen) {
      return;
    }

    try {
      playerRef.current?.pauseVideo();
    } catch {
      // Ignore.
    }
  }, [isOpen]);

  /*
   * Destroy player only when leaving
   * the entire video page/component.
   */
  useEffect(() => {
    return () => {
      try {
        playerRef.current?.destroy();
      } catch {
        // Ignore cleanup errors.
      }

      playerRef.current = null;
      playerVideoIdRef.current = null;
    };
  }, []);

  /*
   * Track playback time for
   * custom English subtitles.
   */
  useEffect(() => {
    if (!isOpen || !isEnglish) {
      return;
    }

    const interval =
      window.setInterval(() => {
        const player =
          playerRef.current;

        if (!player) {
          return;
        }

        try {
          const time =
            player.getCurrentTime();

          if (Number.isFinite(time)) {
            setCurrentTime(time);
          }
        } catch {
          // Player may still be initializing.
        }
      }, 250);

    return () => {
      window.clearInterval(interval);
    };
  }, [isOpen, isEnglish, youtubeId]);

  const subtitles =
    englishSubtitles[youtubeId] ?? [];

  const activeSubtitle =
    subtitles.find(
      (cue) =>
        currentTime >= cue.start &&
        currentTime < cue.end
    );

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[100] items-center justify-center bg-black/80 px-4 py-8 ${
        isOpen ? "flex" : "hidden"
      }`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#0e3a20] shadow-2xl"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-4 text-white">
          <h2 className="line-clamp-2 text-base font-bold md:text-xl">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label={
              isEnglish
                ? "Close video"
                : "إغلاق الفيديو"
            }
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl transition hover:bg-[#c99a27]"
          >
            ✕
          </button>
        </div>

        {/* Player */}
        <div className="relative mx-auto aspect-video w-full max-h-[62vh] bg-black">

          {/*
           * IMPORTANT:
           *
           * React renders only this empty host.
           * YouTube owns all DOM inside it.
           */}
          <div
            ref={playerHostRef}
            className="absolute inset-0 h-full w-full"
          />

          {/* Loading Screen */}
          {!isPlayerReady && (
            <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-black text-white">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[#e6c45a]" />

              <p className="text-sm font-medium text-white/80">
                {isEnglish
                  ? "Loading video..."
                  : "جاري تحميل الفيديو..."}
              </p>
            </div>
          )}

          {/* English Subtitle */}
          {isEnglish &&
            activeSubtitle && (
              <div className="pointer-events-none absolute bottom-16 left-1/2 z-30 w-[94%] -translate-x-1/2 px-2 text-center">
                <span className="inline-block max-w-3xl rounded-lg bg-black/85 px-4 py-2 text-base font-semibold leading-7 text-white shadow-lg sm:text-lg md:text-xl">
                  {activeSubtitle.text}
                </span>
              </div>
            )}
        </div>

        {/* Translation Notice */}
        {isEnglish && (
          <div className="border-t border-white/10 bg-[#133f2c] px-5 py-3">
            <p className="text-sm leading-6 text-white/75">
              Original audio: Arabic • English
              translation: Al-Tayyibat website
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
          <p className="text-sm text-white/65">
            {isEnglish
              ? "Original video on YouTube"
              : "الفيديو الأصلي على يوتيوب"}
          </p>

          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#e6c45a] px-5 py-2 text-sm font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
          >
            {isEnglish
              ? "Original on YouTube"
              : "فتح الفيديو الأصلي"}
          </a>
        </div>
      </div>
    </div>
  );
}
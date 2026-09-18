"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { VideoItem } from "@/data/videos";
import VideoModal from "@/components/VideoModal";

type VideoCardProps = {
  video: VideoItem;
  priority?: boolean;
  language?: "ar" | "en";

  /*
   * Optional.
   *
   * LocalizedVideoPage supplies this prop and uses
   * ONE shared VideoModal.
   *
   * Older pages that do not supply onPlay will
   * automatically use this card's local modal.
   */
  onPlay?: (video: VideoItem) => void;
};

let youtubeConnectionsPrepared = false;

function prepareYouTubeConnections() {
  if (
    typeof document === "undefined" ||
    youtubeConnectionsPrepared
  ) {
    return;
  }

  youtubeConnectionsPrepared = true;

  const urls = [
    "https://www.youtube.com",
    "https://www.google.com",
    "https://i.ytimg.com",
  ];

  urls.forEach((href) => {
    const existing = document.querySelector(
      `link[rel="preconnect"][href="${href}"]`
    );

    if (existing) {
      return;
    }

    const link = document.createElement("link");

    link.rel = "preconnect";
    link.href = href;
    link.crossOrigin = "anonymous";

    document.head.appendChild(link);
  });
}

export default function VideoCard({
  video,
  priority = false,
  language = "ar",
  onPlay,
}: VideoCardProps) {
  /*
   * Used only when this card is rendered on an older
   * page that does not provide the shared onPlay handler.
   */
  const [isLocalVideoOpen, setIsLocalVideoOpen] =
    useState(false);

  const isEnglish = language === "en";

  useEffect(() => {
    prepareYouTubeConnections();
  }, []);

  const activeYoutubeId =
    isEnglish && video.youtubeIdEn
      ? video.youtubeIdEn
      : video.youtubeId;

  const activeTitle = isEnglish
    ? video.titleEn
    : video.titleAr;

  const activeDescription = isEnglish
    ? video.descriptionEn
    : video.descriptionAr;

  const openVideo = () => {
    prepareYouTubeConnections();

    /*
     * New shared-player architecture.
     */
    if (onPlay) {
      onPlay(video);
      return;
    }

    /*
     * Compatibility mode for HomePage,
     * VideoLibrary, etc.
     */
    setIsLocalVideoOpen(true);
  };

  return (
    <>
      <article className="group overflow-hidden rounded-2xl bg-white text-[#202820] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Thumbnail */}
        <button
          type="button"
          onClick={openVideo}
          onMouseEnter={prepareYouTubeConnections}
          onFocus={prepareYouTubeConnections}
          className="relative block aspect-video w-full overflow-hidden bg-[#e9e3d3] text-right"
          aria-label={
            isEnglish
              ? `Play ${video.titleEn}`
              : `تشغيل ${video.titleAr}`
          }
        >
          <Image
            src={video.thumbnail}
            alt={activeTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            className="object-cover transition duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#174e2b]/95 text-2xl text-white shadow-lg transition group-hover:scale-110 group-hover:bg-[#c99a27]">
              ▶
            </div>
          </div>

          {/* Duration */}
          {video.duration && (
            <span className="font-english absolute bottom-3 left-3 rounded-md bg-black/75 px-2 py-1 text-xs text-white">
              {video.duration}
            </span>
          )}
        </button>

        {/* Card Content */}
        <div
          className="p-6"
          dir={isEnglish ? "ltr" : "rtl"}
        >
          <p className="mb-2 text-sm font-semibold text-[#c99a27]">
            {isEnglish
              ? "Al-Tayyibat System"
              : "نظام الطيبات"}
          </p>

          <h3 className="mb-3 text-xl font-bold leading-8 text-[#174e2b]">
            {activeTitle}
          </h3>

          {/* Secondary Language Title */}
          <p
            className={`mb-4 text-sm font-semibold leading-6 text-gray-500 ${
              isEnglish ? "" : "font-english"
            }`}
            dir={isEnglish ? "rtl" : "ltr"}
          >
            {isEnglish
              ? video.titleAr
              : video.titleEn}
          </p>

          <p className="mb-5 leading-7 text-gray-600">
            {activeDescription}
          </p>

          {/* English Translation Information */}
          {isEnglish && !video.youtubeIdEn && (
            <div className="mb-4 rounded-xl border border-[#eadfbf] bg-[#fffaf0] px-4 py-3">
              <p className="text-sm leading-6 text-[#78662e]">
                Original audio is in Arabic. English
                subtitles are provided by the Al-Tayyibat
                website where available.
              </p>
            </div>
          )}

          <div className="border-t border-[#eee5cf] pt-4">
            <p className="mb-3 text-xs leading-6 text-gray-500">
              {isEnglish
                ? `Source: ${video.source}`
                : `المصدر: ${video.source}`}
            </p>

            <button
              type="button"
              onClick={openVideo}
              onMouseEnter={prepareYouTubeConnections}
              onFocus={prepareYouTubeConnections}
              className="inline-flex items-center gap-2 rounded-full bg-[#174e2b] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0e3a20]"
            >
              <span>
                {isEnglish
                  ? "Watch Video"
                  : "شاهد الفيديو"}
              </span>

              <span>▶</span>
            </button>
          </div>
        </div>
      </article>

      {/*
       * Compatibility modal.
       *
       * Only rendered when this VideoCard is used
       * WITHOUT the shared onPlay handler.
       */}
      {!onPlay && (
        <VideoModal
          youtubeId={activeYoutubeId}
          title={activeTitle}
          isOpen={isLocalVideoOpen}
          onClose={() =>
            setIsLocalVideoOpen(false)
          }
          language={language}
        />
      )}
    </>
  );
}
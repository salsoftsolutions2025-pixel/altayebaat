"use client";

import Link from "next/link";
import {
  useMemo,
  useState,
} from "react";

import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";

import {
  videos,
  videoCategories,
  type VideoCategory,
  type VideoItem,
} from "@/data/videos";

type Locale = "ar" | "en";

type SelectedCategory =
  | "all"
  | VideoCategory;

type LocalizedVideoPageProps = {
  locale: Locale;
};

export default function LocalizedVideoPage({
  locale,
}: LocalizedVideoPageProps) {
  const isEnglish = locale === "en";

  const [
    selectedCategory,
    setSelectedCategory,
  ] =
    useState<SelectedCategory>("all");

  const [searchTerm, setSearchTerm] =
    useState("");

  /*
   * ONE active video for the entire page.
   */
  const [activeVideo, setActiveVideo] =
    useState<VideoItem | null>(null);

  const [isVideoOpen, setIsVideoOpen] =
    useState(false);

  const filteredVideos = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return videos.filter((video) => {
      const matchesCategory =
        selectedCategory === "all" ||
        video.category ===
          selectedCategory;

      const matchesSearch =
        search === "" ||
        video.titleAr
          .toLowerCase()
          .includes(search) ||
        video.titleEn
          .toLowerCase()
          .includes(search) ||
        video.descriptionAr
          .toLowerCase()
          .includes(search) ||
        video.descriptionEn
          .toLowerCase()
          .includes(search) ||
        video.source
          .toLowerCase()
          .includes(search);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [
    selectedCategory,
    searchTerm,
  ]);

  const selectedCategoryName =
    selectedCategory === "all"
      ? isEnglish
        ? "All Videos"
        : "جميع الفيديوهات"
      : videoCategories.find(
          (category) =>
            category.id ===
            selectedCategory
        )?.[
          isEnglish
            ? "nameEn"
            : "nameAr"
        ] ??
        (isEnglish
          ? "Videos"
          : "الفيديوهات");

  /*
   * A card calls this function instead of
   * creating its own modal.
   */
  const handlePlayVideo = (
    video: VideoItem
  ) => {
    setActiveVideo(video);
    setIsVideoOpen(true);
  };

  /*
   * Keep activeVideo when closing.
   *
   * That allows VideoModal to keep its
   * player alive instead of unmounting it.
   */
  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  /*
   * Determine the YouTube ID for
   * the shared player.
   */
  const modalYoutubeId =
    activeVideo
      ? isEnglish &&
        activeVideo.youtubeIdEn
        ? activeVideo.youtubeIdEn
        : activeVideo.youtubeId
      : "";

  const modalTitle =
    activeVideo
      ? isEnglish
        ? activeVideo.titleEn
        : activeVideo.titleAr
      : "";

  return (
    <main
      dir={isEnglish ? "ltr" : "rtl"}
      className="min-h-screen bg-[#fcf9f0] text-[#202820]"
    >
      {/* Header */}
      <section className="bg-[#174e2b] py-14 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <Link
              href={`/${locale}`}
              className="rounded-full border border-[#e6c45a] px-5 py-2 text-sm font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
            >
              {isEnglish
                ? "Back to Home"
                : "العودة إلى الرئيسية"}
            </Link>
          </div>

          <p className="mb-3 font-semibold text-[#e6c45a]">
            {isEnglish
              ? "Dr. Diaa Al-Awady Video Archive"
              : "مكتبة الدكتور ضياء العوضي"}
          </p>

          <h1 className="mb-5 text-4xl font-black md:text-6xl">
            {isEnglish
              ? "Video Library"
              : "مكتبة الفيديو"}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-white/80">
            {isEnglish
              ? "A digital archive of lectures, interviews, and short explanations by Dr. Diaa Al-Awady related to the Al-Tayyibat System."
              : "مكتبة رقمية تضم محاضرات ومقاطع شرح ومقابلات الدكتور ضياء العوضي المتعلقة بنظام الطيبات، مع تنظيم المحتوى حسب الموضوع لتسهيل البحث والوصول."}
          </p>

          <div className="mt-8">
            <Link
              href={
                isEnglish
                  ? "/ar/videos"
                  : "/en/videos"
              }
              className="inline-flex rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#174e2b]"
            >
              {isEnglish
                ? "العربية"
                : "English"}
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-[#eadfbf] bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setSelectedCategory(
                  "all"
                )
              }
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                selectedCategory ===
                "all"
                  ? "border-[#174e2b] bg-[#174e2b] text-white"
                  : "border-[#c99a27] bg-white text-[#174e2b] hover:bg-[#c99a27] hover:text-white"
              }`}
            >
              {isEnglish
                ? "All Videos"
                : "جميع الفيديوهات"}
            </button>

            {videoCategories.map(
              (category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(
                      category.id as VideoCategory
                    )
                  }
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    selectedCategory ===
                    category.id
                      ? "border-[#174e2b] bg-[#174e2b] text-white"
                      : "border-[#c99a27] bg-white text-[#174e2b] hover:bg-[#c99a27] hover:text-white"
                  }`}
                >
                  {isEnglish
                    ? category.nameEn
                    : category.nameAr}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-[#fcf9f0] py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-[#e8dfc7] bg-white p-4 shadow-sm">
            <div className="relative">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder={
                  isEnglish
                    ? "Search Dr. Diaa's videos..."
                    : "ابحث في فيديوهات الدكتور ضياء..."
                }
                className={`w-full rounded-xl border border-[#e5dcc2] bg-[#fcf9f0] px-5 py-4 text-base outline-none transition focus:border-[#c99a27] focus:ring-2 focus:ring-[#c99a27]/20 ${
                  isEnglish
                    ? "text-left"
                    : "text-right"
                }`}
              />

              <span
                className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-xl text-gray-400 ${
                  isEnglish
                    ? "right-4"
                    : "left-4"
                }`}
              >
                🔍
              </span>
            </div>

            {searchTerm && (
              <div
                className={`mt-3 ${
                  isEnglish
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setSearchTerm("")
                  }
                  className="text-sm font-semibold text-[#174e2b] transition hover:text-[#c99a27]"
                >
                  {isEnglish
                    ? "Clear Search"
                    : "مسح البحث"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#fcf9f0] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div
              className={
                isEnglish
                  ? "text-left"
                  : "text-right"
              }
            >
              <p className="mb-1 text-sm font-semibold text-[#c99a27]">
                {isEnglish
                  ? "Selected Category"
                  : "القسم المختار"}
              </p>

              <h2 className="text-3xl font-bold text-[#174e2b]">
                {selectedCategoryName}
              </h2>
            </div>

            <div className="rounded-full border border-[#e8dfc7] bg-white px-4 py-2 text-sm text-gray-500">
              {isEnglish
                ? `${filteredVideos.length} ${
                    filteredVideos.length ===
                    1
                      ? "video"
                      : "videos"
                  }`
                : `${filteredVideos.length} ${
                    filteredVideos.length ===
                    1
                      ? "فيديو"
                      : "فيديوهات"
                  }`}
            </div>
          </div>

          {searchTerm && (
            <div className="mb-6 rounded-xl border border-[#eadfbf] bg-[#fffdf7] px-5 py-4">
              <p className="text-sm text-gray-600">
                {isEnglish
                  ? "Search results for:"
                  : "نتائج البحث عن:"}

                <strong className="mx-2 text-[#174e2b]">
                  &quot;
                  {searchTerm}
                  &quot;
                </strong>
              </p>
            </div>
          )}

          {filteredVideos.length >
          0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map(
                (video, index) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    priority={
                      index < 6
                    }
                    language={locale}
                    onPlay={
                      handlePlayVideo
                    }
                  />
                )
              )}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#e8dfc7] bg-white px-6 py-16 text-center shadow-sm">
              <div className="mb-5 text-5xl">
                🎥
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#174e2b]">
                {isEnglish
                  ? "No Videos Found"
                  : "لم يتم العثور على فيديوهات"}
              </h3>

              <p className="mx-auto mb-6 max-w-xl leading-8 text-gray-600">
                {isEnglish
                  ? "There are currently no videos matching your search or selected category."
                  : "لا توجد حالياً فيديوهات مطابقة للبحث أو القسم الذي اخترته."}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(
                    "all"
                  );

                  setSearchTerm("");
                }}
                className="rounded-full bg-[#174e2b] px-6 py-3 font-semibold text-white transition hover:bg-[#0e3a20]"
              >
                {isEnglish
                  ? "Show All Videos"
                  : "عرض جميع الفيديوهات"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ONE shared video modal */}
      <VideoModal
        youtubeId={modalYoutubeId}
        title={modalTitle}
        isOpen={
          isVideoOpen &&
          activeVideo !== null
        }
        onClose={handleCloseVideo}
        language={locale}
      />
    </main>
  );
}
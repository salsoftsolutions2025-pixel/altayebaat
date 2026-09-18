"use client";

import { useMemo, useState } from "react";
import VideoCard from "@/components/VideoCard";
import {
  videos,
  videoCategories,
  type VideoCategory,
} from "@/data/videos";

type SelectedCategory = "all" | VideoCategory;

type VideoLibraryProps = {
  locale?: "ar" | "en";
};

export default function VideoLibrary({
  locale = "ar",
}: VideoLibraryProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("all");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return videos.filter((video) => {
      // Category filtering
      const matchesCategory =
        selectedCategory === "all" ||
        video.category === selectedCategory;

      // Search filtering
      const matchesSearch =
        search === "" ||
        video.titleAr.toLowerCase().includes(search) ||
        video.titleEn.toLowerCase().includes(search) ||
        video.descriptionAr.toLowerCase().includes(search) ||
        video.descriptionEn.toLowerCase().includes(search) ||
        video.source.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const selectedCategoryName =
    selectedCategory === "all"
      ? "جميع الفيديوهات"
      : videoCategories.find(
          (category) => category.id === selectedCategory
        )?.nameAr ?? "الفيديوهات";

  return (
    <>
      {/* =========================
          CATEGORY FILTERS
      ========================== */}
      <section className="border-b border-[#eadfbf] bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {/* All Videos */}
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                selectedCategory === "all"
                  ? "border-[#174e2b] bg-[#174e2b] text-white"
                  : "border-[#c99a27] bg-white text-[#174e2b] hover:bg-[#c99a27] hover:text-white"
              }`}
            >
              جميع الفيديوهات
            </button>

            {/* Categories */}
            {videoCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  setSelectedCategory(
                    category.id as VideoCategory
                  )
                }
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  selectedCategory === category.id
                    ? "border-[#174e2b] bg-[#174e2b] text-white"
                    : "border-[#c99a27] bg-white text-[#174e2b] hover:bg-[#c99a27] hover:text-white"
                }`}
              >
                {category.nameAr}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SEARCH
      ========================== */}
      <section className="bg-[#fcf9f0] py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-[#e8dfc7] bg-white p-4 shadow-sm">
            <div className="relative">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="ابحث في فيديوهات الدكتور ضياء..."
                className="w-full rounded-xl border border-[#e5dcc2] bg-[#fcf9f0] px-5 py-4 pr-12 text-right text-base outline-none transition focus:border-[#c99a27] focus:ring-2 focus:ring-[#c99a27]/20"
              />

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400">
                🔍
              </span>
            </div>

            {/* Clear Search */}
            {searchTerm && (
              <div className="mt-3 text-left">
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="text-sm font-semibold text-[#174e2b] transition hover:text-[#c99a27]"
                >
                  مسح البحث
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================
          VIDEO RESULTS
      ========================== */}
      <section className="bg-[#fcf9f0] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Results Header */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold text-[#c99a27]">
                القسم المختار
              </p>

              <h2 className="text-3xl font-bold text-[#174e2b]">
                {selectedCategoryName}
              </h2>
            </div>

            <div className="rounded-full border border-[#e8dfc7] bg-white px-4 py-2 text-sm text-gray-500">
              {filteredVideos.length}{" "}
              {filteredVideos.length === 1 ? "فيديو" : "فيديوهات"}
            </div>
          </div>

          {/* Search information */}
          {searchTerm && (
            <div className="mb-6 rounded-xl border border-[#eadfbf] bg-[#fffdf7] px-5 py-4">
              <p className="text-sm text-gray-600">
                نتائج البحث عن:
                <strong className="mr-2 text-[#174e2b]">
                  &quot;{searchTerm}&quot;
                </strong>
              </p>
            </div>
          )}

          {/* Results */}
          {filteredVideos.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, index) => (
                <VideoCard
                key={video.id}
                video={video}
                priority={index === 0}
                 language={locale}
            />
  ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#e8dfc7] bg-white px-6 py-16 text-center shadow-sm">
              <div className="mb-5 text-5xl">🎥</div>

              <h3 className="mb-3 text-2xl font-bold text-[#174e2b]">
                لم يتم العثور على فيديوهات
              </h3>

              <p className="mx-auto mb-6 max-w-xl leading-8 text-gray-600">
                لا توجد حالياً فيديوهات مطابقة للبحث أو القسم
                الذي اخترته.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="rounded-full bg-[#174e2b] px-6 py-3 font-semibold text-white transition hover:bg-[#0e3a20]"
              >
                عرض جميع الفيديوهات
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import VideoModal from "@/components/VideoModal";

import {
  testimonials,
  type TestimonialItem,
} from "@/data/testimonials";

type TestimonialsPageProps = {
  locale: "ar" | "en";
};

export default function TestimonialsPage({
  locale,
}: TestimonialsPageProps) {
  const isArabic = locale === "ar";

  const [activeVideo, setActiveVideo] =
    useState<TestimonialItem | null>(
      null
    );

  function closeVideo() {
    setActiveVideo(null);
  }

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fcf9f0] text-[#202820]"
    >
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#c99a27]/30 bg-[#0e3a20] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">

          <Link
            href={`/${locale}`}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/altayebaat-logo.png"
              alt={
                isArabic
                  ? "شعار نظام الطيبات"
                  : "Al-Tayyibat System Logo"
              }
              width={52}
              height={52}
              className="rounded-full"
            />

            <div>
              <p className="font-bold text-[#e6c45a]">
                {isArabic
                  ? "نظام الطيبات"
                  : "Al-Tayyibat System"}
              </p>

              <p className="text-xs text-white/65">
                {isArabic
                  ? "إرث الدكتور ضياء العوضي"
                  : "The Legacy of Dr. Diaa Al-Awady"}
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-2">

            <Link
              href={`/${locale}`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
            >
              {isArabic
                ? "الرئيسية"
                : "Home"}
            </Link>

            <Link
              href={`/${locale}/videos`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
            >
              {isArabic
                ? "الفيديوهات"
                : "Videos"}
            </Link>

            <Link
              href={`/${locale}/books`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
            >
              {isArabic
                ? "الكتب والمصادر"
                : "Books"}
            </Link>

            <Link
              href={
                isArabic
                  ? "/en/testimonials"
                  : "/ar/testimonials"
              }
              className="rounded-full border border-[#e6c45a] px-4 py-2 text-sm font-bold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
            >
              {isArabic
                ? "English"
                : "العربية"}
            </Link>

          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0e3a20] to-[#174e2b] px-5 py-16 text-center text-white md:px-8 md:py-20">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e6c45a]">
            {isArabic
              ? "تجارب شخصية"
              : "Personal Experiences"}
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            {isArabic
              ? "شهادات وتجارب"
              : "Testimonials"}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
            {isArabic
              ? "مجموعة من الشهادات المصورة لأشخاص يروون تجاربهم الشخصية مع نظام الطيبات كما شاركوها بأنفسهم."
              : "A collection of video testimonials from individuals describing their own personal experiences with the Al-Tayyibat System."}
          </p>

        </div>
      </section>

      {/* Important notice */}
      <section className="mx-auto max-w-5xl px-5 pt-10 md:px-8">

        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">

          <div className="flex gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
              ⚕
            </div>

            <div>
              <h2 className="font-black text-amber-900">
                {isArabic
                  ? "تنويه بشأن الشهادات والتجارب"
                  : "About These Testimonials"}
              </h2>

              <p className="mt-2 text-sm leading-7 text-amber-900/80">
                {isArabic
                  ? "تعرض هذه الصفحة تجارب شخصية يرويها أصحابها بأنفسهم. هذه الشهادات لا تُعد دليلاً طبياً على أن نظاماً أو علاجاً معيناً تسبب في الشفاء، ولا تضمن تحقيق النتائج نفسها لدى أشخاص آخرين. كما أنها لا تغني عن التشخيص أو العلاج أو الاستشارة الطبية المتخصصة."
                  : "The videos on this page document personal experiences as described by the individuals themselves. These testimonials do not establish that a particular system or treatment caused a recovery, do not guarantee similar results for others, and are not a substitute for professional medical diagnosis, treatment, or advice."}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">

        {testimonials.length === 0 ? (

          /* Empty state until videos are added */
          <div className="mx-auto max-w-2xl rounded-[28px] border border-[#c99a27]/25 bg-white px-7 py-14 text-center shadow-lg">

            <Image
              src="/images/altayebaat-logo.png"
              alt="Al-Tayyibat"
              width={96}
              height={96}
              className="mx-auto rounded-full"
            />

            <h2 className="mt-6 text-2xl font-black text-[#174e2b]">
              {isArabic
                ? "سيتم إضافة الشهادات المصورة قريباً"
                : "Video Testimonials Will Be Added Soon"}
            </h2>

            <p className="mx-auto mt-4 max-w-lg leading-7 text-[#657068]">
              {isArabic
                ? "نعمل على جمع وتنظيم الشهادات والتجارب المصورة وإضافتها إلى هذه المكتبة."
                : "We are preparing and organizing video testimonials for inclusion in this archive."}
            </p>

          </div>

        ) : (

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {testimonials.map(
              (testimonial) => {
                const title =
                  isArabic
                    ? testimonial.titleAr
                    : testimonial.titleEn;

                const description =
                  isArabic
                    ? testimonial.descriptionAr
                    : testimonial.descriptionEn;

                const name =
                  isArabic
                    ? testimonial.nameAr
                    : testimonial.nameEn;

                return (
                  <article
                    key={
                      testimonial.id
                    }
                    className="overflow-hidden rounded-[24px] border border-[#c99a27]/20 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* Thumbnail */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveVideo(
                          testimonial
                        )
                      }
                      className="group relative block aspect-video w-full overflow-hidden bg-black"
                    >

                      <Image
                        src={`https://img.youtube.com/vi/${testimonial.youtubeId}/hqdefault.jpg`}
                        alt={title}
                        fill
                        loading={testimonial.id === 1 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c99a27] text-2xl text-[#174e2b] shadow-xl transition group-hover:scale-110">
                          ▶
                        </div>

                      </div>

                    </button>

                    {/* Content */}
                    <div className="p-6">

                      <p className="text-xs font-bold uppercase tracking-wide text-[#c99a27]">
                        {isArabic
                          ? "شهادة شخصية"
                          : "Personal Testimonial"}
                      </p>

                      <h2 className="mt-2 text-xl font-black leading-8 text-[#174e2b]">
                        {title}
                      </h2>

                      {name && (
                        <p className="mt-2 text-sm font-bold text-[#57645b]">
                          {name}
                        </p>
                      )}

                      <p className="mt-4 line-clamp-4 text-sm leading-7 text-[#667068]">
                        {description}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveVideo(
                            testimonial
                          )
                        }
                        className="mt-5 w-full rounded-xl bg-[#174e2b] px-5 py-3 font-bold text-white transition hover:bg-[#0e3a20]"
                      >
                        {isArabic
                          ? "مشاهدة الشهادة"
                          : "Watch Testimonial"}
                      </button>

                    </div>

                  </article>
                );
              }
            )}

          </div>
        )}

      </section>

      {/* Additional disclaimer */}
      <section className="border-t border-[#c99a27]/20 bg-white px-5 py-12 md:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-2xl font-black text-[#174e2b]">
            {isArabic
              ? "الغرض من هذه الصفحة"
              : "Purpose of This Archive"}
          </h2>

          <p className="mt-4 leading-8 text-[#647067]">
            {isArabic
              ? "تهدف هذه الصفحة إلى توثيق التجارب والشهادات المرتبطة بإرث الدكتور ضياء العوضي ونظام الطيبات. ولا يتبنى الموقع بصورة مستقلة صحة أي تشخيص أو علاقة سببية طبية وردت في شهادة شخصية."
              : "This page preserves personal accounts associated with the legacy of Dr. Diaa Al-Awady and the Al-Tayyibat System. The website does not independently verify diagnoses or medical causal claims contained in an individual's testimonial."}
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#0e3a20] px-5 py-10 text-center text-white">

        <Image
          src="/images/altayebaat-logo.png"
          alt="Al-Tayyibat"
          width={64}
          height={64}
          className="mx-auto rounded-full"
        />

        <p className="mt-4 font-bold text-[#e6c45a]">
          {isArabic
            ? "نظام الطيبات"
            : "Al-Tayyibat System"}
        </p>

        <p className="mt-2 text-sm text-white/60">
          {isArabic
            ? "توثيق إرث الدكتور ضياء العوضي رحمه الله"
            : "Preserving the legacy of Dr. Diaa Al-Awady"}
        </p>

      </footer>

      {/* Shared video player with English subtitle support */}
      {activeVideo && (
        <VideoModal
          youtubeId={activeVideo.youtubeId}
          title={
            isArabic
              ? activeVideo.titleAr
              : activeVideo.titleEn
          }
          isOpen={true}
          onClose={closeVideo}
          language={locale}
        />
      )}

    </main>
  );
}
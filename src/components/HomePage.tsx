"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

import ar from "@/data/locales/ar";

type HomeContent = typeof ar;

type HomePageProps = {
  locale: "ar" | "en";
  content: HomeContent;
};

export default function HomePage({
  locale,
  content,
}: HomePageProps) {
  const isEnglish = locale === "en";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languageHref = isEnglish ? "/ar" : "/en";
const videosHref = `/${locale}/videos`;
const foodSystemHref = `/${locale}/food-system`;
const booksHref = `/${locale}/books`;
const testimonialsHref = `/${locale}/testimonials`;

  const navLinkClass =
    "border-b-2 border-transparent pb-1 transition hover:border-[#e6c45a] hover:text-[#e6c45a]";

  return (
    <main
      dir={isEnglish ? "ltr" : "rtl"}
      className="min-h-screen bg-[#fcf9f0] text-[#202820]"
    >
      {/* =========================
          HEADER
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-[#d9c48a] bg-[#174e2b]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Brand */}
          <Link
            href={`/${locale}#home`}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/altayebaat-logo.png"
              alt={content.brand}
              width={58}
              height={58}
              priority
              className="rounded-full"
            />

            <div className={isEnglish ? "text-left" : "text-right"}>
              <h1 className="text-xl font-bold text-[#e6c45a]">
                {content.brand}
              </h1>

              <p className="font-english text-xs text-white/80">
                {content.brandEnglish}
              </p>
            </div>
          </Link>

          {/* Navigation */}
<nav className="hidden items-center gap-7 text-base font-semibold md:flex">
  <Link href={`/${locale}#home`} className={navLinkClass}>
    {content.nav.home}
  </Link>

  <Link href={`/${locale}#about`} className={navLinkClass}>
    {content.nav.doctor}
  </Link>

  <Link href={`/${locale}#system`} className={navLinkClass}>
    {content.nav.system}
  </Link>

  <Link href={foodSystemHref} className={navLinkClass}>
    {isEnglish ? "Food Guide" : "دليل الأغذية"}
  </Link>

  <Link href={videosHref} className={navLinkClass}>
    {content.nav.videos}
  </Link>

  <Link href={booksHref} className={navLinkClass}>
    {content.nav.books}
  </Link>

  <Link href={testimonialsHref} className={navLinkClass}>
    {isEnglish ? "Testimonials" : "شهادات وتجارب"}
  </Link>
</nav>

          {/* Language Switch */}
          <Link
            href={languageHref}
            className="rounded-full border border-[#e6c45a] px-4 py-2 text-sm font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
          >
            {content.nav.languageButton}
          </Link>
        </div>

  <div className="border-t border-white/10 md:hidden">
  <button
    type="button"
    onClick={() => setMobileMenuOpen((open) => !open)}
    className="flex w-full items-center justify-between px-6 py-3 text-base font-bold text-white"
    aria-expanded={mobileMenuOpen}
  >
    <span>
      {isEnglish ? "Menu" : "القائمة"}
    </span>

    <span className="text-2xl leading-none">
      {mobileMenuOpen ? "×" : "☰"}
    </span>
  </button>

  {mobileMenuOpen && (
    <nav className="flex flex-col border-t border-white/10 bg-[#0e3a20] px-6 py-3 text-base font-semibold">
      <Link
        href={`/${locale}#home`}
        onClick={() => setMobileMenuOpen(false)}
        className="border-b border-white/10 py-3 hover:text-[#e6c45a]"
      >
        {content.nav.home}
      </Link>

      <Link
        href={`/${locale}#about`}
        onClick={() => setMobileMenuOpen(false)}
        className="border-b border-white/10 py-3 hover:text-[#e6c45a]"
      >
        {content.nav.doctor}
      </Link>

      <Link
        href={`/${locale}#system`}
        onClick={() => setMobileMenuOpen(false)}
        className="border-b border-white/10 py-3 hover:text-[#e6c45a]"
      >
        {content.nav.system}
      </Link>

      <Link
        href={foodSystemHref}
        onClick={() => setMobileMenuOpen(false)}
        className="border-b border-white/10 py-3 hover:text-[#e6c45a]"
      >
        {isEnglish ? "Food Guide" : "دليل الأغذية"}
      </Link>

      <Link
        href={videosHref}
        onClick={() => setMobileMenuOpen(false)}
        className="border-b border-white/10 py-3 hover:text-[#e6c45a]"
      >
        {content.nav.videos}
      </Link>

      <Link
        href={booksHref}
        onClick={() => setMobileMenuOpen(false)}
        className="border-b border-white/10 py-3 hover:text-[#e6c45a]"
      >
        {content.nav.books}
      </Link>

      <Link
        href={testimonialsHref}
        onClick={() => setMobileMenuOpen(false)}
        className="py-3 hover:text-[#e6c45a]"
      >
        {isEnglish ? "Testimonials" : "شهادات وتجارب"}
      </Link>
    </nav>
  )}
</div>

      </header>

      {/* =========================
          HERO
      ========================== */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-16"
      >
        <div
          className={`order-2 text-center md:order-1 ${
            isEnglish ? "md:text-left" : "md:text-right"
          }`}
        >
          <p className="mb-3 text-lg font-semibold text-[#c99a27]">
            {content.hero.memorial}
          </p>

          <h2 className="mb-5 text-5xl font-black leading-tight text-[#174e2b] md:text-7xl">
            {content.hero.title}
          </h2>

          <p
            className={`mx-auto mb-8 max-w-2xl text-lg leading-9 text-gray-700 ${
              isEnglish ? "md:ml-0" : "md:mr-0"
            }`}
          >
            {content.hero.description}
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 ${
              isEnglish ? "md:justify-start" : "md:justify-start"
            }`}
          >
            <Link
              href={`/${locale}#system`}
              className="rounded-full bg-[#174e2b] px-7 py-3 font-semibold text-white transition hover:bg-[#0e3a20]"
            >
              {content.hero.systemButton}
            </Link>

            <Link
              href={videosHref}
              className="rounded-full border-2 border-[#c99a27] px-7 py-3 font-semibold text-[#174e2b] transition hover:bg-[#c99a27] hover:text-white"
            >
              {content.hero.videosButton}
            </Link>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <Image
            src="/images/altayebaat-logo.png"
            alt={content.brand}
            width={580}
            height={580}
            priority
            className="h-auto w-full max-w-[540px]"
          />
        </div>
      </section>

      {/* =========================
          ABOUT THE SYSTEM
      ========================== */}
      <section
        id="system"
        className="scroll-mt-24 bg-white py-20"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-2 font-semibold text-[#c99a27]">
            {content.system.eyebrow}
          </p>

          <h3 className="mb-6 text-4xl font-bold text-[#174e2b] md:text-5xl">
            {content.system.title}
          </h3>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-700">
            {content.system.description}
          </p>
        </div>
      </section>

      {/* =========================
          ABOUT DR. DIAA
      ========================== */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#f8f4e9] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className={isEnglish ? "text-left" : "text-right"}>
              <p className="mb-3 font-semibold text-[#c99a27]">
                {content.doctor.eyebrow}
              </p>

              <h3 className="mb-3 text-4xl font-bold leading-tight text-[#174e2b] md:text-5xl">
                {content.doctor.name}
              </h3>

              <p className="font-english mb-6 text-sm font-semibold tracking-wider text-[#8b7a4a]">
                {content.doctor.englishName}
              </p>

              <p className="mb-5 text-lg leading-9 text-gray-700">
                {content.doctor.paragraph1}
              </p>

              <p className="mb-5 text-lg leading-9 text-gray-700">
                {content.doctor.paragraph2}
              </p>

              <p className="mb-8 text-lg leading-9 text-gray-700">
                {content.doctor.paragraph3}
              </p>

              <a
                href="#doctor-timeline"
                className="inline-flex items-center rounded-full bg-[#174e2b] px-7 py-3 font-semibold text-white transition hover:bg-[#0e3a20]"
              >
                {content.doctor.button}
              </a>
            </div>

            {/* Memorial Card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#d9b74e]/30" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl">
                <div className="flex justify-center">
                  <Image
                    src="/images/altayebaat-logo.png"
                    alt={content.doctor.name}
                    width={430}
                    height={430}
                    className="h-auto w-full max-w-[430px]"
                  />
                </div>

                <div className="mt-4 border-t border-[#eadfbf] pt-5 text-center">
                  <p className="text-xl font-bold text-[#174e2b]">
                    {content.doctor.memorial}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {content.doctor.memorialText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TIMELINE / LEGACY
      ========================== */}
      <section
        id="doctor-timeline"
        className="scroll-mt-24 bg-white py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 font-semibold text-[#c99a27]">
              {isEnglish ? "Life & Legacy" : "المسيرة والإرث"}
            </p>

            <h3 className="text-4xl font-bold text-[#174e2b] md:text-5xl">
              {isEnglish
                ? "Highlights from Dr. Diaa's Journey"
                : "محطات من مسيرة الدكتور ضياء"}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <TimelineCard
              icon="🎓"
              title={
                isEnglish
                  ? "Medical Education"
                  : "التعليم الطبي"
              }
              text={
                isEnglish
                  ? "He began his journey in medicine and continued his medical and academic education."
                  : "بدأ مسيرته من دراسة الطب، ثم واصل تعليمه وتخصصه الطبي والأكاديمي."
              }
            />

            <TimelineCard
              icon="⚕️"
              title={
                isEnglish
                  ? "Medical Career"
                  : "العمل الطبي"
              }
              text={
                isEnglish
                  ? "His medical work was associated with critical and intensive care."
                  : "عمل في مجالات العناية المركزة والحالات الحرجة، واكتسب خبرة سريرية امتدت لسنوات."
              }
            />

            <TimelineCard
              icon="🌿"
              title={
                isEnglish
                  ? "Al-Tayyibat System"
                  : "نظام الطيبات"
              }
              text={
                isEnglish
                  ? "He presented the dietary approach that became known as the Al-Tayyibat System through lectures and interviews."
                  : "قدّم منهجه الغذائي الذي أصبح معروفاً باسم نظام الطيبات، وشرح أفكاره من خلال المحاضرات واللقاءات."
              }
            />

            <TimelineCard
              icon="🎥"
              title={
                isEnglish
                  ? "Digital Legacy"
                  : "إرث رقمي مستمر"
              }
              text={
                isEnglish
                  ? "His recorded lectures, interviews, and educational material remain available for study and preservation."
                  : "بقيت محاضراته ومقاطع الفيديو والمواد المنشورة متاحة للمهتمين بنظام الطيبات بعد رحيله."
              }
            />
          </div>

          <div className="mt-10 rounded-2xl border border-[#eadfbf] bg-[#fffdf7] p-6 text-center">
            <p className="text-sm leading-8 text-gray-600">
              {isEnglish
                ? "The full biography will be prepared from published sources, recorded lectures, and available references, with sources clearly documented."
                : "سيتم إعداد السيرة الكاملة بالاعتماد على المصادر المنشورة، والمحاضرات المسجلة، والمراجع المتاحة، مع توثيق المصادر والإشارة إليها بوضوح."}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED VIDEOS
      ========================== */}
      <section
        id="videos"
        className="scroll-mt-24 bg-[#174e2b] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 font-semibold text-[#e6c45a]">
              {content.videos.eyebrow}
            </p>

            <h3 className="text-4xl font-bold md:text-5xl">
              {content.videos.title}
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/75">
              {content.videos.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos
              .filter((video) => video.featured)
              .map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  priority={index === 0}
                  language={locale}
                />
              ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={videosHref}
              className="inline-flex rounded-full border-2 border-[#e6c45a] px-7 py-3 font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
            >
              {content.videos.button}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          BOOKS
      ========================== */}
      <section
        id="books"
        className="scroll-mt-24 bg-[#fcf9f0] py-20"
      >
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-2 font-semibold text-[#c99a27]">
            {content.books.eyebrow}
          </p>

          <h3 className="mb-6 text-4xl font-bold text-[#174e2b] md:text-5xl">
            {content.books.title}
          </h3>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-700">
            {content.books.description}
          </p>

          <Link
  href={booksHref}
  className="mx-auto mt-10 block max-w-3xl rounded-3xl border border-[#e8dfc7] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
  <div className="mb-4 text-5xl">📖</div>

  <h4 className="mb-3 text-2xl font-bold text-[#174e2b]">
    {isEnglish
      ? "Al-Tayyibat Library"
      : "مكتبة نظام الطيبات"}
  </h4>

  <p className="leading-8 text-gray-600">
    {isEnglish
      ? "Books, PDF files, editions, references, and original sources."
      : "الكتب والملفات والمراجع والإصدارات والمصادر الأصلية."}
  </p>

  <div className="mt-6">
    <span className="inline-flex rounded-full bg-[#174e2b] px-6 py-3 font-semibold text-white">
      {isEnglish ? "Open Books" : "فتح الكتب"}
    </span>
  </div>
</Link>
        </div>
      </section>

      {/* =========================
          DISCLAIMER
      ========================== */}
      <section className="border-t border-[#e5dcc2] bg-[#f4efe2] py-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h4 className="mb-3 text-xl font-bold text-[#174e2b]">
            {content.disclaimer.title}
          </h4>

          <p className="leading-8 text-gray-600">
            {content.disclaimer.text}
          </p>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-[#0e3a20] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/images/altayebaat-logo.png"
              alt={content.brand}
              width={55}
              height={55}
              className="rounded-full"
            />

            <div className={isEnglish ? "text-left" : "text-right"}>
              <p className="font-bold text-[#e6c45a]">
                {content.brand}
              </p>

              <p className="font-english mt-1 text-xs text-white/70">
                {content.brandEnglish}
              </p>
            </div>
          </div>

          <div className="text-sm leading-7 text-white/65">
            <p>
              {isEnglish
                ? "The Legacy of Dr. Diaa Al-Awady"
                : "إرث الدكتور ضياء العوضي — رحمه الله"}
            </p>

            <p>
              {isEnglish
                ? "A digital archive for the Al-Tayyibat System"
                : "مكتبة رقمية لحفظ وتنظيم المواد المتعلقة بنظام الطيبات"}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

type TimelineCardProps = {
  icon: string;
  title: string;
  text: string;
};

function TimelineCard({
  icon,
  title,
  text,
}: TimelineCardProps) {
  return (
    <div className="rounded-2xl border border-[#e8dfc7] bg-[#fcf9f0] p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 text-3xl">{icon}</div>

      <h4 className="mb-3 text-xl font-bold text-[#174e2b]">
        {title}
      </h4>

      <p className="leading-8 text-gray-600">{text}</p>
    </div>
  );
}
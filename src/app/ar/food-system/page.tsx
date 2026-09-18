import Image from "next/image";
import Link from "next/link";

export default function ArabicFoodSystemPage() {
  const navLinkClass =
    "border-b-2 border-transparent pb-1 transition hover:border-[#e6c45a] hover:text-[#e6c45a]";

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fcf9f0] text-[#202820]"
    >

      <div className="mx-auto max-w-6xl px-6 pt-8">
  <div className="flex justify-center">
    <Link
      href="/ar"
      className="rounded-full border border-[#c99a27] px-5 py-2 text-sm font-semibold text-[#c99a27] transition hover:bg-[#c99a27] hover:text-white"
    >
      العودة إلى الرئيسية
    </Link>
  </div>
</div>

      

      {/* =========================
          HEADER / TOOLBAR
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-[#d9c48a] bg-[#174e2b]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Brand */}
          <Link href="/ar" className="flex items-center gap-3">
            <Image
              src="/images/altayebaat-logo.png"
              alt="نظام الطيبات"
              width={58}
              height={58}
              priority
              className="rounded-full"
            />

            <div className="text-right">
              <h1 className="text-xl font-bold text-[#e6c45a]">
                نظام الطيبات
              </h1>

              <p className="text-xs text-white/80">
                AL-TAYYIBAT SYSTEM
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 text-base font-semibold md:flex">
            <Link href="/ar#home" className={navLinkClass}>
              الرئيسية
            </Link>

            <Link href="/ar#about" className={navLinkClass}>
              د. ضياء العوضي
            </Link>

            <Link href="/ar#system" className={navLinkClass}>
              نظام الطيبات
            </Link>

            <Link
              href="/ar/food-system"
              className="border-b-2 border-[#e6c45a] pb-1 text-[#e6c45a]"
            >
              دليل الأغذية
            </Link>

            <Link href="/ar/videos" className={navLinkClass}>
              الفيديوهات
            </Link>

            <Link href="/ar#books" className={navLinkClass}>
              الكتب
            </Link>
          </nav>

          {/* Language Switch */}
          <Link
            href="/en/food-system"
            className="rounded-full border border-[#e6c45a] px-4 py-2 text-sm font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
          >
            English
          </Link>
        </div>
      </header>

      {/* =========================
          FOOD GUIDE
      ========================== */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="mb-2 font-semibold text-[#c99a27]">
              نظام الطيبات
            </p>

            <h2 className="text-4xl font-bold text-[#174e2b] md:text-5xl">
              دليل الأغذية
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-700">
              دليل مرئي للأطعمة المسموح بها والأطعمة الممنوعة ضمن نظام الطيبات.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/food-system/altayebaat-food-system-ar.png"
              alt="دليل الأغذية في نظام الطيبات"
              width={720}
              height={881}
              priority
              className="h-auto w-full max-w-5xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
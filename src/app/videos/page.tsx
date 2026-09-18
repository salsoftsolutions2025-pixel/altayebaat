import Link from "next/link";
import VideoLibrary from "@/components/VideoLibrary";

export default function VideosPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fcf9f0] text-[#202820]"
    >
      {/* =========================
          VIDEO PAGE HEADER
      ========================== */}
      <section className="bg-[#174e2b] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          {/* Back to Home */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#e6c45a] px-5 py-2 text-sm font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
            >
              <span>→</span>
              <span>العودة إلى الرئيسية</span>
            </Link>
          </div>

          <p className="mb-3 font-semibold text-[#e6c45a]">
            مكتبة الدكتور ضياء العوضي
          </p>

          <h1 className="mb-5 text-4xl font-black md:text-6xl">
            مكتبة الفيديو
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-white/80">
            مكتبة رقمية تضم محاضرات ومقاطع شرح ومقابلات الدكتور
            ضياء العوضي المتعلقة بنظام الطيبات، مع تنظيم المحتوى
            حسب الموضوع لتسهيل البحث والوصول.
          </p>
        </div>
      </section>

      {/* Interactive Video Library */}
      <VideoLibrary />
    </main>
  );
}
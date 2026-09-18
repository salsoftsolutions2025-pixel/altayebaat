import Image from "next/image";
import Link from "next/link";

export default function EnglishFoodSystemPage() {
  const navLinkClass =
    "border-b-2 border-transparent pb-1 transition hover:border-[#e6c45a] hover:text-[#e6c45a]";

  return (
    <main className="min-h-screen bg-[#fcf9f0] text-[#202820]">

   

      {/* =========================
          HEADER / TOOLBAR
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-[#d9c48a] bg-[#174e2b]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Brand */}
          <Link href="/en" className="flex items-center gap-3">
            <Image
              src="/images/altayebaat-logo.png"
              alt="Al-Tayyibat System"
              width={58}
              height={58}
              priority
              className="rounded-full"
            />

            <div className="text-left">
              <h1 className="text-xl font-bold text-[#e6c45a]">
                Al-Tayyibat System
              </h1>

              <p className="text-xs text-white/80">
                AL-TAYYIBAT SYSTEM
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 text-base font-semibold md:flex">
            <Link href="/en#home" className={navLinkClass}>
              Home
            </Link>

            <Link href="/en#about" className={navLinkClass}>
              Dr. Diaa Al-Awady
            </Link>

            <Link href="/en#system" className={navLinkClass}>
              Al-Tayyibat System
            </Link>

            <Link
              href="/en/food-system"
              className="border-b-2 border-[#e6c45a] pb-1 text-[#e6c45a]"
            >
              Food Guide
            </Link>

            <Link href="/en/videos" className={navLinkClass}>
              Videos
            </Link>

            <Link href="/en#books" className={navLinkClass}>
              Books
            </Link>
          </nav>

          {/* Language Switch */}
          <Link
            href="/ar/food-system"
            className="rounded-full border border-[#e6c45a] px-4 py-2 text-sm font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
          >
            العربية
          </Link>
        </div>
      </header>

         <div className="mx-auto max-w-6xl px-6 pt-8">
  <div className="flex justify-center">
    <Link
      href="/en"
      className="rounded-full border border-[#c99a27] px-5 py-2 text-sm font-semibold text-[#c99a27] transition hover:bg-[#c99a27] hover:text-white"
    >
      Back to Home
    </Link>
  </div>
</div>

      {/* =========================
          FOOD GUIDE
      ========================== */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="mb-2 font-semibold text-[#c99a27]">
              Al-Tayyibat System
            </p>

            <h2 className="text-4xl font-bold text-[#174e2b] md:text-5xl">
              Food Guide
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-700">
              A visual guide to the foods included in the Al-Tayyibat System
              and the foods that should be avoided.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/food-system/altayebaat-food-system-en-ru-de.png"
              alt="Al-Tayyibat food guide"
              width={1536}
              height={2048}
              priority
              className="h-auto w-full max-w-6xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
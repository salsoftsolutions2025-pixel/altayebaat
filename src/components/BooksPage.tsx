import Link from "next/link";
import Image from "next/image";

type BooksPageProps = {
  locale: "ar" | "en";
};

const bookSections = [
  {
    ar: "فلسفة نظام الطيبات",
    en: "Philosophy of the System",
    bookPage: 4,
    pdfPage: 8,
  },
  {
    ar: "الأطعمة المسموحة",
    en: "Permitted Foods",
    bookPage: 9,
    pdfPage: 13,
  },
  {
    ar: "الأطعمة الممنوعة",
    en: "Prohibited Foods",
    bookPage: 22,
    pdfPage: 26,
  },
  {
    ar: "النظريات التي قدمها الدكتور ضياء",
    en: "Theories Presented by Dr. Diaa",
    bookPage: 32,
    pdfPage: 36,
  },
  {
    ar: "التطبيق العملي",
    en: "Practical Application",
    bookPage: 41,
    pdfPage: 45,
  },
  {
    ar: "أسئلة شائعة",
    en: "Frequently Asked Questions",
    bookPage: 43,
    pdfPage: 47,
  },
];

export default function BooksPage({
  locale,
}: BooksPageProps) {
  const isArabic = locale === "ar";

  const pdfUrl =
    "/books/altayebaat-system-book.pdf";

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fcf9f0] text-[#202820]"
    >
      {/* Header */}
      <header className="border-b border-[#c99a27]/30 bg-[#0e3a20] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
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
              <p className="text-lg font-bold text-[#e6c45a]">
                {isArabic
                  ? "نظام الطيبات"
                  : "Al-Tayyibat System"}
              </p>

              <p className="text-xs text-white/70">
                {isArabic
                  ? "إرث الدكتور ضياء العوضي"
                  : "The Legacy of Dr. Diaa Al-Awady"}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              {isArabic
                ? "الرئيسية"
                : "Home"}
            </Link>

            <Link
              href={
                isArabic
                  ? "/en/books"
                  : "/ar/books"
              }
              className="rounded-full border border-[#e6c45a] px-4 py-2 text-sm font-semibold text-[#e6c45a] transition hover:bg-[#e6c45a] hover:text-[#174e2b]"
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#e6c45a]">
            {isArabic
              ? "مكتبة نظام الطيبات"
              : "Al-Tayyibat Library"}
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            {isArabic
              ? "الكتب والمصادر"
              : "Books & Resources"}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
            {isArabic
              ? "مكتبة رقمية لتوثيق كتب ومواد الدكتور ضياء العوضي رحمه الله، والحفاظ على إرثه العلمي والتعليمي."
              : "A digital library preserving the books, educational material, and legacy of Dr. Diaa Al-Awady."}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[420px_1fr]">
          {/* Book Card */}
          <div className="overflow-hidden rounded-[28px] border border-[#c99a27]/25 bg-white shadow-xl">
            <div className="relative flex min-h-[460px] items-center justify-center bg-[#0e3a20] p-10">
              <div className="absolute inset-4 rounded-[22px] border border-[#c99a27]/40" />

              <div className="relative z-10 text-center">
                <Image
                  src="/images/altayebaat-logo.png"
                  alt={
                    isArabic
                      ? "نظام الطيبات"
                      : "Al-Tayyibat System"
                  }
                  width={150}
                  height={150}
                  className="mx-auto rounded-full"
                  priority
                />

                <h2 className="mt-8 text-3xl font-black text-[#e6c45a]">
                  {isArabic
                    ? "نظام الطيبات"
                    : "Al-Tayyibat System"}
                </h2>

                <p className="mt-3 text-lg font-semibold text-white">
                  {isArabic
                    ? "الدليل الشامل للغذاء الصحي الطبيعي"
                    : "A Comprehensive Guide to Natural Healthy Food"}
                </p>

                <div className="mx-auto my-6 h-px w-24 bg-[#c99a27]/60" />

                <p className="text-sm text-white/80">
                  {isArabic
                    ? "تأليف"
                    : "By"}
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  {isArabic
                    ? "الدكتور ضياء العوضي"
                    : "Dr. Diaa Al-Awady"}
                </p>

                <p className="mt-1 text-sm text-white/60">
                  {isArabic
                    ? "رحمه الله تعالى"
                    : "May Allah have mercy on him"}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f5ecd3] px-3 py-1 text-xs font-bold text-[#174e2b]">
                  {isArabic
                    ? "50 صفحة"
                    : "50 Pages"}
                </span>

                <span className="rounded-full bg-[#f5ecd3] px-3 py-1 text-xs font-bold text-[#174e2b]">
                  PDF
                </span>

                <span className="rounded-full bg-[#f5ecd3] px-3 py-1 text-xs font-bold text-[#174e2b]">
                  {isArabic
                    ? "الطبعة الإلكترونية"
                    : "Digital Edition"}
                </span>
              </div>

              <div className="grid gap-3">
                <Link
                  href={`/${locale}/books/altayebaat`}
                  className="rounded-xl bg-[#174e2b] px-5 py-3 text-center font-bold text-white transition hover:bg-[#0e3a20]"
                >
                  {isArabic
                    ? "قراءة الكتاب"
                    : "Read Book"}
                </Link>

                <a
                  href={pdfUrl}
                  download="altayebaat-system-book.pdf"
                  className="rounded-xl border-2 border-[#c99a27] px-5 py-3 text-center font-bold text-[#174e2b] transition hover:bg-[#c99a27] hover:text-white"
                >
                  {isArabic
                    ? "تحميل PDF"
                    : "Download PDF"}
                </a>
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div>
            <p className="text-sm font-bold text-[#c99a27]">
              {isArabic
                ? "الكتاب الأول"
                : "Featured Book"}
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#174e2b] md:text-4xl">
              {isArabic
                ? "نظام الطيبات"
                : "Al-Tayyibat System"}
            </h2>

            <h3 className="mt-3 text-xl font-bold text-[#355442]">
              {isArabic
                ? "الدليل الشامل للغذاء الصحي الطبيعي"
                : "A Comprehensive Guide to Natural Healthy Food"}
            </h3>

            <p className="mt-6 leading-8 text-[#4c584f]">
              {isArabic
                ? "يوثق هذا الكتاب فلسفة نظام الطيبات كما قُدمت ضمن إرث الدكتور ضياء العوضي، ويتناول فلسفة النظام، والأطعمة المسموحة والممنوعة، وعدداً من النظريات التي طرحها الدكتور ضياء، إضافة إلى جانب عملي وأسئلة شائعة."
                : "This book documents the philosophy of the Al-Tayyibat System as presented within the legacy of Dr. Diaa Al-Awady. It covers the system's philosophy, permitted and prohibited foods, theories presented by Dr. Diaa, practical guidance, and frequently asked questions."}
            </p>

            {/* Book Contents */}
            <div className="mt-10">
              <h3 className="text-2xl font-black text-[#174e2b]">
                {isArabic
                  ? "محتويات الكتاب"
                  : "Book Contents"}
              </h3>

              <p className="mt-2 text-sm text-[#68736b]">
                {isArabic
                  ? "اضغط على أي قسم للانتقال مباشرة إلى صفحته داخل الكتاب."
                  : "Select any section to open the book directly at that chapter."}
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {bookSections.map((item) => (
                  <Link
                    key={item.en}
                    href={`/${locale}/books/altayebaat?page=${item.pdfPage}`}
                    className="group rounded-2xl border border-[#c99a27]/20 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#c99a27] hover:shadow-lg"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#174e2b] font-bold text-[#e6c45a] transition group-hover:bg-[#c99a27] group-hover:text-[#174e2b]">
                      →
                    </div>

                    <p className="font-bold text-[#174e2b]">
                      {isArabic
                        ? item.ar
                        : item.en}
                    </p>

                    <p className="mt-2 text-xs text-[#7b837e]">
                     {isArabic
  ? `صفحة الكتاب ${item.bookPage}`
  : `Book page ${item.bookPage}`}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sharing */}
            <div className="mt-10 rounded-2xl border border-[#c99a27]/30 bg-[#fffaf0] p-6">
              <h3 className="text-lg font-black text-[#174e2b]">
                {isArabic
                  ? "حول نشر الكتاب"
                  : "About Sharing This Book"}
              </h3>

              <p className="mt-3 leading-7 text-[#4c584f]">
                {isArabic
                  ? "ينص الكتاب على أنه صدقة جارية لروح الدكتور ضياء العوضي رحمه الله، وأنه يمكن مشاركته ونشره بحرية دون تعديل."
                  : "The book states that it is dedicated as an ongoing charity in memory of Dr. Diaa Al-Awady and may be shared and distributed freely without modification."}
              </p>
            </div>

            {/* Medical Disclaimer */}
            <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
              <h3 className="font-black text-amber-900">
                {isArabic
                  ? "تنويه طبي"
                  : "Medical Disclaimer"}
              </h3>

              <p className="mt-3 text-sm leading-7 text-amber-900/80">
                {isArabic
                  ? "المواد المنشورة في هذا الموقع تهدف إلى توثيق وشرح ما قدمه الدكتور ضياء العوضي حول نظام الطيبات، ولا تمثل بديلاً عن الاستشارة الطبية المتخصصة أو التشخيص أو العلاج. لا ينبغي إيقاف أو تغيير أي علاج أو دواء موصوف دون استشارة طبيب مؤهل."
                  : "The material on this website is provided to document and explain the work of Dr. Diaa Al-Awady and the Al-Tayyibat System. It is not a substitute for professional medical advice, diagnosis, or treatment. Do not stop or change prescribed medication or treatment without consulting a qualified healthcare professional."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Invitation */}
      <section className="border-t border-[#c99a27]/20 bg-white px-5 py-14 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold text-[#c99a27]">
            {isArabic
              ? "القراءة داخل الموقع"
              : "Read Online"}
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#174e2b]">
            {isArabic
              ? "اقرأ الكتاب دون مغادرة الموقع"
              : "Read the Book Without Leaving the Website"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#5b675f]">
            {isArabic
              ? "يمكنك قراءة الكتاب صفحة بصفحة، والتنقل بين الأقسام مباشرة، أو تحميل النسخة الأصلية بصيغة PDF."
              : "Read the book page by page, jump directly to individual chapters, or download the original PDF."}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/books/altayebaat`}
              className="rounded-full bg-[#174e2b] px-7 py-3 font-bold text-white transition hover:bg-[#0e3a20]"
            >
              {isArabic
                ? "بدء القراءة"
                : "Start Reading"}
            </Link>

            <a
              href={pdfUrl}
              download="altayebaat-system-book.pdf"
              className="rounded-full border-2 border-[#c99a27] px-7 py-3 font-bold text-[#174e2b] transition hover:bg-[#c99a27] hover:text-white"
            >
              {isArabic
                ? "تحميل الكتاب"
                : "Download Book"}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e3a20] px-5 py-10 text-center text-white md:px-8">
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
    </main>
  );
}
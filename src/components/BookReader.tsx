"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type BookReaderProps = {
  locale: "ar" | "en";
  initialPage?: number;
};

export default function BookReader({
  locale,
  initialPage = 1,
}: BookReaderProps) {
  const isArabic = locale === "ar";

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [pageWidth, setPageWidth] = useState(900);

  /*
   * Select the correct PDF according to language.
   */
  const pdfUrl = isArabic
    ? "/books/altayebaat-system-book.pdf"
    : "/books/altayebaat-system-book-en.pdf";

  /*
   * Correct filename when the reader downloads the PDF.
   */
  const downloadFileName = isArabic
    ? "altayebaat-system-book-ar.pdf"
    : "altayebaat-system-book-en.pdf";

  /*
   * IMPORTANT:
   *
   * The PDF contains 4 introductory pages
   * before the printed book numbering begins.
   *
   * Therefore:
   * PDF page 5  = Book page 1
   * PDF page 8  = Book page 4
   * PDF page 13 = Book page 9
   */
  const bookPage = pageNumber >= 5 ? pageNumber - 4 : null;

 

  /*
   * Responsive PDF width.
   */
  useEffect(() => {
    function updateWidth() {
      const width = Math.min(window.innerWidth - 40, 900);
      setPageWidth(width);
    }

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  /*
   * Go to a physical PDF page.
   */
  function goToPage(page: number) {
    const maximumPage = numPages > 0 ? numPages : 50;

    const safePage = Math.max(
      1,
      Math.min(page, maximumPage)
    );

    setPageNumber(safePage);

    /*
     * Keep selected PDF page in URL.
     */
    window.history.replaceState(
      null,
      "",
      `/${locale}/books/altayebaat?page=${safePage}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function previousPage() {
    goToPage(pageNumber - 1);
  }

  function nextPage() {
    goToPage(pageNumber + 1);
  }

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f7f3e8]"
    >
      {/* =========================
          HEADER
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-[#c99a27]/30 bg-[#0e3a20] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div>
            <h1 className="text-xl font-black text-[#e6c45a]">
              {isArabic
                ? "نظام الطيبات"
                : "Al-Tayyibat System"}
            </h1>

            <p className="text-sm text-white/70">
              {isArabic
                ? "قارئ الكتاب"
                : "Book Reader"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={`/${locale}/books`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
            >
              {isArabic
                ? "العودة إلى المكتبة"
                : "Back to Library"}
            </Link>

            <a
              href={pdfUrl}
              download={downloadFileName}
              className="rounded-full bg-[#c99a27] px-4 py-2 text-sm font-bold text-[#174e2b] transition hover:bg-[#e6c45a]"
            >
              {isArabic
                ? "تحميل PDF"
                : "Download PDF"}
            </a>
          </div>
        </div>
      </header>

      {/* =========================
          SECTION SHORTCUTS
      ========================== */}
      <section className="border-b border-[#c99a27]/20 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-5 py-4">

          {/* Book page 4 = PDF page 8 */}
          <button
            type="button"
            onClick={() => goToPage(8)}
            className="rounded-full bg-[#eef3eb] px-4 py-2 text-sm font-bold text-[#174e2b] transition hover:bg-[#174e2b] hover:text-white"
          >
            {isArabic
              ? "فلسفة النظام"
              : "Philosophy"}
          </button>

          {/* Book page 9 = PDF page 13 */}
          <button
            type="button"
            onClick={() => goToPage(13)}
            className="rounded-full bg-[#eef3eb] px-4 py-2 text-sm font-bold text-[#174e2b] transition hover:bg-[#174e2b] hover:text-white"
          >
            {isArabic
              ? "الأطعمة المسموحة"
              : "Permitted Foods"}
          </button>

          {/* Book page 22 = PDF page 26 */}
          <button
            type="button"
            onClick={() => goToPage(26)}
            className="rounded-full bg-[#eef3eb] px-4 py-2 text-sm font-bold text-[#174e2b] transition hover:bg-[#174e2b] hover:text-white"
          >
            {isArabic
              ? "الأطعمة الممنوعة"
              : "Prohibited Foods"}
          </button>

          {/* Book page 32 = PDF page 36 */}
          <button
            type="button"
            onClick={() => goToPage(36)}
            className="rounded-full bg-[#eef3eb] px-4 py-2 text-sm font-bold text-[#174e2b] transition hover:bg-[#174e2b] hover:text-white"
          >
            {isArabic
              ? "النظريات"
              : "Theories"}
          </button>

          {/* Book page 41 = PDF page 45 */}
          <button
            type="button"
            onClick={() => goToPage(45)}
            className="rounded-full bg-[#eef3eb] px-4 py-2 text-sm font-bold text-[#174e2b] transition hover:bg-[#174e2b] hover:text-white"
          >
            {isArabic
              ? "التطبيق العملي"
              : "Practical Application"}
          </button>

          {/* Book page 43 = PDF page 47 */}
          <button
            type="button"
            onClick={() => goToPage(47)}
            className="rounded-full bg-[#eef3eb] px-4 py-2 text-sm font-bold text-[#174e2b] transition hover:bg-[#174e2b] hover:text-white"
          >
            {isArabic
              ? "الأسئلة الشائعة"
              : "FAQ"}
          </button>
        </div>
      </section>

      {/* =========================
          PAGE CONTROLS
      ========================== */}
      <section className="sticky top-[81px] z-40 border-b border-[#c99a27]/20 bg-[#fcf9f0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-5 py-4">

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className="rounded-full bg-[#174e2b] px-5 py-2 font-bold text-white transition hover:bg-[#0e3a20] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isArabic
              ? "السابق"
              : "Previous"}
          </button>

          {/* PAGE INFORMATION */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-bold text-[#174e2b]">
              {isArabic
                ? "صفحة PDF"
                : "PDF Page"}
            </span>

            <input
              type="number"
              min={1}
              max={numPages || 50}
              value={pageNumber}
              onChange={(event) => {
                const value = Number(event.target.value);

                if (
                  Number.isFinite(value) &&
                  value >= 1
                ) {
                  goToPage(value);
                }
              }}
              className="w-20 rounded-lg border border-[#c99a27]/40 bg-white px-3 py-2 text-center font-bold text-[#174e2b]"
            />

            <span className="text-[#4c584f]">
              / {numPages || 50}
            </span>

            {bookPage !== null && (
              <span className="rounded-full bg-[#eef3eb] px-3 py-1 text-sm font-bold text-[#174e2b]">
                {isArabic
                  ? `صفحة الكتاب ${bookPage}`
                  : `Book page ${bookPage}`}
              </span>
            )}
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={nextPage}
            disabled={
              numPages > 0 &&
              pageNumber >= numPages
            }
            className="rounded-full bg-[#174e2b] px-5 py-2 font-bold text-white transition hover:bg-[#0e3a20] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isArabic
              ? "التالي"
              : "Next"}
          </button>
        </div>
      </section>

      {/* =========================
          PDF READER
      ========================== */}
      <section className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl justify-center">
          <Document
            key={pdfUrl}
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);

              /*
               * Make sure selected page is not higher
               * than the number of pages in this PDF.
               */
              if (pageNumber > numPages) {
                setPageNumber(numPages);
              }
            }}
            loading={
              <div className="rounded-2xl bg-white p-10 text-center shadow">
                <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#174e2b]/20 border-t-[#174e2b]" />

                <p className="font-bold text-[#174e2b]">
                  {isArabic
                    ? "جاري تحميل الكتاب..."
                    : "Loading book..."}
                </p>
              </div>
            }
            error={
              <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-700">
                {isArabic
                  ? "تعذر تحميل الكتاب."
                  : "Unable to load the book."}
              </div>
            }
          >
            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                renderTextLayer
                renderAnnotationLayer
              />
            </div>
          </Document>
        </div>
      </section>

      {/* =========================
          BOTTOM NAVIGATION
      ========================== */}
      <section className="pb-12">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-5">

          <button
            type="button"
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className="rounded-xl border-2 border-[#174e2b] px-6 py-3 font-bold text-[#174e2b] transition hover:bg-[#174e2b] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            {isArabic
              ? "→ السابق"
              : "← Previous"}
          </button>

          <div className="min-w-[160px] text-center">
            <p className="font-bold text-[#174e2b]">
              {isArabic
                ? `صفحة PDF ${pageNumber} من ${numPages || 50}`
                : `PDF Page ${pageNumber} of ${numPages || 50}`}
            </p>

            {bookPage !== null && (
              <p className="mt-1 text-sm font-semibold text-[#68736b]">
                {isArabic
                  ? `صفحة الكتاب ${bookPage}`
                  : `Book page ${bookPage}`}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={nextPage}
            disabled={
              numPages > 0 &&
              pageNumber >= numPages
            }
            className="rounded-xl bg-[#174e2b] px-6 py-3 font-bold text-white transition hover:bg-[#0e3a20] disabled:cursor-not-allowed disabled:opacity-30"
          >
            {isArabic
              ? "التالي ←"
              : "Next →"}
          </button>
        </div>
      </section>
    </main>
  );
}
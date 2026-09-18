"use client";

import {
  ReactNode,
  useState,
  useSyncExternalStore,
} from "react";

import {
  CONSENT_VERSION,
  consentContent,
} from "@/data/consent";

type SiteConsentGateProps = {
  children: ReactNode;
};

type Language = "ar" | "en";

const STORAGE_VERSION_KEY =
  "altayebaat_consent_version";

const STORAGE_ID_KEY =
  "altayebaat_consent_id";

/*
 * Read the consent status from localStorage.
 */
function getConsentSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.localStorage.getItem(
      STORAGE_VERSION_KEY
    ) === CONSENT_VERSION
  );
}

/*
 * Server always starts as not accepted.
 * React will safely update after hydration.
 */
function getServerConsentSnapshot() {
  return false;
}

/*
 * Listen for changes to the consent value.
 */
function subscribeToConsent(
  callback: () => void
) {
  if (typeof window === "undefined") {
    return () => {};
  }

  function handleStorage() {
    callback();
  }

  window.addEventListener(
    "storage",
    handleStorage
  );

  window.addEventListener(
    "altayebaat-consent-change",
    handleStorage
  );

  return () => {
    window.removeEventListener(
      "storage",
      handleStorage
    );

    window.removeEventListener(
      "altayebaat-consent-change",
      handleStorage
    );
  };
}

export default function SiteConsentGate({
  children,
}: SiteConsentGateProps) {
  /*
   * Check whether the CURRENT consent
   * version was already accepted.
   */
  const storedConsentAccepted =
    useSyncExternalStore(
      subscribeToConsent,
      getConsentSnapshot,
      getServerConsentSnapshot
    );

  /*
   * Arabic is the default language.
   *
   * The visitor can change it to English
   * using the buttons at the top.
   */
  const [language, setLanguage] =
    useState<Language>("ar");

  const [checks, setChecks] =
    useState<boolean[]>([
      false,
      false,
      false,
    ]);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const content =
    consentContent[language];

  const acceptedCount =
    checks.filter(Boolean).length;

  const allAccepted =
    acceptedCount === 3;

  function toggleCheck(
    index: number
  ) {
    setChecks((current) =>
      current.map(
        (
          checked,
          itemIndex
        ) =>
          itemIndex === index
            ? !checked
            : checked
      )
    );

    setError("");
  }

  async function enterWebsite() {
    if (!allAccepted) {
      setError(
        content.waiting
      );

      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/consent",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              language,

              itemsAccepted: [
                1,
                2,
                3,
              ],
            }),
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Unable to record consent."
        );
      }

      /*
       * Save the accepted version
       * in this browser.
       */
      window.localStorage.setItem(
        STORAGE_VERSION_KEY,
        CONSENT_VERSION
      );

      /*
       * Save the unique consent ID.
       */
      window.localStorage.setItem(
        STORAGE_ID_KEY,
        result.consentId
      );

      /*
       * Tell React that localStorage changed.
       */
      window.dispatchEvent(
        new Event(
          "altayebaat-consent-change"
        )
      );
    } catch (submissionError) {
      console.error(
        submissionError
      );

      setError(
        language === "ar"
          ? "تعذر حفظ الموافقة. يرجى المحاولة مرة أخرى."
          : "Unable to save your acknowledgment. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  /*
   * If the visitor already accepted
   * this version, show the website.
   */
  if (storedConsentAccepted) {
    return (
      <>
        {children}
      </>
    );
  }

  /*
   * Otherwise show the consent screen.
   */
  return (
    <div
      dir={
        language === "ar"
          ? "rtl"
          : "ltr"
      }
      className="fixed inset-0 z-[9999] overflow-y-auto bg-[#0b2818]"
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(230,196,90,0.12),transparent_35%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-3xl overflow-hidden rounded-[30px] bg-[#fffdf8] shadow-2xl">

          {/* Gold top line */}
          <div className="h-2 bg-[#c99a27]" />

          <div className="px-5 py-8 sm:px-10 sm:py-10">

            {/* Language buttons */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-full border border-[#c99a27]/40 bg-white p-1 shadow-sm">

                <button
                  type="button"
                  onClick={() =>
                    setLanguage(
                      "ar"
                    )
                  }
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    language ===
                    "ar"
                      ? "bg-[#174e2b] text-white"
                      : "text-[#174e2b]"
                  }`}
                >
                  العربية
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setLanguage(
                      "en"
                    )
                  }
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    language ===
                    "en"
                      ? "bg-[#174e2b] text-white"
                      : "text-[#174e2b]"
                  }`}
                >
                  English
                </button>

              </div>
            </div>

            {/* Medical symbol */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#e6c45a] bg-[#fffaf0] text-4xl text-[#174e2b]">
              ⚕
            </div>

            {/* Title */}
            <div className="mx-auto mt-6 max-w-2xl text-center">

              <h1 className="text-2xl font-black text-[#202820] sm:text-3xl">
                {
                  content.title
                }
              </h1>

              <p className="mt-3 leading-7 text-[#667067]">
                {
                  content.intro
                }
              </p>

              <p className="mt-4 text-sm font-bold text-[#174e2b]">
                {
                  content.counter
                }{" "}
                {acceptedCount} / 3
              </p>

            </div>

            {/* Progress bar */}
            <div className="mt-7 h-2 overflow-hidden rounded-full bg-[#e8e1d2]">

              <div
                className="h-full rounded-full bg-[#174e2b] transition-all duration-300"
                style={{
                  width: `${
                    (
                      acceptedCount /
                      3
                    ) * 100
                  }%`,
                }}
              />

            </div>

            {/* Three consent items */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-[#dfd4bd] bg-white">

              {content.items.map(
                (
                  item,
                  index
                ) => (
                  <button
                    key={
                      item.title
                    }
                    type="button"
                    onClick={() =>
                      toggleCheck(
                        index
                      )
                    }
                    className={`flex w-full gap-4 p-5 text-start transition hover:bg-[#fcfaf4] sm:p-6 ${
                      index !== 0
                        ? "border-t border-[#e7decc]"
                        : ""
                    }`}
                  >

                    {/* Checkbox */}
                    <span
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 transition ${
                        checks[index]
                          ? "border-[#174e2b] bg-[#174e2b] text-white"
                          : "border-[#508768] bg-white"
                      }`}
                    >
                      {checks[
                        index
                      ]
                        ? "✓"
                        : ""}
                    </span>

                    {/* Text */}
                    <span>

                      <span className="block font-black leading-7 text-[#174e2b]">
                        {
                          item.title
                        }
                      </span>

                      <span className="mt-1 block text-sm leading-7 text-[#454d47] sm:text-base">
                        {
                          item.text
                        }
                      </span>

                    </span>

                  </button>
                )
              )}

            </div>

            {/* Error message */}
            {error && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-700">
                {error}
              </div>
            )}

            {/* Enter Website button */}
            <button
              type="button"
              onClick={
                enterWebsite
              }
              disabled={
                !allAccepted ||
                isSubmitting
              }
              className={`mt-7 w-full rounded-2xl px-6 py-4 text-lg font-black transition ${
                allAccepted &&
                !isSubmitting
                  ? "bg-[#174e2b] text-white shadow-lg hover:bg-[#0e3a20]"
                  : "cursor-not-allowed bg-[#abc6b7] text-white/80"
              }`}
            >

              {isSubmitting
                ? language ===
                  "ar"
                  ? "جاري حفظ الموافقة..."
                  : "Saving acknowledgment..."
                : content.enter}

            </button>

            {/* Record notice */}
            <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-6 text-[#7c827e]">
              {
                content.recordNotice
              }
            </p>

            {/* Version */}
            <p className="mt-2 text-center text-[11px] text-[#a2a7a3]">

              {language === "ar"
                ? "نسخة الموافقة:"
                : "Consent version:"}{" "}

              {
                CONSENT_VERSION
              }

            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
import {
  NextRequest,
  NextResponse,
} from "next/server";

import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

import {
  CONSENT_VERSION,
  consentContent,
} from "@/data/consent";

export const runtime = "nodejs";

type ConsentRequest = {
  language?: "ar" | "en";
  itemsAccepted?: number[];
};

function createConsentTextHash() {
  const exactConsentText =
    JSON.stringify({
      version: CONSENT_VERSION,
      content: consentContent,
    });

  return crypto
    .createHash("sha256")
    .update(
      exactConsentText,
      "utf8"
    )
    .digest("hex");
}

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      (await request.json()) as ConsentRequest;

    const language =
      body.language === "ar"
        ? "ar"
        : "en";

    const itemsAccepted =
      Array.isArray(
        body.itemsAccepted
      )
        ? body.itemsAccepted
        : [];

    const acceptedAll =
      itemsAccepted.includes(1) &&
      itemsAccepted.includes(2) &&
      itemsAccepted.includes(3);

    if (!acceptedAll) {
      return NextResponse.json(
        {
          success: false,
          message:
            "All three consent items must be accepted.",
        },
        {
          status: 400,
        }
      );
    }

    const consentId =
      crypto.randomUUID();

    const acceptedAt =
      new Date().toISOString();

    const consentTextHash =
      createConsentTextHash();

    const userAgent =
      request.headers.get(
        "user-agent"
      ) ?? "unknown";

    const acceptLanguage =
      request.headers.get(
        "accept-language"
      ) ?? "unknown";

    const record = {
      consentId,
      acceptedAt,
      consentVersion:
        CONSENT_VERSION,
      language,
      itemsAccepted: [
        1,
        2,
        3,
      ],
      consentTextHash,
      userAgent,
      acceptLanguage,
    };

    const dataDirectory =
      path.join(
        process.cwd(),
        "data"
      );

    await fs.mkdir(
      dataDirectory,
      {
        recursive: true,
      }
    );

    const consentFile =
      path.join(
        dataDirectory,
        "consent-records.jsonl"
      );

    await fs.appendFile(
      consentFile,
      JSON.stringify(record) +
        "\n",
      "utf8"
    );

    console.log(
      "Consent saved:",
      consentFile
    );

    console.log(
      "Consent ID:",
      consentId
    );

    return NextResponse.json({
      success: true,
      consentId,
      acceptedAt,
      consentVersion:
        CONSENT_VERSION,
      consentTextHash,
    });
  } catch (error) {
    console.error(
      "Consent recording failed:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to record consent.",
      },
      {
        status: 500,
      }
    );
  }
}
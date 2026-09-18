import { NextRequest, NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const record = {
      ...body,
      receivedAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") ?? "",
      acceptLanguage:
        request.headers.get("accept-language") ?? "",
    };

    /*
     * VERCEL CLIENT-REVIEW MODE
     *
     * Vercel's filesystem is not permanent storage.
     * For the temporary client-review website,
     * accept the consent submission without trying
     * to write a local JSONL file.
     *
     * Before final production, replace this with
     * persistent database storage.
     */
    if (process.env.VERCEL === "1") {
      console.log(
        "Consent received in Vercel review mode:",
        JSON.stringify(record)
      );

      return NextResponse.json({
        success: true,
        reviewMode: true,
      });
    }

    /*
     * LOCAL DEVELOPMENT
     *
     * Continue saving consent records locally
     * when running the website on your own PC.
     */
    const dataDirectory = path.join(
      process.cwd(),
      "data"
    );

    await mkdir(dataDirectory, {
      recursive: true,
    });

    const consentFile = path.join(
      dataDirectory,
      "consent-records.jsonl"
    );

    await appendFile(
      consentFile,
      `${JSON.stringify(record)}\n`,
      "utf8"
    );

    return NextResponse.json({
      success: true,
      reviewMode: false,
    });
  } catch (error) {
    console.error(
      "Consent recording error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Unable to record consent.",
      },
      {
        status: 500,
      }
    );
  }
}
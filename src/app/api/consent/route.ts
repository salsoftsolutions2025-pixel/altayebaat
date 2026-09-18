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
     * TEMPORARY CLIENT-REVIEW MODE
     *
     * On the deployed Vercel production website,
     * do not attempt to save to the local filesystem.
     *
     * Before the final public launch, this will be
     * replaced with permanent database storage.
     */
    if (process.env.NODE_ENV === "production") {
      console.log(
        "Consent accepted in temporary review mode:",
        JSON.stringify(record)
      );

      return NextResponse.json({
        success: true,
        reviewMode: true,
      });
    }

    /*
     * LOCAL DEVELOPMENT ONLY
     *
     * When running npm run dev on your own computer,
     * continue saving consent records locally.
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
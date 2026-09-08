import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { verifyTurnstile } from "@/lib/turnstile";
import { sendProjectEnquiry } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, error: "Invalid submission", issues: parsed.error.flatten() }, { status: 400 });
    if (parsed.data.website) return NextResponse.json({ success: true });
    const token = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const verified = await verifyTurnstile(token, ip);
    if (!verified) return NextResponse.json({ success: false, error: "We could not verify this submission. Please try again." }, { status: 400 });
    await sendProjectEnquiry(parsed.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact_submission_failed", error instanceof Error ? error.message : "unknown_error");
    return NextResponse.json({ success: false, error: "Your project enquiry could not be submitted. Please try again." }, { status: 500 });
  }
}

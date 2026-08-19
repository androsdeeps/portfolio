import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // Wire up to your email provider (Resend audiences, Mailchimp, etc.) here.
  console.log("Newsletter signup:", parsed.data.email);

  return NextResponse.json({ success: true });
}

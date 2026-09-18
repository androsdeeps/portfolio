import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { profile } from "@/data/profile";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form data" },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("Contact form submission (RESEND_API_KEY not set):", parsed.data);
    return NextResponse.json({ success: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true, delivered: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}


// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { contactFormSchema } from "@/lib/validations";
// import { profile } from "@/data/profile";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const parsed = contactFormSchema.safeParse(body);

//     if (!parsed.success) {
//       return NextResponse.json(
//         {
//           error:
//             parsed.error.issues[0]?.message ?? "Invalid form data",
//         },
//         { status: 400 }
//       );
//     }

//     const { name, email, subject, message } = parsed.data;

//     const apiKey = process.env.RESEND_API_KEY;

//     if (!apiKey) {
//       console.error("RESEND_API_KEY is not configured.");

//       return NextResponse.json(
//         { error: "Email service is not configured." },
//         { status: 500 }
//       );
//     }

//     const resend = new Resend(apiKey);

//     const { data, error } = await resend.emails.send({
//       from:
//         process.env.CONTACT_FROM_EMAIL ??
//         "Portfolio <onboarding@resend.dev>",

//       to: profile.email,

//       replyTo: email,

//       subject: `[Portfolio] ${subject}`,

//       text: `From: ${name} <${email}>

// Subject: ${subject}

// Message:
// ${message}`,
//     });

//     if (error) {
//       console.error("Resend error:", error);

//       return NextResponse.json(
//         { error: "Failed to send message" },
//         { status: 502 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       delivered: true,
//       id: data?.id,
//     });
//   } catch (error) {
//     console.error("Contact form error:", error);

//     return NextResponse.json(
//       { error: "Failed to process your message" },
//       { status: 500 }
//     );
//   }
// }
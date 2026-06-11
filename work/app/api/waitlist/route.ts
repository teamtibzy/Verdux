import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { waitlistSchema } from "@/lib/waitlist";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = waitlistSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { message: "Waitlist storage is not configured yet." },
      { status: 503 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  });

  const { firstName, lastName, email, phone, company } = parsed.data;
  const { error } = await supabase.from("waitlist").insert({
    first_name: firstName,
    last_name: lastName,
    email: email.toLowerCase(),
    phone: phone || null,
    company: company || null
  });

  if (error?.code === "23505") {
    return NextResponse.json(
      { message: "This email is already on the VERDUX waitlist." },
      { status: 409 }
    );
  }

  if (error) {
    return NextResponse.json(
      { message: "We could not add you right now. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "You're officially on the VERDUX waitlist."
  });
}

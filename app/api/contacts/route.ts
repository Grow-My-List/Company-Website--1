import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

// 👉 GET (optional - to fetch contacts)
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error("GET ERROR:", error)

      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true, data })

  } catch (error: any) {
    console.error("SERVER ERROR:", error)

    return NextResponse.json(
      { error: error.message || 'Unknown error' },
      { status: 500 }
    )
  }
}


// 👉 POST (MAIN FIXED CODE)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { email, name, message, company, subject } = body

    // ✅ Validation
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: email, name, message' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          email,
          name,
          message,
          company: company || null,
          subject: subject || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    // 🔥 DEBUG
    console.log("Supabase Insert Result:", { data, error })

    if (error) {
      console.error("Supabase ERROR:", error)

      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    )

  } catch (error: any) {
    console.error("SERVER ERROR:", error)

    return NextResponse.json(
      {
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}
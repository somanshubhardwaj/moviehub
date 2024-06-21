import type {NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET( res: NextApiResponse) {
  const token: any =process.env.MOVIEDBAPIKEY;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/person/day?api_key=${token}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

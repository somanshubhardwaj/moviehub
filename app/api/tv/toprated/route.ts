import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const token: any =process.env.MOVIEDBAPIKEY;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {}

export async function GET(request: NextRequest) {
  //   const reviewId = request.nextUrl.searchParams.get("reviewId") ?? "0";
  //   try {
  //   console.log("")
  //     }
  //     throw new Error("Review not found");
  //   } catch (error) {
  //     console.error("API Error:", error);
  //     return NextResponse.json(
  //       { error: "Internal server error" },
  //       { status: 500 }
  //     );
  //   }
}

export async function POST(request: NextRequest) {
  //   try {
  //     const { review, filmId } = await request.json();
  //     if (!review || !filmId) {
  //       return NextResponse.json(
  //         { error: "Film ID and review are required" },
  //         { status: 400 }
  //       );
  //     }
  //     const response = await fetch(
  //       "https://mubi-dev-assets.s3.amazonaws.com/dev-interview-films.json"
  //     );
  //     const films: FilmType[] = await response.json();
  //     let filmReview: FilmReviewType | null = null;
  //     const dateNow = new Date(Date.now()).toDateString();
  //     await new Promise((resolve) => setTimeout(resolve, 5000));
  //     return NextResponse.json({ success: true }, { status: 201 });
  //   } catch (error) {
  //     console.error("API Error:", error);
  //     return NextResponse.json(
  //       { error: "Internal server error" },
  //       { status: 500 }
  //     );
  //   }
}

import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

// FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    if (
      process.env.NODE_ENV === "production" &&
      process.env.IS_BUILD_MODE === "true"
    ) {
      return NextResponse.json([]); // Use `NextResponse.json` to return an empty array
    }

    const categories = await prisma.category.findMany();
    return NextResponse.json(categories, { status: 200 }); // Use `NextResponse.json` to serialize and return categories
  } catch (error) {
    console.error("Category fetch error:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    ); // Ensure errors are also returned using `NextResponse`
  }
};

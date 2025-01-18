import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    });

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log("category fetch error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    // Validate required fields
    const { title, desc, price, img, catSlug, options } = body;
    if (!title || !desc || !price || !catSlug) {
      return NextResponse.json(
        { message: "Missing required fields: title, desc, price, catSlug" },
        { status: 400 }
      );
    }

    // Create the product in the database
    const product = await prisma.product.create({
      data: {
        title,
        desc,
        img: img || null, // Handle optional `img`
        price: price.toString(), // Convert price to string for Decimal
        catSlug,
        options: options || [], // Default to empty array if options is undefined
      },
    });

    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.log("category post error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

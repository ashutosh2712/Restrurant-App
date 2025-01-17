import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const body = await req.json();

    // Update the order in the database
    await prisma.order.update({
      where: {
        id: id,
      },
      data: { status: body },
    });

    // Return a success response
    return new NextResponse(
      JSON.stringify({ message: "Order updated successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    // Return an error response
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

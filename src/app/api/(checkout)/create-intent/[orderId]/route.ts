import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (
  req: Request,
  { params }: { params: { orderId: string } }
) => {
  const { orderId } = params;
  console.log("orderId : ", orderId);

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  const orderPrice = order!.price;
  if (!orderPrice || typeof orderPrice !== "number" || orderPrice <= 0) {
    return NextResponse.json(
      { message: "Invalid order price!" },
      { status: 400 }
    );
  }

  console.log("order from server : ", order);
  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: { intent_id: paymentIntent.id },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        status: 200,
      }
    );
  } else {
    return new NextResponse(JSON.stringify({ message: "Order not found!" }), {
      status: 404,
    });
  }
};

"use server"

import prisma  from "@/utils/connect";

export async function updateOrder(intentId: string){
    try {
        await prisma.order.update({
          where: {
            intent_id: intentId,
          },
          data: { status: "Being prepared!" },
        });
      } catch (err) {
        console.log(err);
      }
}
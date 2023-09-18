import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import { ProductType } from "@/Types/types";
import Image from "next/image";
import React from "react";
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";

// const getData = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/products/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed!");
//   }

//   return res.json();
// };

const SingleProductPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product: any = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  const session = await getAuthSession();

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
      {/* IMAGE CONTAINER */}
      {product?.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={product?.img} alt="" className="object-contain" fill />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase">
          <span>{product?.title}</span>
          {session?.user.isAdmin && <DeleteButton id={product?.id} />}
        </h1>
        <p>{product?.desc}</p>
        <Price product={product!} />
      </div>
    </div>
  );
};

export default SingleProductPage;

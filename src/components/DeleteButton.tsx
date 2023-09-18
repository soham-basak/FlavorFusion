"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: any }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
  }

  const handleDelete = async () => {
    const res = await fetch(
      `https://flavor-fusion-dex.vercel.app/api/products/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.status === 200) {
      router.push("/menu");
      toast("The product has been deleted successfully!");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };

  return (
    <button
      className="bg-red-400 p-2 rounded-full absolute top-4 right-4"
      onClick={handleDelete}
    >
      <Image src="/delete.png" alt="trash" width={20} height={20} />
    </button>
  );
};

export default DeleteButton;

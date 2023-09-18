"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(true);
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="menu-open"
          width={20}
          height={20}
          className=" cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="menu-open"
          width={20}
          height={20}
          className=" cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {user ? (
            <div>
              <Link href="/orders" onClick={() => setOpen(false)}>
                Orders
              </Link>
            </div>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

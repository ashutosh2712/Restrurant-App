"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "@/components/CartIcon";
import { useSession } from "next-auth/react";
const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //   Temporary user
  const { data: session } = useSession();
  const user = session?.user;
  // console.log("admin user", user?.isAdmin);
  return (
    <div>
      {!open ? (
        <Image
          src="/more.png"
          alt="hamburger"
          width={16}
          height={16}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="hamburger"
          width={16}
          height={16}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-orange-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <CartIcon />
          <div className="flex items-center gap-2 cursor-pointer bg-red-200 px-1 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20}></Image>
            <span>+1234567890</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

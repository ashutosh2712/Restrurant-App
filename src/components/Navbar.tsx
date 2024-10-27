import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-orange-500 p-4 flex justify-between items-center border-b-2 border-b-orange-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Delizioso</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4  items-center justify-end flex-1">
        <div className=" md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-red-200 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}></Image>
          <span>+1234567890</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

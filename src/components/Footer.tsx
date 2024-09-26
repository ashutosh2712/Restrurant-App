import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-1/2 md:h-24 p-4 lg:px-20 xl:px-40 text-orange-500 flex items-center justify-between">
      <Link href="/" className="font-bold uppercase text-xl">
        Delizioso
      </Link>
      <p>&copy; All right reserved</p>
    </div>
  );
};

export default Footer;

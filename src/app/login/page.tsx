import Image from "next/image";
import Link from "next/link";
import React from "react";

const Loginpage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/temporary/p3.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Wellcome</h1>
          <p>Log into account or create a ne one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-red-100 rounded">
            <Image src="/google.png" alt="" width={20} height={20} />
            <span>sign in with google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-red-100 rounded">
            <Image src="/facebook.png" alt="" width={20} height={20} />
            <span>sign in with facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;

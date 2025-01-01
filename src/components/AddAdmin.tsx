"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AddAdmin = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div>
      {user?.isAdmin && (
        <Link href="/add" className="flex justify-center">
          <p>Add</p> <p>&nbsp;Product</p>
        </Link>
      )}
    </div>
  );
};

export default AddAdmin;

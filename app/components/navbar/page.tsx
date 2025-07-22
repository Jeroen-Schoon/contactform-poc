import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-3 bg-[var(--primary)] text-[var(--secondary)] space-x-4 flex items-center justify-between">
      <div className="text-xl">
        <Link href="/">
          <Image
            src="/welinkHorizontalLogo.png"
            width={124}
            height={100}
            alt="WeLink Logo"
          />
        </Link>
      </div>
      <div className="space-x-6 md:flex">
        <Link href="/contact" className="">
          Contact us!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

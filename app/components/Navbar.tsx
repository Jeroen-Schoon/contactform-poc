"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-3 space-x-4 flex items-center justify-between bg-[var(--primary)] text-[var(--secondary)]">
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
      <div className="space-x-6 flex">
        <HamburgerMenu
          menuItems={[
            { title: "Home", href: "/" },
            { title: "Contact", href: "/contact" },
          ]}
        />
        <Link href="/contact" className="max-sm:hidden">
          Contact us!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

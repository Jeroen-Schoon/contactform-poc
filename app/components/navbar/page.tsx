import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar space-x-4">
      <Link href="/" className="link">
        Home
      </Link>
      <Link href="/contact" className="link">
        Contact us!
      </Link>
    </nav>
  );
};

export default Navbar;

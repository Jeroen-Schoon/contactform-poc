import Link from "next/link";
import React from "react";
import { useState } from "react";

interface MenuItem {
  title: string;
  href: string;
}

interface Props {
  menuItems: MenuItem[];
}

const HamburgerMenu = ({ menuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-[var(--secondary)] block transition-all duration-400 ease-out
            h-1.5 w-8 rounded-sm ${
              isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-[var(--secondary)] block transition-all duration-200 ease-out
            h-1.5 w-8 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-[var(--secondary)] block transition-all duration-400 ease-out
            h-1.5 w-8 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0.5"
            }`}
        ></span>
      </button>
      {isOpen && (
        <div className="flex flex-col absolute mt-2 right-8 text-center shadow-2xl">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              onClick={handleClick}
              href={item.href}
              className={`border-x-2 border-y-1 bg-secondary text-primary p-1.5 ${
                index === 0 ? "rounded-t-md border-t-2" : ""
              } ${
                index === menuItems.length - 1
                  ? "border-b-2 border-x-2 rounded-b-md"
                  : "border-x-2"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

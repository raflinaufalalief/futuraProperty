import React from "react";
import Logo from "../assets/logo.png";
import product from "../util/Product.json";

export const Navbar = () => {
  return (
    <nav className="fixed w-full left-0 top-0 shadow-bottoms">
      <div className="flex items-center justify-between mx-[5rem]">
        <div className="mx-7">
          <img src={Logo} alt="futura" className="cursor-pointer w-28" />
        </div>
        <div className="font-medium md:block hidden px-7 py-2">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {product.map((menu, i) => (
              <li key={i} className="px-6 hover:text-primary font-Poppins">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

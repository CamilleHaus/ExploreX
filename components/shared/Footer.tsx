"use client";

import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import UseMenuActive from "@/hooks/UseMenuActive";
import { navLinks } from "@/constants";
import Route from "../ui/Route";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full py-5 bg-tertiary mt-10 ">
      <div className="w-[95%] mx-auto max-w-[1450px]">
        <div className="py-5 border-b border-gray-300 border-opacity-20 flex justify-between items-center max-md:flex-col max-md:gap-8">
          <div className="flex-1">
            <Link href={"/"}>
              <h1 className="text-3xl font-extrabold text-light">
                Explore
                <span className="text-primary">X</span>
              </h1>
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-16 flex-1 text-light max-md:flex-col max-md:gap-5">
            {navLinks.map((link, index) => {
              const isActive = UseMenuActive(link.route);

              return (
                <li key={index}>
                  <Route
                    route={link.route}
                    label={link.label}
                    isActive={isActive}
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex gap-5 text0-white flex-1 justify-end text-2xl">
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareXTwitter />
            <FaSquareSnapchat />
          </div>
        </div>
        <div className="w-full text-center mt-3 text-sm text-white">
            &copy; All rights reserved - Camille Haus
        </div>
      </div>
    </div>
  );
};

export default Footer;

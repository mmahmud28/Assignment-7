"use client";
import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { IoIosTime, IoMdTrendingUp } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="navbar bg-base-100 shadow-sm py-3 px-4 md:px-10 flex flex-col md:flex-row gap-3 md:gap-0">


            <div className="flex-1 w-full flex justify-center md:justify-start">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="Logo" width={120} height={35} />
                    </div>
                </Link>
            </div>


            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto items-stretch md:items-center">

                <Link href="/" className="w-full md:w-auto">
                    <div className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-sm shadow-md transition duration-300 w-full md:w-40
      ${pathname === "/" ? "bg-[#244D3F] text-white" : "text-black hover:bg-green-800 hover:text-white"}`}>
                        <MdHome className="text-xl md:text-2xl" />
                        <span className="text-base md:text-lg font-semibold">Home</span>
                    </div>
                </Link>

                <Link href="/timeline" className="w-full md:w-auto">
                    <div className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-sm shadow-md transition duration-300 w-full md:w-40
      ${pathname === "/timeline" ? "bg-[#244D3F] text-white" : "text-black hover:bg-green-800 hover:text-white"}`}>
                        <IoIosTime className="text-xl md:text-2xl" />
                        <span className="text-base md:text-lg font-semibold">Timeline</span>
                    </div>
                </Link>

                <Link href="/status" className="w-full md:w-auto">
                    <div className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-sm shadow-md transition duration-300 w-full md:w-40
      ${pathname === "/status" ? "bg-[#244D3F] text-white" : "text-black hover:bg-green-800 hover:text-white"}`}>
                        <IoMdTrendingUp className="text-xl md:text-2xl" />
                        <span className="text-base md:text-lg font-semibold">Status</span>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;
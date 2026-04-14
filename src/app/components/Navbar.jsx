"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import Link from 'next/link';
import { MdHome } from 'react-icons/md';
import { IoIosTime, IoMdTrendingUp } from 'react-icons/io';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [active, setActive] = useState("home");
    const pathname = usePathname();
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="flex-1">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <Image src={Logo} alt="Logo" width={140} height={40} />
                        </div>
                    </Link>
                </div>
                <div className="flex gap-4 ">
                    <Link href="/">
                        <div onClick={() => setActive("home")} className={`flex items-center gap-2 px-6 py-3 rounded-sm shadow-md transition duration-300 w-fit
          ${pathname === "/"
                                ? "bg-[#244D3F] text-white"
                                : "text-black hover:bg-green-800 hover:text-white"
                            }`}>
                            <MdHome className="text-2xl" />
                            <span className="text-lg font-semibold">Home</span>
                        </div>
                    </Link>

                    <Link href="/timeline">
                        <div onClick={() => setActive("timeline")} className={`flex items-center gap-2 px-6 py-3 rounded-sm shadow-md transition duration-300 w-fit
          ${pathname === "/timeline"
                                ? "bg-[#244D3F] text-white"
                                : "text-black hover:bg-green-800 hover:text-white"
                            }`}>
                            <IoIosTime className="text-2xl" />
                            <span className="text-lg font-semibold">Timeline</span>
                        </div>
                    </Link>

                    <Link href="/status">
                        <div onClick={() => setActive("status")} className={`flex items-center gap-2 px-6 py-3 rounded-sm shadow-md transition duration-300 w-fit
          ${pathname === "/status"
                                ? "bg-[#244D3F] text-white"
                                : "text-black hover:bg-green-800 hover:text-white"
                            }`}>
                            <IoMdTrendingUp className="text-2xl" />
                            <span className="text-lg font-semibold">Status</span>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
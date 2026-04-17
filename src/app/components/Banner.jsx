import Link from 'next/link';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Banner = ({setFriends}) => {

    console.log(setFriends);
    

    return (
        <div className='flex flex-col container mx-auto items-center justify-center text-center pt-20 pb-10 space-y-6'>
            <h1 className="text-5xl font-bold">
                Friends to keep close in your life
            </h1>

            <p className="max-w-xl text-[#64748B]">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
            </p>

            <Link href="/">
                <div className="flex items-center gap-2 px-6 py-3 rounded-sm shadow-md transition duration-300 w-fit bg-[#244D3F] text-white hover:bg-green-800">
                    <IoMdAdd className="text-xl" />
                    <span className="text-xl">Add a Friend</span>
                </div>
            </Link>
        </div>
    );
};

export default Banner;
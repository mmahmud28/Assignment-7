import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';
const TimeLinePage = () => {
    return (
        <div className="flex justify-center items-center m-10">
            <div className="w-full max-w-5xl p-5 space-y-4 card shadow-sm">

                <h1 className="text-2xl font-bold mb-10">Timeline</h1>

                <div className="flex justify-between items-center">

                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">Click</div>
                            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <label className="input flex items-center gap-2">
                            <svg
                                className="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>

                </div>

                <div className='p-4 space-y-4'>
                    <div className="flex gap-2 items-center p-2 bg-gray-100 rounded-sm">
                        <p><MdOutlineMessage className="text-4xl" /></p>
                        <div>
                            <h1 className="text-xl font-semibold">Text</h1>
                            <p className="font-semibold">Asked for career advice</p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center p-2 bg-gray-100 rounded-sm">
                        <p><IoMdCall className="text-4xl" /></p>
                        <div>
                            <h1 className="text-xl font-semibold">Call</h1>
                            <p className="font-semibold">Industry conference meetup</p>
                        </div>
                    </div>


                    <div className="flex gap-2 items-center p-2 bg-gray-100 rounded-sm">
                        <p><FaVideo className="text-4xl" /></p>
                        <div>
                            <h1 className="text-xl font-semibold">Video</h1>
                            <p className="font-semibold">Asked for career advice</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;
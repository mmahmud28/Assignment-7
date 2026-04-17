/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';
const TimeLinePage = () => {


    const [interactions, setInteractions] = useState([]);
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("interactions")) || [];
        setInteractions(stored);
    }, []);

    const filteredData = interactions
        .filter(item => {
            if (filter === "All") return true;
            return item.type === filter;
        })
        .filter(item => {
            return (
                item.type.toLowerCase().includes(search.toLowerCase()) ||
                item.message.toLowerCase().includes(search.toLowerCase())
            );
        });

    return (
        <div className="flex justify-center items-center m-10">
            <div className="w-full max-w-5xl p-5 space-y-4 card shadow-sm">

                <h1 className="text-2xl font-bold mb-10">Timeline</h1>

                <div className="flex justify-between items-center">

                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                                <li><a onClick={() => setFilter("All")}>All</a></li>
                                <li><a onClick={() => setFilter("Call")}>Call</a></li>
                                <li><a onClick={() => setFilter("Text")}>Text</a></li>
                                <li><a onClick={() => setFilter("Video")}>Video</a></li>
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
                            <input
                                type="search"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </label>
                    </div>

                </div>

                <div className='p-4 space-y-4'>


                    {
                        filteredData.map((item, i) => (
                            <div key={i} className="flex gap-3 items-center p-3 bg-gray-100 rounded-lg">

                                <div>
                                    {item.type === "Call" && <IoMdCall className="text-3xl" />}
                                    {item.type === "Text" && <MdOutlineMessage className="text-3xl" />}
                                    {item.type === "Video" && <FaVideo className="text-3xl" />}
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold">{item.type}</h2>
                                    <p className="text-xl text-gray-900">{item.message}</p>
                                    <p className="text-sm text-gray-700">
                                        {new Date(item.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>

                            </div>
                        ))
                    }

                    {filteredData.length === 0 && (
                        <p className="text-center text-gray-500">No interactions found</p>
                    )}

                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;
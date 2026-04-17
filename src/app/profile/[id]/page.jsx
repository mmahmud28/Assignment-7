"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MdDelete, MdHistory, MdOutlineMessage, MdOutlineNotificationsPaused } from "react-icons/md";
import { FaArchive, FaVideo } from "react-icons/fa";
import { IoMdCall, IoMdText } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";

const ProfileDetailesPage = () => {
    const params = useParams();
    const id = params?.id;

      const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/profileData.json')
            .then(res => res.json())
            .then(data => setData(data))
            .finally(() => setLoading(false));
    }, []);

    const friend = data.find(f => f.id == id);

    const handelClick = (type, message) => {
        const newInteraction = {
            friendId: id,
            type,
            message: message,
            date: new Date().toISOString()
        };

        toast.success(`${type} interaction added`);

        const existing = JSON.parse(localStorage.getItem("interactions")) || [];

        const updated = [newInteraction, ...existing];

        localStorage.setItem("interactions", JSON.stringify(updated));


        setInteractions(updated);
    };

    const [interactions, setInteractions] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("interactions")) || [];
        setInteractions(stored);
    }, []);

    const filteredInteractions = interactions.filter(item => item.friendId == id);

    const dataDelete = () => {
        const existing = JSON.parse(localStorage.getItem("interactions")) || [];
        const hasData = existing.some(item => item.friendId == id);

        if (!hasData) {
            toast.warning("No data found to delete");
            return;
        }
        const updated = existing.filter(item => item.friendId != id);
        localStorage.setItem("interactions", JSON.stringify(updated));
        setInteractions(updated);
        toast.error("All Data Deleted");
    }

    return (
        <div className="max-w-300 mx-auto items-center justify-center">

            <ToastContainer />

            {
                loading && (
                    <div className="flex justify-center items-center h-96">
                        <p className="text-xl font-semibold">Loading...</p>
                    </div>
                )
            }

            <div className="flex gap-2">
                <div className="w-100 space-y-5 p-10">
                    <div>
                        <div>



                            <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center space-y-3">

                                {friend?.picture && (
                                    <Image
                                        src={friend.picture}
                                        alt={friend?.name || "user"}
                                        width={100}
                                        height={100}
                                        className="rounded-full object-cover"
                                        loading="eager"
                                    />
                                )}


                                <h2 className="text-xl font-bold text-gray-800">
                                    {friend?.name}
                                </h2>

                                <p className="text-gray-500">
                                    {friend?.days_since_contact}d ago
                                </p>

                                <div className="flex gap-2 flex-wrap justify-center">
                                    {friend?.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700"
                                        >
                                            {tag.toUpperCase()}
                                        </span>
                                    ))}
                                </div>

                                <span
                                    className={`px-4 py-1 rounded-full text-sm font-medium text-white
                    ${friend?.status === "overdue"
                                            ? "bg-red-500"
                                            : friend?.status === "almost due"
                                                ? "bg-orange-400"
                                                : "bg-green-500"
                                        }`}
                                >
                                    {friend?.status === "overdue"
                                        ? "Overdue"
                                        : friend?.status === "almost due"
                                            ? "Almost Due"
                                            : "On Track"}
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-gray-100 border border-gray-300 rounded-sm px-6 py-4 shadow-sm">
                        <MdOutlineNotificationsPaused className="text-2xl text-gray-700" />

                        <p className="text-xl font-semibold text-gray-800">
                            Snooze 2 Weeks
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-4 bg-gray-100 border border-gray-300 rounded-sm px-6 py-4 shadow-sm">
                        <FaArchive className="text-2xl text-gray-700" />

                        <p className="text-xl font-semibold text-gray-800">
                            Archive
                        </p>
                    </div>

                    <div onClick={dataDelete} className="flex items-center justify-center gap-4 bg-gray-100 border border-gray-300 rounded-sm px-6 py-4 shadow-sm">
                        <MdDelete className="text-2xl text-red-500" />

                        <p className="text-xl font-semibold text-red-500">
                            Delete
                        </p>
                        
                    </div>

                </div>

                <div className="w-200 space-y-5 p-10">
                    <div className="flex  gap-4 justify-between">
                        <div className="card bf-base-100 justify-center w-full items-center shadow-sm p-4">
                            <h1 className="text-2xl text-[#244D3F] font-bold">62</h1>
                            <p className="text-[#64748B] text-xl">Days Since Contact</p>
                        </div>
                        <div className="card bf-base-100 w-full justify-center items-center shadow-sm p-4">
                            <h1 className="text-2xl text-[#244D3F] font-bold">30</h1>
                            <p className="text-[#64748B] text-xl">Goal (Days)</p>
                        </div>
                        <div className="card bf-base-100 w-full justify-center items-center shadow-sm p-4">
                            <h1 className="text-2xl text-[#244D3F] font-bold">Feb 27, 2026</h1>
                            <p className="text-[#64748B] text-xl">Next Due</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm p-4">
                        <div className="flex justify-between">
                            <p className="text-[#244D3F] font-bold text-2xl">Relationship Goal</p>
                            <button className="btn">Edit</button>
                        </div>
                        <p className="">Connect every <span className="text-xl font-semibold">30 days </span></p>
                    </div>
                    <div className="p-4 card bg-base-100 shadow-sm">
                        <p className="text-[#244D3F] font-bold text-2xl">Quick Check-In</p>
                        <div className="flex gap-4 justify-between mt-2">

                            <div onClick={() => handelClick("Call", "Call With " + friend?.name)} className="bg-gray-100 w-full card p-4 cursor-pointer text-center">
                                <IoMdCall className="text-2xl mx-auto" />
                                <p className="text-xl font-bold">Call</p>
                            </div>

                            <div onClick={() => handelClick("Text", "Text With " + friend?.name)} className="bg-gray-100 w-full card p-4 cursor-pointer text-center">
                                <IoMdText className="text-2xl mx-auto" />
                                <p className="text-xl font-bold">Text</p>
                            </div>

                            <div onClick={() => handelClick("Video", "Video With " + friend?.name)} className="bg-gray-100 w-full card p-4 cursor-pointer text-center">
                                <FaVideo className="text-2xl mx-auto" />
                                <p className="text-xl font-bold">Video</p>
                            </div>

                        </div>
                    </div>

                    <div className="card shadow-sm p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-[#244D3F] text-2xl font-bold">Recent Interactions</h1>
                            <Link href={"/timeline"} className="flex items-center gap-2 btn">
                                <MdHistory />
                                Full History
                            </Link>
                        </div>

                        <div className="space-y-3">
                            {
                                filteredInteractions.map((item, i) => (
                                    <div key={i} className="flex gap-2 items-center p-2 bg-gray-100 rounded-sm">

                                        <p>
                                            {item.type === "Call" && <IoMdCall className="text-4xl" />}
                                            {item.type === "Text" && <MdOutlineMessage className="text-4xl" />}
                                            {item.type === "Video" && <FaVideo className="text-4xl" />}
                                        </p>

                                        <div>
                                            <h1 className="text-xl font-semibold">{item.type}</h1>
                                            <p className="font-semibold">{item.message}</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailesPage;
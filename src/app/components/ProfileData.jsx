"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfileData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/profileData.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const router = useRouter();

    return (
        <div className="px-20 my-10">
            <div className="grid grid-cols-4 gap-4">
                {
                    data.map((friend, index) => (
                        <div key={index} onClick={() => router.push(`/profile/${friend.id}`)}>

                            <div className="w-80 bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center space-y-3">

                                <Image src={friend.picture} alt={friend.name} width={100} height={100} className="rounded-full object-cover">

                                </Image>


                                <h2 className="text-xl font-bold text-gray-800">
                                    {friend.name}
                                </h2>

                                <p className="text-gray-500">
                                    {friend.days_since_contact}d ago
                                </p>

                                <div className="flex gap-2 flex-wrap justify-center">
                                    {friend.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-2 text-xs rounded-full bg-green-100 text-black font-semibold"
                                        >
                                            {tag.toUpperCase()}
                                        </span>
                                    ))}
                                </div>

                                <span
                                    className={`px-4 py-1 rounded-full text-sm font-medium text-white
        ${friend.status === "overdue"
                                            ? "bg-red-500"
                                            : friend.status === "almost due"
                                                ? "bg-orange-400"
                                                : "bg-[#244D3F]"
                                        }`}
                                >
                                    {friend.status === "overdue"
                                        ? "Overdue"
                                        : friend.status === "almost due"
                                            ? "Almost Due"
                                            : "On Track"}
                                </span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProfileData;
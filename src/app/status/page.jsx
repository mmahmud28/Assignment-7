/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const StatusPage = () => {

    const [chartData, setChartData] = React.useState([]);


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("interactions")) || [];

        const count = {
            Call: 0,
            Text: 0,
            Video: 0,
        };

        stored.forEach(item => {
            if (count[item.type] !== undefined) {
                count[item.type]++;
            }
        });

        const formatted = [
            { name: "Call", value: count.Call },
            { name: "Text", value: count.Text },
            { name: "Video", value: count.Video },
        ];

        setChartData(formatted);
    }, []);

    return (
        <div className='flex justify-center items-center m-10'>
            <div className='w-full max-w-5xl p-5 space-y-4 card shadow-sm'>
                <h1 className='text-4xl font-bold'>Friendship Analytics</h1>

                <div>
                    <p className='font-semibold text-xl mt-2'>By Interaction Type</p>
                    <div>
                        <div className="w-full flex justify-center mt-6">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    label
                                >
                                    <Cell fill="#4F46E5" />   {/* Call */}
                                    <Cell fill="#10B981" />   {/* Text */}
                                    <Cell fill="#F59E0B" />   {/* Video */}
                                </Pie>

                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusPage;
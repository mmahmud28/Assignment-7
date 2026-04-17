"use client";

import React, { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";

const StatusPage = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("interactions")) || [];

    const count = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    stored.forEach((item) => {
      if (count[item.type] !== undefined) {
        count[item.type]++;
      }
    });

    const formatted = [
      { name: "Call", value: count.Call, fill: "#0088FE" },
      { name: "Text", value: count.Text, fill: "#00C49F" },
      { name: "Video", value: count.Video, fill: "#FFBB28" },
    ];

    setChartData(formatted);
  }, []);

  const isEmpty = chartData.every((item) => item.value === 0);

  return (
    <div className="flex justify-center items-center m-10">
      <div className="w-full max-w-5xl p-5 space-y-4 card shadow-sm">
        <h1 className="text-4xl font-bold">Friendship Analytics</h1>

        <p className="font-semibold text-xl mt-2">
          By Interaction Type
        </p>

        <div className="w-full flex justify-center mt-6">
          {isEmpty ? (
            <p className="text-gray-500 text-lg">
              No interactions recorded yet.
            </p>
          ) : (
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={80}
                outerRadius={120}
                cornerRadius={20}
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};
export default StatusPage;
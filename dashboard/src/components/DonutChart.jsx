import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function DonutChart({ data, colors }) {
  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full">
      {/* Donut chart */}
      <div className="w-40 h-40 flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="70%"
              paddingAngle={2}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />

            {/* stacked total in center */}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-800 font-bold text-lg"
            >
              {total}
            </text>
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-500 text-sm"
            >
              Total
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div
        className="
          mt- lg:mt-0 lg:ml-6
          flex flex-wrap lg:flex-col
          justify-center
          gap-x-4 gap-y-2
          w-full
        "
      >
        {data.map((entry, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-xs sm:text-sm"
          >
            <span
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-gray-700 truncate max-w-[80px] sm:max-w-none">
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

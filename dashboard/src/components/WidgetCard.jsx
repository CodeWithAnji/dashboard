import React from "react";

export default function WidgetCard({ title, children }) {
  return (
    <div className="rounded-xl bg-white p-2 shadow flex flex-col items-start h-[210px] ">
      {title && (
        <h3 className="text-md font-semibold text-gray-800 ">{title}</h3>
      )}
      {children}
    </div>
  );
}

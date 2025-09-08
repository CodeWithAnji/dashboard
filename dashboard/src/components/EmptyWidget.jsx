import React from "react";
import WidgetCard from "./WidgetCard";

export default function EmptyWidget({ title, onAddClick }) {
  const isAddWidget = title === "+ Add Widget";

  return (
    <WidgetCard title={isAddWidget ? "" : title}>
      <div className="flex flex-col items-center justify-center text-gray-400 h-full w-full">
        {isAddWidget ? (
          <button
            onClick={onAddClick} // ✅ call parent handler instead of alert
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-500 border border-gray-400 rounded-lg hover:bg-gray-50 transition"
          >
            + Add Widget
          </button>
        ) : (
          <>
            {/* Chart-like SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="10" width="3" height="10" rx="0.5" />
              <rect x="8" y="7" width="3" height="13" rx="0.5" />
              <rect x="13" y="4" width="3" height="16" rx="0.5" />
              <rect x="18" y="2" width="3" height="18" rx="0.5" />
              <path
                d="M3 15 L8 11 L13 7 L19 4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 20 H22 M2 20 V4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <p className="text-xs sm:text-sm text-center">
              No Graph data available!
            </p>
          </>
        )}
      </div>
    </WidgetCard>
  );
}

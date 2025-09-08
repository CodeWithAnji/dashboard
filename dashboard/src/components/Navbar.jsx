import React from "react";
import { Search } from "lucide-react";

export default function Navbar({ search, setSearch }) {
  return (
    <div className="flex justify-between items-center bg-white shadow px-4 py-2">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home <span className="mx-1">›</span>
        <span className="text-gray-800 font-medium">Dashboard V2</span>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search dashboards..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-3 py-1.5 border rounded-lg text-sm focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
    </div>
  );
}

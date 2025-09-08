import React, { useState } from "react";

export default function AddWidgetForm({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("empty");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, type });
    setTitle("");
    setType("empty");
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center border-b px-4 py-3">
        <h2 className="text-lg font-semibold">Add Widget</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Widget Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
            placeholder="Enter widget title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Widget Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
          >
            <option value="empty">Empty Widget</option>
            <option value="chart">Chart Widget</option>
            <option value="risk">Risk Assessment</option>
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-black"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

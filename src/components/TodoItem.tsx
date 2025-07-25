import React from "react";
import type { TodoItemModal } from "../modal/TodoItemModal";

const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemModal) => {
  return (
    <li className="flex items-center justify-between px-4 py-3 border rounded-md shadow-sm bg-white">
      {/* Left Side: Delete + Text */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 font-bold text-lg hover:scale-110 transition"
          title="Delete"
        >
          🗑
        </button>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="w-5 h-5 accent-green-600"
        />
        <span
          onClick={() => onToggle(id)}
          className={`text-xl cursor-pointer select-none ${
            completed ? "line-through text-green-500" : "text-gray-800"
          }`}
        >
          {text}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;

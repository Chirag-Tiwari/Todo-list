import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import type { TodoModal } from "../modal/todoModal";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoModal[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const allCompleted =
    todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className="max-w-xl mx-auto pt-4 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border px-3 py-2 flex-grow rounded shadow-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {allCompleted && (
        <div className="text-green-600 font-semibold text-center mb-4">
          You’ve completed all tasks!
        </div>
      )}

      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

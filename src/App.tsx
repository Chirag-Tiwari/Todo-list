import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TodoList from "./components/TodoLIst";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex justify-end p-4">
      <button
        onClick={toggleTheme}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <TodoList />
    </ThemeProvider>
  );
};

export default App;

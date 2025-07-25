import { ThemeProvider } from "./context/ThemeContext";
import TodoList from "./components/TodoLIst";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <TodoList />
    </ThemeProvider>
  );
};

export default App;

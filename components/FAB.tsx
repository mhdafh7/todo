import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";

const FAB = () => {
  const { todoItems, setTodoItems } = useContext(TodoContext);
  return (
    <button
      className="rounded-xl px-4 py-2 bg-blue-800 text-white fixed bottom-6 left-[50%] translate-x-[-50%]"
      onClick={() => {
        setTodoItems([
          ...todoItems,
          {
            id: `${Math.floor(Math.random() * 9991) + 10}`,
            title: "",
            description: "",
            status: "todo",
          },
        ]);
        console.log(todoItems);
      }}
    >
      Add Todo
    </button>
  );
};
export default FAB;

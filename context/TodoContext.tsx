import { Todo } from "@/components/TodoCard";
import {
  createContext,
  Dispatch,
  ReactFragment,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type contextType = {
  todoItems: Todo[];
  setTodoItems: Dispatch<SetStateAction<any>>;
};
type ChildrenProps = { children: ReactNode | ReactFragment };
const TodoContext = createContext<contextType>({
  todoItems: [],
  setTodoItems: () => {},
});

const TodoProvider = ({ children }: ChildrenProps) => {
  const [todoItems, setTodoItems] = useState([
    {
      id: "1",
      title: "Text 1",
      description: "Description demo",
      status: "todo",
    },
    {
      id: "2",
      title: "Text 2",
      description: "Description demo",
      status: "todo",
    },
    {
      id: "3",
      title: "Text 3",
      description: "Description demo",
      status: "todo",
    },
  ]);
  return (
    <TodoContext.Provider
      value={{
        todoItems,
        setTodoItems,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

import { TodoContext } from "@/context/TodoContext";
import { useContext } from "react";
import TabItem from "./TabTitle";
import TodoCard, { Todo } from "./TodoCard";

const Column = ({ status, name }: { status: string; name: string }) => {
  const { todoItems } = useContext(TodoContext);

  return (
    <section className="flex flex-col gap-y-6 h-full">
      <TabItem name={name} />
      <div className="flex flex-col gap-y-4 h-full">
        {todoItems.map((todo: Todo) => {
          if (todo.status === status) {
            return (
              <TodoCard
                title={todo.title}
                description={todo.description}
                key={todo.id}
                status={todo.status}
              />
            );
          }
        })}
      </div>
    </section>
  );
};
export default Column;

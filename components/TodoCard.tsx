import { TodoContext } from "@/context/TodoContext";
import { useContext } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

export type Todo = {
  id?: string;
  title: string;
  description: string;
  status: string;
};
const TodoCard = ({ title, description }: Todo) => {
  const {todoItems,setTodoItems} = useContext(TodoContext);
  return (
    <div className="flex flex-col gap-4 border-gray-200 border-2 py-4 px-2 rounded-md">
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder="Title of the todo"
        className=" px-2 py-1 border-gray-500 border-2 rounded font-bold"
      />
      <textarea
        name="description"
        id="description"
        value={description}
        placeholder="Description of the todo"
        cols={30}
        rows={2}
        className=" px-2 py-1 border-gray-500 border-2 rounded"
      />
      <div className="flex gap-2 h-8">
        <button className="p-2" onClick={() => {}}>
          <ArrowLeftCircleIcon className="w-4 h-4" />
        </button>
        <button
          className="p-2"
          onClick={(todo) => {
            setTodoItems([

            ]);
          }}
        >
          <TrashIcon className="w-4 h-4 text-red-400" />
        </button>
        <button className="p-2" onClick={() => {}}>
          <ArrowRightCircleIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
export default TodoCard;

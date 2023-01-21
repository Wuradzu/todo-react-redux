import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import {
  setTodoList,
  addTodo,
  sortTodo,
  updateTodo,
} from "./store/toDoSlice";
import Modal from "./components/Modal";
import Empty from "./components/Empty";
import { useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [updateTask, setUpdateTask] = useState("");
  const [currentTask, setCurrentTask] = useState(null);

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const sortCriteria = useSelector((state) => state.todo.sortCriteria);

  const sortedTodoList = useMemo(() => {
    return todoList.filter((todo) => {
      if (sortCriteria === "all") {
        return true;
      }
      if (sortCriteria === "completed") {
        return todo.completed === true;
      }
      if (sortCriteria === "notcompleted") {
        return todo.completed === false;
      }
    });
  }, [todoList, sortCriteria]);

  const handleTask = (newTask) => {
    if (currentTask) {
      const task = {
        id: currentTask,
        task: newTask,
      };

      dispatch(updateTodo(task));
      setCurrentTask(null);
      setUpdateTask("");
      setShowModal(false);
    } else {
      const task = {
        task: newTask,
        id: Date.now(),
      };

      dispatch(addTodo(task));
      setUpdateTask("");

      setShowModal(false);
    }
  };

  const handleUpdate = (id, task) => {
    setShowModal(true);
    setCurrentTask(id);
    setUpdateTask(task);
  };

  useEffect(() => {
    const localStore = JSON.parse(localStorage.getItem("todoList"));
    if (localStore) {
      dispatch(setTodoList(localStore));
    }
  }, []);

  useEffect(() => {
    if (todoList?.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    if (todoList.length === 0) {
      localStorage.clear();
    }
  }, [todoList]);

  return (
    <div className="font-Poppins">
      <Header setShowModal={setShowModal} />
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          updateTask={updateTask}
          handleTask={handleTask}
          currentTask={currentTask}
        />
      )}
      <div className="relative top-[100px]">
        <div className="p-4 flex flex-col justify-center items-center">
          <h1 className="text-center font-semibold text-4xl">Your's To Do</h1>
          <select
            onChange={(e) => dispatch(sortTodo(e.target.value))}
            className="rounded-md p-2 text-md bg-Gainsboro cursor-pointer opacity-90 hover:opacity-100"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not Compteled</option>
          </select>
          {sortedTodoList.length === 0 && <Empty />}
          {sortedTodoList?.length > 0 && (
            <div className="w-[90vw] bg-gray-300 rounded-md min-h-[50vh] mt-4 p-4 flex flex-col gap-2">
              {sortedTodoList.map((todo) => (
                <TodoList
                  key={todo.id}
                  todo={todo}
                  handleUpdate={handleUpdate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

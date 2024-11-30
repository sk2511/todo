import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ListTask from "./components/ListTask";
import CreateTask from "./components/CreateTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem('tasks')) || [])
  },[])
  return (
    <DndProvider backend={HTML5Backend}>
    <Toaster/>
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-32 gap-16 p-3">
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
        <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
      </div>
    </DndProvider>
  );
}

export default App;

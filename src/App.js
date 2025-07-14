import { useContext, useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showEmptyError, setShowEmptyError] = useState(false);
  const [showDuplicateError, setShowDuplicateError] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    

  let taskId = Date.now()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputData.trim() === "") {
      setShowEmptyError(true);
      return;
    } else {
      setShowEmptyError(false);
    }

    if (tasks.some(task => task.title === inputData)) {
      setShowDuplicateError(true);
      return;
    } else {
      setShowDuplicateError(false);
    }
    const newTask = {
      id: taskId,
      title: inputData,
      done: false,
    };

    setTasks([...tasks, newTask]);

    setInputData("");
  };

  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const onStatusChange = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TaskList tasks={tasks} onDelete={onDelete} onStatusChange={onStatusChange} />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your item:
          <input 
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)} 
          />
        </label>
        {showEmptyError && <p className="error-empty">Task cannot be empty</p>}
        {showDuplicateError && <p className="error-exists">Task already exists</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

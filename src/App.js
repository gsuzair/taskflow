import { useState } from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState([]);
  let taskId = Date.now()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputData.trim() === "") return;

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

  return (
    <div>
      <TaskList tasks={tasks} onDelete={onDelete} />
      <form onSubmit={handleSubmit}>
        <label>Enter your item:
          <input 
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

import { useState } from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputData.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: inputData,
      done: false
    };

    setTasks([...tasks, newTask]);
    setInputData("");
  };

  return (
    <div>
      <TaskList tasks={tasks} />
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

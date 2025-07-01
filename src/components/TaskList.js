import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}


export default TaskList;
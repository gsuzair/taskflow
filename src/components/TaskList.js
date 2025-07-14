import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <ul className="task-list">
      {props.tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onStatusChange={props.onStatusChange}
        />
      ))}
    </ul>

  );
}


export default TaskList;
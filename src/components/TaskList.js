import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <ul>
        {props.tasks.map(task => (
            <TaskItem key={task.id} task={task} onDelete={props.onDelete} />
        ))}
    </ul>
  );
}


export default TaskList;
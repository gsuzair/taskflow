function TaskItem({ task, onDelete, onStatusChange }) {
  return (
    <li className={task.done ? "task done" : "task"}>
      <span>
        {task.title}
      </span>
      <button className="done-toggle" onClick={() => onStatusChange(task.id)}>
        {task.done ? "✅" : "⬜"}
      </button>
      <button className="delete" onClick={() => onDelete(task.id)}>
        ❌
      </button>
    </li>
  );
}

export default TaskItem;

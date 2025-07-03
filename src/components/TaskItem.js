function TaskItem({ task, onDelete, onStatusChange }) {
  return (
    <li>
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => onStatusChange(task.id)}>
        {task.done ? "✅" : "⬜"}
      </button>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
function TaskItem(props) {
    return (
    <li>
      {props.title} {props.done && "✅"}
    </li>
  );
}

export default TaskItem;
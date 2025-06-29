import TaskItem from "./TaskItem";

function TaskList() {
    let staticList = ['Item1', 'Item2', 'Item3'];
    return (
        <ul>
        {staticList.map((s, index) => (
            <TaskItem key={index} title={s} />
        ))}
        </ul>
    );
}

export default TaskList;
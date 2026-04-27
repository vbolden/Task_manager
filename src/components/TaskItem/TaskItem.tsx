import type { TaskItemProps } from '../../types';
import type { TaskStatus }  from '../../types';

function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {
    return (
        <div>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <span>Priority: {task.priority} </span>
            </div>

            {/* STATUS CHANGE */}
            <div className={`status ${task.status}`}>
                <select
                value={task.status}
                onChange={(e) =>
                    onStatusChange(task.id, e.target.value as TaskStatus)
                } >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                {/* DELETE BUTTON */}
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TaskItem;
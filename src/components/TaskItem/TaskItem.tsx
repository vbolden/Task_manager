import type { TaskItemProps } from '../../types';
import type { TaskStatus } from '../../types';

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    return (
        <div className='task-card'>
            <div className='task-header'>
                <h3>{task.title}</h3>
                {/* STATUS CHANGE */}
                <div className="status-actions">
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

            <p>{task.description}</p>

            <div className='task-footer'></div>
            <span className={`priority ${task.priority}`}>
                Priority: {task.priority} </span>
            <span className='due-date'>
                Due: {task.dueDate}</span>

        </div>
    )
}

export default TaskItem;
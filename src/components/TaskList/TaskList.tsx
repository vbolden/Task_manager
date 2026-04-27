import TaskItem from '../TaskItem/TaskItem';
import type { TaskListProps} from '../../types';
import { useState } from 'react';

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    // SET STATE
    const [filter, setFilter] = useState('all');

    // FILTERING LOGIC
    const filteredTasks = filter === 'all'
        ? tasks
        : tasks.filter((task) => task.status === filter)

    // RENDER UI FOR TASKLIST
    return (
        <div>
            <h2>Task List</h2>

            {/* FILTER UI */}
            <select
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all-statues">All Statues</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            {/* CONDITIONAL RENDERING */}
            {filteredTasks.length === 0 ? (
                <p>No Tasks Found</p>
            ) : (
                filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    )

}

export default TaskList;
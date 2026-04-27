import TaskItem from '../TaskItem/TaskItem';
import type { TaskListProps} from '../../types';

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    return (
        <div>
            {/* CONDITIONAL RENDERING */}
            {tasks.length === 0 ? (
                <p>No Tasks Found</p>
            ) : (
                tasks.map((task) => (
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
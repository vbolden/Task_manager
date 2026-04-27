import type { TaskFilterProps, TaskStatus } from "../../types";

function TaskFilter({onFilterChange}: TaskFilterProps) {
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        onFilterChange({status: e.target.value as TaskStatus});
    
    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => 
        onFilterChange({priority: e.target.value as any})
    return (
        <div>
            <select onChange={handleStatusChange}>
                <option value="">All Statues</option>
                <option value="pending ">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            <select onChange={handlePriorityChange}>
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
    )
};


export default TaskFilter;
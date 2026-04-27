import type { TaskFilterProps, TaskStatus } from "../../types";

function TaskFilter({onFilterChange}: TaskFilterProps) {
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        onFilterChange({status: e.target.value as TaskStatus});
    
    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => 
        onFilterChange({priority: e.target.value as any})
    
};


export default TaskFilter;
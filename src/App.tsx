import './App.css'
import { useState } from 'react'
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'
import type { Task, TaskStatus } from './types'

const newTasks: Task[] = [
  {
    id: '1',
    title: 'Learn React',
    description: "Study hooks and components",
    status: "completed",
    priority: "low",
    dueDate: "2026-04-30"
  },
  {
    id: '2',
    title: 'Build Project',
    description: "Create task manager",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-05-01"
  },
  {
    id: '3',
    title: 'Review Code',
    description: "Check for bugs",
    status: "pending",
    priority: "medium",
    dueDate: "2026-05-02"
  }
];

function App() {

  const [tasks, setTasks] = useState(newTasks)

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: string;
  }>({});

  // HANDLE STATUS CHANGE
  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    )
  }

  // HANDLE DELETE
  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // APPLY FILTERS
  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    )
  });

  return (
    <div>
      <h1>Task List</h1>

      <TaskFilter
        onFilterChange={newFilters =>
          setFilters(prev => ({ ...prev, ...newFilters }))
        }
      />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App

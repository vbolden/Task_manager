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


  return (
    <div>

    </div>
  )
}

export default App

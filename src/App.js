import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'



const name = 'Task Tracker App'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 26th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Buy Drugs from Sketchy Pete',
        day: 'Feb 28th at 1:00am',
        reminder: false,
      },
      {
        id: 3,
        text: 'Look for where I parked my car',
        day: 'Mar 5th at 10:00pm',
        reminder: true,
      }
    ]
  )

    //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))

  }


  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title={ name } onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={ addTask }/>}
        {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={ deleteTask } 
          onToggle={ toggleReminder } />) 
          : ('No Tasks To Show ')}
          
    </div>
  );
}

export default App;

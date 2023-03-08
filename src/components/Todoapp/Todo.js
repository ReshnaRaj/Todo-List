import React, { useState } from 'react'
import Addtask from './Addtask'
import Listtask from './Listtask'
import './Todo.css'

const Todo = () => {
    const [task,setTask]=useState([
     
    ])
    const addTask=(title)=>{
        const newitem=[...task,{title}]
        setTask(newitem)

    }
    const removeTask=(index)=>{
        const newTask=[...task]
        newTask.splice(index,1)
        setTask(newTask)
    }
  return (
    <div className="todo-container">
    <div className='header'>TODO APP</div>
    <div className='add-task'><Addtask addTask={addTask}/></div>
    <div className='tasks'>{task.map((tasks,index)=>(
        <Listtask tasks={tasks} removeTask={removeTask} index={index} key={index}/>

    ))}</div>

    </div>
  )
}

export default Todo
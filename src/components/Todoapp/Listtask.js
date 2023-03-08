import React from 'react'

const Listtask = ({tasks,index,removeTask}) => {
  return (
    <div>
        <div className='list-task'>
           {tasks.title}
            <button  onClick={()=>{removeTask(index)}} className='delete-btn'>
                Delete
            </button>
        </div>
    </div>
  )
}

export default Listtask
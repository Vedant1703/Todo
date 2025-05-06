import React from 'react'

const ToDoList = (props) => {
  return (
    <li className="flex items-center justify-between px-4 py-2 bg-white rounded-md shadow-sm border border-gray-200 mb-2">
    <span>{props.item}</span>
    <button className="text-red-500 hover:text-red-700 font-medium"
    onClick={e=>{
        props.deleteItem(props.index);
    }}>Delete</button>
  </li>
  
  )
}

export default ToDoList

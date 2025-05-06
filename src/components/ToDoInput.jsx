import React, { useState } from 'react'

function ToDoInput(props) {
    const[inputText , setInputText] = useState(" ");
    const handleEnterPress=(e)=>{
        if(e.keyCode==13){
            props.addList(inputText)
    setInputText("")
        }
    }


  return (
 <div className="flex h-3/5 bg-amber-300 w-2xl ">
 <input
  type="text"
  placeholder="Add a new task..."
  class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
  onKeyDown={handleEnterPress}
  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"


/>
<button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
onClick={()=>{
    props.addList(inputText)
    setInputText("")
    }}>
      Add
    </button>
   
 </div>
  )
}

export default ToDoInput

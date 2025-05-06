import React,{useState} from 'react'
import "./App.css"
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList';


function App() {
  const[listToDo,setListToDo] = useState([]);
  let addList = (inputText) =>{
    if(inputText!=''){
      setListToDo([...listToDo,inputText]);
    }
 
  }

  const deleteListToDo = (key)=> {
    let newListToDo = [...listToDo];
    newListToDo.splice(key,1)
    setListToDo([...newListToDo])
  }
  return (
  <div className="w-full max-w-xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
 <div className="flex flex-col items-center gap-4">
  
  <ToDoInput addList={addList} />
  
  <h1 className="text-xl font-bold">ToDo List</h1>
  
  {listToDo.map((listItem, i)=>{
return(
  <ToDoList key={i} index={i} item = {listItem} deleteItem={deleteListToDo}/>
)
  })}
</div>

  </div>
  
  )
}

export default App

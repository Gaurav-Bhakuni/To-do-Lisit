import { useState } from 'react'
import './App.css'
import Task from './Components/Task';
import React from 'react';

function MyComponent() {
  const handleClick = () => {
    alert('Error '); // Displays a browser alert
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue]= useState("");
  // console.log(inputValue)
  const handleAddTask=()=>
  {
    if(inputValue.trim()) {
    setTask([...task, inputValue]);
    setInputValue("")
  }
}

const deleteTask=(id)=>
{
  console.log(id)
  setTask((data)=>(data.filter((item,index)=> index !=id)))
}

  return (
    <div className='Container'>
      <div className='input section'>
        <input type='text' placeholder='Enter Your Task....' value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={handleAddTask}>Add</button>
      </div>
      {
         task.map((data, index)=>{
          return <Task task={data} key={index} index ={index} deleteTask ={deleteTask} />
        })
        
      }

    </div>
  );
}

export default App

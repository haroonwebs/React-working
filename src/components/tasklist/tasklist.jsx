import { useState } from "react";

function Task() {
    const[tasks, setTask] = useState([])
    const[inputVal, setInputVal]= useState('');

    const handleChange= (event)=>{
        setInputVal(event.target.val);
    }
    const handleClick = ()=>{
        setTask([...tasks, inputVal])
        setInputVal("");
        
    }

 return (
    <>
      <h1>TO-DO List</h1>
      <input type="text" onChange={handleChange} value={inputVal} />
      <button onClick={handleClick}>Add Task</button>
      {tasks.map((data, index) => {
        return <h4 key={index}>{data}</h4>;
      }
      )}
    </>
  );
}

export default Task ;
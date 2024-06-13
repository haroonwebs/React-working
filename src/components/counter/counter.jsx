 import { useState } from "react";
 
 const Counter= () => {

    const [count , setCount]= useState(0)
const handleincrement=()=>{
 setCount(count + 1)  
}
const handledecrement= ()=>{
   if(count>0) setCount(count - 1)}
    return(
        <>
        <div>Components</div>
        <p>{count}</p>
        <button onClick={handleincrement}>Increment </button>
        <button onClick={handledecrement}>Decrement</button>
       </>
    );
};
export default Counter
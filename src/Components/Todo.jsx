
import "./CSS/Todo.css"
import { useState  } from "react";
import {useRef} from "react";
import {useEffect} from "react";
let count  = 0; 
const Todo = () => {

  const [todos, setTodos]= useState([]);
  const inputRef = useRef(null); 

  const add = ()=>{
   
   setTodos([...todos,{no: count++,text:inputRef.current.value, display:""}]);
    inputRef.current.value = "";
  }

  useEffect(()=>{
    console.log(todos);
  }, [todos])
    
  return (
    <div>

        <div className="todo">
           <div className="todo-header">To-DO List</div> 
           <div className="todo-add">
                <input ref={inputRef} type="text" placeholder="Add Your Task" className="todo-input"/>
                <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
           </div>
           
           <div className="todo list"></div>

              {todos.map((item,index)=>{
                return <TodoItems key={index} no={item.no} display= {item.display} text={item.text} />
              })}

        </div>

      
    </div>
  )
}

export default Todo

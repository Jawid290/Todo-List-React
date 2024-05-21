
import "./CSS/TodoItems.css";


import tick from "./Assets/tick.png";

import not from "./Assets/not.png";

import cross from "./Assets/cross.png";






const TodoItems = ({no,display,text, setTodos}) => {

const deleteTodo = (no)=>{
  let data = JSON.parse(localStorage.getItem("todos"));
  data = data.filter((todos)=> todos.no!==no)
  setTodos(data);
}


  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0 ; i<data.length;i++)
    {
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display = "line-through";
        }
        else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }
  
  return (
    <div className= "todoitems" >
      <div calssName={`todoitems-container ${display}`} onClick={()=>{toggle(no)}} >
      {display===""?<img src={not} alt="" />:<img src={tick} alt=""/>}
      
      <div className="todoitems-text">{text}</div>

      </div>
       <img className="todoitem-cross" onClick={()=>{deleteTodo(no)}} src={cross} alt="" />

    
     
    </div>
    
     
  )
}

export default TodoItems

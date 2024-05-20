
import "./CSS/TodoItems.css";


import tick from "./Assets/tick.png";

import not from "./Assets/not.png";

import cross from "./Assets/cross.png";






const TodoItems = ({no,display,text}) => {

  
  return (
    <div className= "todoitems" >
      <div calssName="todoitems-container">
      <img src={not} alt="" />
      <img src={tick} alt=""/>
      <div className="todoitems-text">{text}</div>

      </div>
      <img src={cross} alt="" />

    
     
    </div>
    
     
  )
}

export default TodoItems

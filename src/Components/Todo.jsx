
import "./CSS/Todo.css"
const Todo = () => {
  return (
    <div>

        <div className="todo">
           <div className="todo-header">To-DO List</div> 
           <div className="todo-add">
                <input type="text" placeholder="Add Your Task" className="todo-input"/>
                <div className="todo-add-btn">ADD</div>
           </div>
           
           <div className="todo list"></div>
           
        </div>

      
    </div>
  )
}

export default Todo

import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({items,removeItem, updateItem}) => {
return(

    <div className="todo-list">
        {items.map(item=>{return (
        <div className="todo-list-item">   
        <TodoListItem item={item} updateItem={updateItem}/>
        <button onClick={()=>removeItem(item)}> delete </button>
        </div>
        )
    })}
    
        
    </div>
)
}
export default TodoList;
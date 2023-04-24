import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({items}) => {
return(

    <div>
        {items.map(item=>{return <TodoListItem item={item}/>})}
    </div>
)

}


export default TodoList;
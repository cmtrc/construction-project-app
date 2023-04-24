import React from "react";


const TodoListItem = ({item, updateItem}) => {
return(
    <div style={{textDecoration: item.isChecked ? "line-through" : "none"}}>
        <input type="checkbox" checked={item.isChecked} onChange={(e) => updateItem("isChecked", e.target.checked, item)}/>
       <span>
         {item.description}
        </span>
    </div>
)

    


}


export default TodoListItem;
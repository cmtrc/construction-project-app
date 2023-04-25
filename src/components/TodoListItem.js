import React, { useState } from "react";
import UpdateItem from "./UpdateItem";


const TodoListItem = ({ item, updateItem }) => {
    const [isEditing, setIsEditing] = useState(false)


    return (
        <div onClick={() => setIsEditing(true)}>
            <div style={{ textDecoration: item.isChecked ? "line-through" : "none", display: "flex", flexDirection: "row" }}>
                <input type="checkbox" checked={item.isChecked} onChange={(e) => updateItem("isChecked", e.target.checked, item)} />
                <div className="todo-row">
                    <span>
                        Description: {item.description}
                    </span>
                    <span>
                        Due date: {item.dueDate}
                    </span>
                    <span>
                        Category: {item.category}
                    </span>
                </div>
            </div>
            {isEditing && <UpdateItem currentItem={item} updateItem={updateItem} close={() => setIsEditing(false)} />}
        </div >
    )




}


export default TodoListItem;
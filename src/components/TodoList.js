import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({ items, removeItem, updateItem, filter }) => {
    console.log("filter", filter)
    return (

        <div className="todo-list">
            {
                filter ? items.filter((item) => item.category === filter).map(item => {
                    return (
                        <div className="todo-list-item">
                            <TodoListItem item={item} updateItem={updateItem} />
                            <button onClick={() => removeItem(item)}> delete </button>
                        </div>
                    )
                }) :
                    items.map(item => {
                        return (
                            <div className="todo-list-item">
                                <TodoListItem item={item} updateItem={updateItem} />
                                <button onClick={() => removeItem(item)}> delete </button>
                            </div>
                        )
                    })}



        </div>
    )
}
export default TodoList;
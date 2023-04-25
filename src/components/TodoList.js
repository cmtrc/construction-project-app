import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({ items, removeItem, updateItem, filter }) => {
  return (

    <div className="todo-list">
      {
        filter ? items.filter((item) => item.category === filter).map((item, idx) => {
          return (
            <div className="todo-list-item" key={idx} >
              <TodoListItem item={item} updateItem={updateItem} />
              <button onClick={() => removeItem(item)}> delete </button>

            </div>
          )
        }) :
          items.map((item, idx) => {
            return (
              <div className="todo-list-item" key={idx}>
                <TodoListItem item={item} updateItem={updateItem} />
                <button onClick={() => removeItem(item)}> delete </button>
              </div>
            )
          })}




    </div >
  )
}
export default TodoList;
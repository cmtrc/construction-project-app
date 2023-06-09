import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import NewItem from './components/NewItem';
import TodoList from './components/TodoList';

function App() {
  const TODO_CACHE = "todo-cache"

  let items = [
    {
      description: "QA on main circuits - 2231.B",
      category: "electrical",
      dueDate: null,
      isChecked: false,
    },
    {
      description: "Add additional wall - 2231.B303",
      category: "framing",
      dueDate: null,
      isChecked: false,
    },
    {
      description: "Install twin card for modBus - 2232.C101",
      category: "plumbing",
      dueDate: null,
      isChecked: false,
    },
  ];

  let cachedTodo = localStorage.getItem(TODO_CACHE) ? JSON.parse(localStorage.getItem(TODO_CACHE)) : items;

  const [todoList, setTodoList] = useState(cachedTodo);
  const [filter, setFilter] = useState("")

  const addItem = (item) => {
    setTodoList([...todoList, item]);
    localStorage.setItem(TODO_CACHE, JSON.stringify(todoList))
  };

  const removeItem = (item) => {
    setTodoList(todoList.filter((a) => a.description !== item.description));
    localStorage.setItem(TODO_CACHE, JSON.stringify(todoList))

  };

  const updateItem = (updatedField, updatedValue, item) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.description === item.description) {
          todo[updatedField] = updatedValue
        }
        return todo;
      }
      ))
    localStorage.setItem(TODO_CACHE, JSON.stringify(todoList))

  };

  return (
    <div className="App">
      <div className="container">
        <Filter setFilter={setFilter} />
        <TodoList items={todoList} removeItem={removeItem} updateItem={updateItem} filter={filter} />
        <NewItem addItem={addItem} />
      </div>
    </div>
  );
}

export default App;

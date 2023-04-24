import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import NewItem from './components/NewItem';
import TodoList from './components/TodoList';

function App() {
  const items = [
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

  const [todoList, setTodoList] = useState(items);
  const [filter, setFilter] = useState("")

  const addItem = (item) => {
    setTodoList([...todoList, item]);
  };

  const removeItem = (item) => {
    setTodoList(todoList.filter((a) => a.description !== item.description));
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

  };

  return (
    <div className="App">
      <Filter setFilter={setFilter} />
      <TodoList items={todoList} removeItem={removeItem} updateItem={updateItem} filter={filter} />
      <NewItem addItem={addItem} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

const NewItem = ({ addItem }) => {
  const [item, setItem] = useState({
    description: "",
    category: "plumbing",
    dueDate: "2023-04-25",
  });

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addItem(item);

    setItem({ description: "", category: "", dueDate: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new item</h1>
      <label>
        Description:
        <input
          name="description"
          value={item.description}
          onChange={handleChange}
        />
      </label>
      <p>
        Category:
        <label>
          <input
            checked={item.category === "plumbing"}
            type="radio"
            name="category"
            value="plumbing"
            onChange={handleChange}
          />
          Plumbing
        </label>
        <label>
          <input
            checked={item.category === "electrical"}
            type="radio"
            name="category"
            value="electrical"
            onChange={handleChange}
          />
          Electrical
        </label>
        <label>
          <input
            checked={item.category === "framing"}
            type="radio"
            name="category"
            value="framing"
            onChange={handleChange}
          />
          Framing
        </label>
      </p>
      <label for="dueDate">Due date:</label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        value={item.dueDate}
        min="2023-04-25"
        max="2023-05-30"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewItem;
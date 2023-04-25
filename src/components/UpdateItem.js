import React, { useState } from "react";

const UpdateItem = ({ updateItem, currentItem, close }) => {
    const [item, setItem] = useState({
        description: currentItem.description,
        category: currentItem.category,
        dueDate: currentItem.dueDate,
    });

    const handleChange = (event) => {
        setItem({ ...item, [event.target.name]: event.target.value });
        updateItem([event.target.name], event.target.value, item)
    };

    return (
        <form onSubmit={close}>
            <h1>Update item</h1>
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
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateItem;
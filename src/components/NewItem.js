import React from "react";

const NewItem = () => {
    return (
      <div>
        <label>
          Description: <input name="myInput" />
        </label>
        <p>
          Category:
          <label>
            <input type="radio" name="myRadio" value="option1" />
            Plumbing
          </label>
          <label>
            <input type="radio" name="myRadio" value="option2" />
            Electrical
          </label>
          <label>
            <input type="radio" name="myRadio" value="option3" />
            Framing
          </label>
        </p>
        <label for="due-date">Due date:</label>
  
        <input
          type="date"
          id="due-date"
          name="due-date"
          value={"2023-04-25"}
          min={"2023-04-24"}
          max="2023-05-31"
        />
      </div>
    );
  };
  
  export default NewItem;
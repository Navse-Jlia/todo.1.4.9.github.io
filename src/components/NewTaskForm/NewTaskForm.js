// форма для добавления
import React from 'react';
import './NewTaskForm.css';

const NewTaskForm = () => {
  return (
    //элемент input, который будет использоваться для ввода новой задачи.
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    ></input>
  );
};

export default NewTaskForm;

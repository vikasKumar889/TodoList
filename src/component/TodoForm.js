import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  // Initialize the state to hold the input value
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  // Reference to the input field
  const inputRef = useRef(null);

  // Focus on the input field when the component is rendered
  useEffect(() => {
    inputRef.current.focus();
  });

  // Handle changes in the input field
  const handleChange = e => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    // Pass the new todo item to the parent component
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    // Clear the input field
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;

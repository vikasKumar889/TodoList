import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  // Initialize the state to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo item
  const addTodo = todo => {
    // Check if the input is empty or contains only whitespace
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // Add the new todo to the beginning of the list
    const newTodos = [todo, ...todos];

    // Update the state with the new list of todos
    setTodos(newTodos);
    console.log(...todos);
  };

  // Function to update an existing todo item
  const updateTodo = (todoId, newValue) => {
    // Check if the input is empty or contains only whitespace
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // Update the specified todo item with the new value
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  // Function to remove a todo item
  const removeTodo = id => {
    // Filter out the todo item with the specified id
    const removedArr = [...todos].filter(todo => todo.id !== id);

    // Update the state with the new list of todos
    setTodos(removedArr);
  };

  // Function to mark a todo item as complete
  const completeTodo = id => {
    // Toggle the completion status of the specified todo item
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;

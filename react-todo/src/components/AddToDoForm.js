import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return; // Prevent adding empty todos
    onAddTodo(todoText);
    setTodoText(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Enter a new todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-todo-button">Add</button>
    </form>
  );
};

export default AddTodoForm;

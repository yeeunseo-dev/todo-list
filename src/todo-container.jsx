// TodoContainer.jsx
import React, { useState } from "react";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";

function TodoContainer() {
  const initialState = [
    { id: 0, title: "react공부", content: "아직 부족해", isDone: false },
  ];

  const [todos, setTodos] = useState(initialState);

  const addTodo = (todo) => {
    if (!todo.title.trim() || !todo.content.trim()) {
      alert("제목과 컨텐츠를 모두 입력해주세요.");
      return;
    }

    const newTodo = { ...todo, id: Date.now(), isDone: false };
    setTodos([newTodo, ...todos]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h1>TO-DO LIST📚</h1>
      <div className="horizontalLine"></div>
      <TodoForm onSubmit={addTodo} />
      <div className="horizontalLine"></div>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoContainer;

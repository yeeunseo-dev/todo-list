// Todo.jsx
import React from "react";

function Todo({ todo, toggleTodo, removeTodo }) {
  return (
    <div className={todo.isDone ? "todo done" : "todo"}>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
        {todo.content}
      </div>
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)}>삭제</button>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;

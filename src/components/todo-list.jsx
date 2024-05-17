// TodoList.jsx
import React from "react";
import Todo from "./todo";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div>
      <h2>Working ~</h2>
      <div className="todo-list">
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              style={{ display: "flex", justifyContent: "space-between" }}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
      </div>
      <div className="horizontalLine"></div>
      <h2>Done !</h2>
      <div className="todo-list">
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              style={{ display: "flex", justifyContent: "space-between" }}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
      </div>
    </div>
  );
}

export default TodoList;

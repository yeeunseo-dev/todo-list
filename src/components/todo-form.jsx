// TodoForm.jsx
import React, { useState } from "react";

function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title: title,
      content: content,
    });

    setTitle("");
    setContent("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-title">
        제목
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={title}
          className="todo-title"
          onChange={handleTitleChange}
        />
      </label>
      <label htmlFor="todo-content">
        내용
        <input
          type="text"
          placeholder="자세한 일정을 적어주세요"
          value={content}
          className="todo-content"
          onChange={handleContentChange}
        />
      </label>
      <button type="submit" className="todo-button">
        추가
      </button>
    </form>
  );
}

export default TodoForm;

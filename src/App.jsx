import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, title: "react공부하기", content: "am 9:00~ pm 9:00" },
    { id: 2, title: "요리하기", content: "저녁식사 친구 초대" },
  ];
  const [lists, setLists] = useState(initialState);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addList = (event) => {
    event.preventDefault();

    if (!title || !content) {
      alert("제목과 컨텐츠를 모두 입력해주세요.");
      return;
    }

    setLists([...lists, { id: Date.now(), title: title, content: content }]);

    setTitle("");
    setContent("");
  };

  const removeList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
    //이해 불가
  };

  return (
    <>
      <h1>TO-DO LIST📚</h1>
      <div className="horizontalLine"></div>
      <div className="add-list">
        <form onSubmit={addList}>
          <input
            type="text"
            placeholder="TO-DO"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="자세한 계획을 써주세요."
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <button type="submit">TO-DO 추가</button>
        </form>
      </div>
      <div className="horizontalLine"></div>
      <h3>Working ~</h3>
      <ul>
        {lists.map((list) => (
          <li
            key={list.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>
              TO-DO: {list.title}, 내용: {list.content}{" "}
            </span>
            <button onClick={() => removeList(list.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div className="horizontalLine"></div>
      <h3>Done !</h3>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

const convertToDiscussion = (obj) => {
  return (
    <li>
      <div>
        <img src={obj.avatarUrl}></img>
      </div>
      <div>
        <h2>
          <a href={obj.url}>{obj.title}</a>
        </h2>
        <div>{`${obj.author} / ${obj.createdAt}`}</div>
      </div>
      <div>
        <p>{obj.answer ? "☑" : "☒"}</p>
      </div>
    </li>
  );
};

function App() {
  const [list, setList] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((response) => response.json())
      .then((data) => setList(data.map(convertToDiscussion)));
  }, []);
  return (
    <div className="App">
      <h1>My Agora States</h1>
      <section>
        <div>
          <span>Enter your name:</span>
          <input></input>
        </div>
        <span>Enter your title:</span>
        <input></input>
        <div>Your question:</div>
        <input placeholder="질문을 작성하세요"></input>
        <button /*onClick={}*/>submit</button>
      </section>
      <section>
        <ul>{list}</ul>
      </section>
    </div>
  );
}

export default App;

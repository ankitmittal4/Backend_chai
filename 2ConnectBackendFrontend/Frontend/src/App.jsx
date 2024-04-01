import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
      <h1>Frontend</h1>
      <h3>Jokes: {jokes.length}</h3>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>joke.content</h3>
          <p>joke.content</p>
        </div>
      ))}
    </>
  );
}

export default App;

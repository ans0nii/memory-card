import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Game from "./components/Game";
import "./styles/card.css";
import "./styles/carddisplay.css";
import "./styles/game.css";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <header className="header">
        <h1>Memory Card Game</h1>
        <h2 className="score">Score: {score} </h2>
        <h3 className="highscore">High score: {highScore}</h3>

        <Game
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      </header>
    </>
  );
}

export default App;

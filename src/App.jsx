import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Game from "./components/Game";
import "./styles/card.css";
import "./styles/carddisplay.css";
import "./styles/game.css";
function App() {
  return (
    <>
      <h1>Memory Card Game</h1>
      <section className="cards">
        <Game />
      </section>
    </>
  );
}

export default App;

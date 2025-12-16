import { useState, useEffect } from "react";
import Card from "./Card";

function Game({score,setScore}) {
  const [clickedIds, setClickedIds] = useState([]);
  const [gif, setGif] = useState([]);

  function handleCardClick(id) {
    if (!clickedIds.includes(id)) {
      setClickedIds([...clickedIds, id]);
      setScore(score + 1);
    } else {
      setScore(0);
    }
    shuffleCards();
  }

  useEffect(() => {
    const API_KEY = "GYp6WkATde2qRgyL6GswXqjoq6DFGUJA";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=spider-man&limit=12`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const gifData = data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.original.url,
          title: gif.title,
        }));
        setGif(gifData);
        console.log(gif);
      });
  }, []);

  useEffect(() => {
    console.log("Score:", score);
    console.log("Clicked Ids:", clickedIds);
  }, [score, clickedIds]);

  function shuffleCards() {
    const shuffled = [...gif];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setGif(shuffled);
  }

  if (!gif.length)
    return (
      <section className="loading">
        <p> Loading...</p>{" "}
      </section>
    );

  return (
    <div className="card-grid">
      {gif.map((g) => (
        <Card key={g.id} gif={g} onClick={handleCardClick} />
      ))}
    </div>
  );
}

export default Game;

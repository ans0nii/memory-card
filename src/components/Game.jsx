import { useState, useEffect } from "react";
import Card from "./Card";

function Game() {
  const [score, setScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [gif, setGif] = useState([]);

  function handleCardClick(id) {
    if (!clickedIds.includes(id)) {
      setClickedIds([...clickedIds, id]);
      setScore(score + 1);
    }
}

useEffect(() => {
    console.log(score);
    console.log(clickedIds);
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
      });
  }, [score, clickedIds]);

  if (!gif.length) return <p className="loading">Loading...</p>;

  return (
    <div className="card-grid">
      {gif.map((g) => (
        <Card key={g.id} gif={g} onClick={handleCardClick} />
      ))}
    </div>
  );
}

export default Game;

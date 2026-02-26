import { useState, useEffect } from "react";
import Card from "./Card";

function Game({ score, setScore, highScore, setHighScore }) {
  const [clickedIds, setClickedIds] = useState([]);
  const [gifs, setGifs] = useState([]);
  const newScore = score + 1;

  function handleCardClick(id) {
    if (!clickedIds.includes(id)) {
      setClickedIds([...clickedIds, id]);
      setScore(newScore);

      if (newScore > highScore) {
        setHighScore(newScore);
      }
    } else {
      setScore(0);
      setClickedIds([]);
    }
    shuffleCards();
  }

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=spider-man&limit=12`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch gifs");
        return response.json();
      })
      .then((data) => {
        const gifsData = data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.original.url,
          title: gif.title,
        }));
        setGifs(gifsData);
      });
  }, []);

  function shuffleCards() {
    const shuffled = [...gifs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setGifs(shuffled);
  }

  if (!gifs.length)
    return (
      <section className="loading">
        <p> Loading...</p>{" "}
      </section>
    );

  return (
    <div className="card-grid">
      {gifs.map((g) => (
        <Card key={g.id} gif={g} onClick={handleCardClick} />
      ))}
    </div>
  );
}

export default Game;

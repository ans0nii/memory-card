import { useState, useEffect } from "react";

function Card() {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    const API_KEY = "GYp6WkATde2qRgyL6GswXqjoq6DFGUJA";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=meninblack&limit=12`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const gif = data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.original.url,
          title: gif.title,
        }));
        setGif(gif);
      });
  }, []);

  return (
    <>
      <section className="card">
        {gif ? (
          gif.map((g) => (
            <div key={g.id}>
              <img src={g.url} alt={g.title} />
              <p>{g.title}</p>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
    </>
  );
}

export default Card;

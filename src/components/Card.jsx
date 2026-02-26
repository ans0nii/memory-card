function Card({ gif, onClick }) {
  return (
    <button className="single-card" onClick={() => onClick(gif.id)}>
      <img src={gif.url} alt={gif.title} className="img-border" />
      <p className="gif-title">{gif.title}</p>
    </button>
  );
}

export default Card;

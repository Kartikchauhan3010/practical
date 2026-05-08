

function Emoji() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default Emoji
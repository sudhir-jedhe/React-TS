.star {
    color: #ff9933;
    cursor: pointer;
  }
  const Star = ({ marked, starId }) => {
    return (
      <span data-star-id={starId} className="star" role="button">
        {marked ? '\u2605' : '\u2606'}
      </span>
    );
  };
  
  const StarRating = ({ value }) => {
    const [rating, setRating] = React.useState(parseInt(value) || 0);
    const [selection, setSelection] = React.useState(0);
  
    const hoverOver = event => {
      let val = 0;
      if (event && event.target && event.target.getAttribute('data-star-id'))
        val = event.target.getAttribute('data-star-id');
      setSelection(val);
    };
    return (
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
        onMouseOver={hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <StarRating value={2} />
  );
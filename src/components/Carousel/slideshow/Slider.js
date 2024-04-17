const Slider = ({ images }) => {
  const [active, setActive] = useState(0);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slides">
        {images.map((e, i) => (
          <Slide key={e.caption} {...e} active={i === active} />
        ))}
      </div>
      <div className="navigation">
        <div class="navigation-bottom">
          {images.map((e, i) => (
            <img
              className={`preview ${i === active ? "active" : ""}`}
              key={e.caption}
              onClick={() => setActive(i)}
              src={e.image_url}
              alt={e.caption}
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>
        <div className="navigation-next-prev">
          <div class="next-prev prev" onClick={onPrev}>
            {" "}
            &lt;{" "}
          </div>
          <div class="next-prev next" onClick={onNext}>
            {" "}
            &gt;{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

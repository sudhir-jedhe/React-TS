const Loader = ({ numberOfDots }) => {
    const renderDots = (dots) => {
      const arrayOfDots = new Array(dots).fill(' ');
      return arrayOfDots.map((dot, index) => (
        <div
          className="dot"
          style={{ animationDelay: `${index * 100}ms`}}
        />
      ))
    }
  
    return(
      <div className="loader">
        {renderDots(numberOfDots)}
      </div>
    );
  };
  
  export default Loader;
  
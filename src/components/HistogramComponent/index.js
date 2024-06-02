import React from 'react';

const HistogramBuilder = {
  buildObjectBySeenCount: function(list) {
    const seenCount = {};
    list.forEach(item => {
      seenCount[item] = (seenCount[item] || 0) + 1;
    });
    return seenCount;
  },

  buildHistogram: function(list) {
    const seenCount = this.buildObjectBySeenCount(list);
    const histogram = {};
    for (const key in seenCount) {
      const count = seenCount[key];
      histogram[count] = histogram[count] || [];
      histogram[count].push(parseInt(key));
    }
    return histogram;
  }
};

const Histogram = ({ histogram }) => {
  return (
    <div>
      <h2>Histogram</h2>
      <div className="histogram">
        {Object.entries(histogram).map(([count, elements]) => (
          <div key={count} className="bar" style={{ width: `${count * 20}px` }}>
            <span className="count">{count}</span>
            <span className="elements">{elements.join(', ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HistogramComponent = ({ list }) => {
  const histogram = HistogramBuilder.buildHistogram(list);

  return <Histogram histogram={histogram} />;
};

export default HistogramComponent;



/************************************************* */

const HistogramBuilder = {
    buildObjectBySeenCount: function(list) {
      const seenCount = {};
      list.forEach(item => {
        seenCount[item] = (seenCount[item] || 0) + 1;
      });
      return seenCount;
    },
  
    buildHistogram: function(list) {
      const seenCount = this.buildObjectBySeenCount(list);
      const histogram = {};
      for (const key in seenCount) {
        const count = seenCount[key];
        histogram[count] = histogram[count] || [];
        histogram[count].push(parseInt(key));
      }
      return histogram;
    }
  };
  
  // To visually test your code via output tab
  const list = [2, 4, 5, 2, 3, 4];
  console.log(HistogramBuilder.buildHistogram(list));
  
  export default HistogramBuilder;
  
const HistogramBuilder = {
    // Function to count occurrences of each item in the list
    buildObjectBySeenCount: function(list) {
      const result = {};
      // Iterate over each item in the list
      list.forEach(item => {
        // If the item hasn't been encountered before, initialize its count to 0
        // Then increment the count for this item
        result[item] = (result[item] || 0) + 1;
      });
      // Return the object containing counts of each item
      return result;
    },
  
    // Function to build and display the histogram based on the list provided
    buildHistogram: function(list) {
      // Generate an object with counts of each unique item in the list
      const data = this.buildObjectBySeenCount(list);
      // Select the DOM elements for the histogram's axes and content
      const leftAxis = document.querySelector('.left-axis');
      const bottomAxis = document.querySelector('.bottom-axis');
      const contentAxis = document.querySelector('.content');
      const leftAxisValues = []; // To keep track of unique frequency values
  
      // Populate the left axis with frequency values
      for (const key in data) {
        const val = data[key];
        // If this frequency value hasn't been added to the left axis yet, add it
        if (!leftAxisValues.includes(val)) {
          leftAxisValues.push(val);
          const keyElement = document.createElement('div');
          keyElement.textContent = val; // Set the text to the frequency value
          leftAxis.appendChild(keyElement); // Append this element to the left axis
        }
      }
  
      // Generate bars in the histogram for each unique item
      for (const key in data) {
        const val = data[key];
        const keyElement = document.createElement('div');
        keyElement.textContent = key; // Label for the bar, representing the item
        const valElement = document.createElement('div');
        // Set the height of the bar proportional to its frequency relative to the highest frequency
        valElement.style.height = ((val / Math.max(...leftAxisValues)) * 100) + '%';
  
        bottomAxis.appendChild(keyElement); // Append the label to the bottom axis
        contentAxis.appendChild(valElement); // Append the bar to the histogram content area
      }
    }
  };




  Input: [2, 4, 5, 2, 3, 4]
Histogram:
4 |      ##
3 |     ####
2 |    ######
1 |   ########
    ---------
2  3  4  5
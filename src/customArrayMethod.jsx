const arr = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];
let result;
let nested_array = [
  [1, 2],
  [3, 4],
  [
    [5, [10, 12], 6],
    [7, 8, 9],
  ],
  [10, 11, 12, 13, 14, 15],
];
/*************************** Array For Each method ***************************/

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let current = this[i];
    let index = i;
    callback(current, index, this);
  }
};

/*************************** Array For Map method ***************************/
Array.prototype.customMap = function (callback) {
  const customArray = [];
  for (let i = 0; i < this.length; i++) {
    let current = this[i];
    let index = i;
    customArray.push(callback(current, index, this));
  }
  return customArray;
};

result = arr.customMap((elem) => {
  return 3 * elem;
});

console.log(result);

/*************************** Array For Reverse method ***************************/

Array.prototype.customReverse = function () {
  let left = 0;
  let right = this.length - 1;

  while (left < right) {
    [this[left], this[right]] = [this[right], this[left]];
    left++;
    right--;
  }
  return this;
};

console.log(arr.customReverse());

/*************************** Array For indexOf method ***************************/

Array.prototype.customIndexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) {
      return i;
    }
  }
  return -1;
};

console.log(arr.customIndexOf(9));

/*************************** Array For lastIndexOf method ***************************/

Array.prototype.customLastIndexOf = function (value) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] == value) {
      return i;
    }
  }
  return -1;
};

/*************************** Array For Filter method ***************************/

Array.prototype.customFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    let current = this[i];
    let index = i;
    if (callback(current, index, this)) {
      result.push(current);
    }
  }
  return result;
};

/*************************** Array For Flat  method ***************************/

const recursive_flattened_array = (array) => {
  const resultArr = [];
  const recursive = (arr) => {
    let count = 0;
    while (count < arr.length) {
      const current = arr[count];
      if (Array.isArray(current)) {
        recursive(current);
      } else {
        resultArr.push(current);
      }
      count++;
    }
  };
  recursive(array);
  return resultArr;
};

console.log("Flattened Array: ", recursive_flattened_array(nested_array));

const stackFlatArr = (arr) => {
  const stack = [...arr];
  console.log(stack);
  const flattened_array = [];
  while (stack.length) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
    } else {
      flattened_array.push(current);
    }
  }
  return flattened_array.reverse();
};
console.log(stackFlatArr(nested_array));

function flattenArray(arr) {
  return arr.reduce((flat, current) => {
    if (Array.isArray(current)) {
      return flat.concat(flattenArray(current));
    } else {
      return flat.concat(current);
    }
  }, []);
}

const nestedArray = [1, [2, [3, 4, [5, 6]]], 7, [8]];

const flatArray = flattenArray(nestedArray);

console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

/*************************** Array For Reduce method ***************************/

Array.prototype.customReduce = function (callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < this.length; i++) {
    let current = this[i];
    value = callback(initialValue, current);
  }
  return value;
};
const sum = arr.customReduce((acc = 0, elem) => {
  return acc + elem;
});

console.log(sum); // 55

/*************************** Array For Fill method ***************************/

Array.prototype.customFill = function (
  filledValue,
  start = 0,
  end = this.length
) {
  for (let i = start; i < end; i++) {
    this[i] = filledValue;
  }
  return this;
};

/*************************** Array For Push method ***************************/

Array.prototype.customPush = function (elements) {
  for (let i = 0; i < elements.length; i++) {
    this[elements.length] = elements[i];
  }
  return this;
};

/*************************** Array For Push method ***************************/

Array.prototype.customPush = function (elements) {
  for (let i = 0; i < elements.length; i++) {
    this[elements.length] = elements[i];
  }
  return this.length;
};

/*************************** Array For Sort method ***************************/
Array.prototype.customSort = function (compareFunction) {
  const arrayLength = this.length;
  if (arrayLength <= 1) {
    return this;
  }

  // Use a default comparison function if none is provided
  const compare =
    compareFunction ||
    function (a, b) {
      return String(a) - String(b);
    };

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrayLength - 1; i++) {
      if (compare(this[i], this[i + 1]) > 0) {
        // Swap elements if they are in the wrong order
        // const temp = this[i];
        // this[i] = this[i + 1];
        // this[i + 1] = temp;
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return this;
};

// Example usage:
const numbers = [4, 2, 7, 1, 9, 5];
numbers.mySort();
console.log(numbers); // Output: [1, 2, 4, 5, 7, 9]

/*************************** Array For Shift method ***************************/
Array.prototype.customShift = function () {
  if (this.length === 0) {
    // Return undefined if the array is empty
    return undefined;
  }
  // Save the first element
  const shiftedElement = this[0];
  // Shift the remaining elements to the left
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  // Remove the last element (now a duplicate) and update the length
  this.length--;
  return shiftedElement;
};
// Example usage:
const fruits = ["apple", "banana", "orange"];
const shiftedFruit = fruits.customShift();
console.log(shiftedFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'orange']

/*************************** Array For unShift method ***************************/

Array.prototype.customUnshift = function (...elements) {
  // Calculate the new length of the array after unshifting elements
  const newLength = this.length + elements.length;

  // Make room for new elements by shifting existing elements to the right
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + elements.length] = this[i];
  }

  // Copy the new elements to the beginning of the array
  for (let i = 0; i < elements.length; i++) {
    this[i] = elements[i];
  }

  // Update the length property of the array
  this.length = newLength;

  // Return the new length of the array
  return newLength;
};

// Example usage:
const fruits = ["banana", "orange"];
const newLength = fruits.customUnshift("apple", "grape");

console.log(newLength); // Output: 4
console.log(fruits); // Output: ['apple', 'grape', 'banana', 'orange']

/*************************** Array For push method ***************************/

Array.prototype.customPush = function (...elements) {
  // Get the current length of the array
  const currentLength = this.length;

  // Add new elements to the end of the array
  for (let i = 0; i < elements.length; i++) {
    this[currentLength + i] = elements[i];
  }

  // Return the new length of the array
  return this.length;
};

// Example usage:
const numbers = [1, 2, 3];
const newLength = numbers.customPush(4, 5, 6);

/*************************** Array For Pop method ***************************/

Array.prototype.customPop = function () {
  // Get the current length of the array
  const currentLength = this.length;

  // Check if the array is empty
  if (currentLength === 0) {
    return undefined; // Return undefined for an empty array
  }

  // Get the last element
  const poppedElement = this[currentLength - 1];

  // Remove the last element by truncating the array
  this.length = currentLength - 1;

  // Return the popped element
  return poppedElement;
};

// Example usage:
const numbers = [1, 2, 3];
const poppedElement = numbers.customPop();

console.log(poppedElement); // Output: 3
console.log(numbers); // Output: [1, 2]

/*************************** Array For Every method ***************************/

Array.prototype.customEvery = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

// Check if all elements are greater than 0
const allGreaterThanZero = numbers.customEvery(function (element) {
  return element > 0;
});

console.log(allGreaterThanZero); // Output: true

/*************************** Array For Some method ***************************/

Array.prototype.customSome = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

// Check if at least one element is greater than 3
const anyGreaterThanThree = numbers.customSome(function (element) {
  return element > 3;
});

console.log(anyGreaterThanThree); // Output: true

/*************************** Array For Includes method ***************************/

Array.prototype.customIncludes = function (searchElement, fromIndex = 0) {
  const length = this.length;

  // Handle negative indices
  let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);

  for (let i = startIndex; i < length; i++) {
    if (
      this[i] === searchElement ||
      (Number.isNaN(this[i]) && Number.isNaN(searchElement))
    ) {
      return true;
    }
  }

  return false;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.customIncludes(3)); // Output: true
console.log(numbers.customIncludes(6)); // Output: false

/*************************** Array For lastIndexOf method ***************************/
Array.prototype.customLastIndexOf = function (
  searchElement,
  fromIndex = this.length - 1
) {
  const length = this.length;

  // Handle negative indices
  let startIndex =
    fromIndex >= 0 ? Math.min(fromIndex, length - 1) : length + fromIndex;

  for (let i = startIndex; i >= 0; i--) {
    if (
      this[i] === searchElement ||
      (Number.isNaN(this[i]) && Number.isNaN(searchElement))
    ) {
      return i;
    }
  }

  return -1;
};

// Example usage:
const numbers = [1, 2, 3, 4, 3, 5];

console.log(numbers.customLastIndexOf(3)); // Output: 4
console.log(numbers.customLastIndexOf(6)); // Output: -1

/*************************** Array For FindLastIndex method ***************************/

Array.prototype.customFindLastIndex = function (callback, thisArg) {
  const length = this.length;

  for (let i = length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

// Example usage:
const numbers = [1, 2, 3, 4, 3, 5];

const lastIndex = numbers.customFindLastIndex(function (element) {
  return element === 3;
});

console.log(lastIndex); // Output: 4

/*************************** Array For FindLast method ***************************/

Array.prototype.customFindLast = function (callback, thisArg) {
  const length = this.length;

  for (let i = length - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

// Example usage:
const numbers = [1, 2, 3, 4, 3, 5];

const lastElement = numbers.customFindLast(function (element) {
  return element === 3;
});

console.log(lastElement); // Output: 3

/*************************** Array For Find method ***************************/
Array.prototype.customFind = function (callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const foundElement = numbers.customFind(function (element) {
  return element > 2;
});

console.log(foundElement); // Output: 3

/*************************** Array For At method ***************************/

Array.prototype.customAt = function (index) {
  const length = this.length;

  // Handle negative indices
  const realIndex = index >= 0 ? index : length + index;

  // Check if the index is within the valid range
  if (realIndex >= 0 && realIndex < length) {
    return this[realIndex];
  } else {
    return undefined;
  }
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.customAt(2)); // Output: 3
console.log(numbers.customAt(-1)); // Output: 5
console.log(numbers.customAt(10)); // Output: undefined

/*************************** Array For Pipe method ***************************/

// Pipe utility function

const pipe =
  (...functions) =>
  (input) =>
    functions.reduce((result, func) => func(result), input);
// Example functions
const addTwo = (x) => x + 2;
const square = (x) => x * x;
const double = (x) => x * 2;

// Example usage
const result = pipe(addTwo, square, double)(3);
console.log(result); // Output: ((3 + 2)^2) * 2 = 100
const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);
const method = pipe(getName, makeUpperCase, slice);
const value = method({ name: "devtools" });
console.log(value);

/*************************User
Implement a function that accepts a callback and restricts its invocation to at most once************************ */
function once(callback) {
  let hasBeenCalled = false;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return callback(...args);
    } else {
      console.warn("Function already called!");
      // You can choose to do nothing, throw an error, or handle it in a different way.
    }
  };
}

// Example usage:

const callbackFunction = (message) => {
  console.log(message);
};

const callbackOnce = once(callbackFunction);

callbackOnce("This will be called once."); // Output: This will be called once.
callbackOnce("This will not be called."); // Output: Function already called!

/*************************User Implement custom promise.race ************************ */
function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    // Iterate through the promises
    for (const promise of promises) {
      // Ensure each element is a Promise
      Promise.resolve(promise)
        .then((value) => {
          // Resolve with the first settled promise's value
          resolve(value);
        })
        .catch((error) => {
          // Reject with the first settled promise's error
          reject(error);
        });
    }
  });
}

// Example usage:

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2"), 500)
);
const promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 3"), 800)
);

myPromiseRace([promise1, promise2, promise3])
  .then((result) => console.log("Resolved:", result))
  .catch((error) => console.error("Rejected:", error));

/*************************User Implement custom promise.all ************************ */

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Promises must be provided as an array."));
      return;
    }

    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

    // If the input array is empty, resolve immediately
    if (promises.length === 0) {
      resolve(results);
    }
  });
}

// Example usage:

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 200)
);

promiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log("Resolved:", results);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });

/*************************User Implement custom SetInterval ************************ */

function createSetIntervalPolyfill() {
  // closure
  var intervalID = 0;
  var intervalMap = {};

  function setIntervalPolyfill(callbackFn, delay = 0, ...args) {
    if (typeof callbackFn !== "function") {
      throw new TypeError("'callback' should be a function");
    }

    // Unique
    var id = intervalID++;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callbackFn(...args);
        // Terminating
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();

    return id;
  }

  function clearIntervalPolyfill(intervalID) {
    clearTimeout(intervalMap[intervalID]);
    delete intervalMap[intervalID];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const { setIntervalPolyfill, clearIntervalPolyfill } =
  createSetIntervalPolyfill();

let counter = 0;
let intervalID;

function greeting(name) {
  counter++;
  console.log("Hello", name);
  if (counter >= 3) {
    clearIntervalPolyfill(intervalID);
  }
}

intervalID = setIntervalPolyfill("", 1000, "Yomesh");
/*************************User Implement custom Array Reduce ************************ */
'use strict';

function reduce(callback, initialValue) {
	if (this === null || this === undefined) {
		throw new TypeError(
			'Array.prototype.reduce called on null or undefined'
		);
	}

	if (!callback || typeof callback !== 'function') {
		throw new TypeError(`${callback} is not a function`);
	}

	if (!this.length) {
		if (arguments.length < 2) {
			throw new TypeError('Reduce of empty array with no initial value');
		} else if (arguments.length === 2) {
			return initialValue;
		}
	}

	var k = 0;
	var acc = arguments.length < 2 ? this[k++] : initialValue;

	while (k < this.length) {
		if (Object.prototype.hasOwnProperty.call(this, k)) {
			acc = callback(acc, this[k], k, this);
		}
		k++;
	}

	return acc;
}

module.exports = reduce;


/*************************User Implement custom chaining ************************ */
/**
 * For more programming concepts, questions, tips, and tutorials, visit:
 * 
 * https://bit.ly/devtools-yt
 * https://code.devtools.tech
 * https://devtools.tech
 * 
 * Author: Puneet Ahuja (https://puneetahuja.in)
 */

 /**
  * Question: Create a function calculator that should take one initial value.
  * Chain calculations like add, subtract on it.
  * Return the calculated value on invocation of val function at the end of the chain.
  * 
    var result = cal(2)
            .add(5)
            .sub(4)
            .val()

    console.log("Result is : " , result)

    // Output : 3 (2 + 5 - 4)
  */


/**
 * **********  Approach - 4  **********
 */

class Calculator{
  constructor(initialValue){
    this.accumulator = initialValue;
  }

  add(num){
    this.accumulator += num;
    return this;
  }

  sub(num){
    this.accumulator -= num;
    return this;
  }

  val(){
    return this.accumulator;
  }
}

function cal(initialValue){
  return new Calculator(initialValue);
}


var result = cal(2)
.add(5)
.sub(4)
.val()

console.log("Result is : " , result)


/*************************User Implement DOM API ************************ */

/**
 * For more programming concepts, questions, tips, and tutorials, visit:
 *
 * https://bit.ly/devtools-yt
 * https://code.devtools.tech
 * https://devtools.tech
 *
 * Author: Yomesh Gupta (https://yomeshgupta.com)
 */

/**
 * Question: Implement the following code so that when interviewer calls vDocument.render()
 * then following HTML structure should be printed.
 *
 * const vDocument = new VDocument();
 * const body = vDocument.createElement("body");
 * const div = vDocument.createElement("div");
 *
 * div.innerHTML = "Hello, I am a div!";
 *
 * body.appendChild(div);
 * vDocument.appendChild(body);
 *
 * vDocument.render();
 *
 * Output:
 * <html>
 * 	<body>
 *		<div>
 * 			Hello, I am a div!
 * 		</div>
 * 	<body>
 * </html>
 *
 * To understand the solution, visit: https://www.youtube.com/watch?v=CAzMsXUe2I0
 */

// Solution
const INDENT_SIZE = 4;
const getSpaces = (length) => {
    return new Array(length).fill(" ").join("");
    ///     return " ".repeat(length);
};

class Node {
    constructor(name) {
        this.name = name;
        this.innerHTML = "";
        this.children = [];
    }
    appendChild(node) {
        this.children.push(node);
    }
}

class VDocument extends Node {
    constructor() {
        super("html");
    }

    createElement(nodeName) {
        return new Node(nodeName);
    }
    render() {
        function printTree(currentNode, currentLevel) {
            // calculating the prefix spaces for current level
            const spaces = getSpaces(currentLevel * INDENT_SIZE);

            let output = "";

            // opening tag
            output += `${spaces}<${currentNode.name}>\n`;

            // innerHTML handling
            if (currentNode.innerHTML) {
                output += `${spaces}${getSpaces(INDENT_SIZE)}${
                    currentNode.innerHTML
                }\n`;
            }

            // loop for children
            for (let i = 0; i < currentNode.children.length; i++) {
                output += printTree(currentNode.children[i], currentLevel + 1);
            }

            // closing tag
            output += `${spaces}</${currentNode.name}>\n`;

            return output;
        }

        console.log(printTree(this, 0));
    }
}

const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);

// Dynamic Insertion by the interviewer
/*
	const div1 = vDocument.createElement("div");
	const div2 = vDocument.createElement("div");
	div1.innerHTML = "Hello, I am a div 1!";
	div2.innerHTML = "Hello, I am a div 2!";
	div.appendChild(div1);
	body.appendChild(div2);
*/

vDocument.appendChild(body);

vDocument.render();

/***************************************************Split Array into group ******************* */
function splitArrayIntoGroups(array, groupSize) {
  if (!Array.isArray(array) || !Number.isInteger(groupSize) || groupSize <= 0) {
      throw new Error('Invalid input. Please provide a valid array and a positive integer group size.');
  }

  const result = [];
  for (let i = 0; i < array.length; i += groupSize) {
      result.push(array.slice(i, i + groupSize));
  }

  return result;
}

// Example usage:

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const groupSize = 3;

const groupedArrays = splitArrayIntoGroups(originalArray, groupSize);

console.log(groupedArrays);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
/****************************** Array difference ****************  */
function arrayDifference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error('Invalid input. Please provide valid arrays.');
  }

  // Use Set to efficiently check for unique values
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Use filter to find values in set1 that are not in set2
  const differenceArray = arr1.filter(value => !set2.has(value));

  return differenceArray;
}

// Example usage:

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const difference = arrayDifference(array1, array2);

console.log(difference);
// Output: [1, 2]

function valuesNotIncluded(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error('Both parameters must be arrays.');
  }

  return arr1.filter(value => !arr2.includes(value));
}

// Example usage:

const array3 = [1, 2, 3, 4, 5];
const array4 = [3, 4, 5, 6, 7];

const resultArray = valuesNotIncluded(array3, array4);

console.log(resultArray);
// Output: [1, 2]

/**********************************************Implement a function to convert all object keys to camel case *****************************************/
function keysToCamelCase(obj) {
  if (typeof obj !== 'object' || obj === null) {
      throw new Error('Input must be a non-null object.');
  }

  const camelCasedObject = {};

  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
          camelCasedObject[camelCaseKey] = obj[key];
      }
  }

  return camelCasedObject;
}

// Example usage:

const snakeCaseObject = {
  first_name: 'John',
  last_name: 'Doe',
  age_group: 'Adult'
};

const camelCaseObject = keysToCamelCase(snakeCaseObject);

console.log(camelCaseObject);
// Output: { firstName: 'John', lastName: 'Doe', ageGroup: 'Adult' }
/**********************************************Implement a  generate a range of numbers  *****************************************/
function generateRange(start, end, step = 1) {
    if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
      throw new Error('All parameters must be numbers.');
  }

  const result = [];
  
  if (step === 0) {
      throw new Error('Step cannot be zero.');
  }

  if ((start < end && step < 0) || (start > end && step > 0)) {
      throw new Error('Invalid range and step combination.');
  }

  for (let i = start; (step > 0 ? i <= end : i >= end); i += step) {
      result.push(i);
  }

  return result;
}

// Example usage:

const range = generateRange(1, 10, 2);
console.log(range);
// Output: [1, 3, 5, 7, 9]
/*******************************Implement a function that accepts a callback and restricts its invocation to at most N times *****************************************/
function restrictCallback(callback, maxInvocations) {
  let invocations = 0;

  return function (...args) {
      if (invocations < maxInvocations) {
          invocations++;
          return callback(...args);
      } else {
          console.warn('Callback has reached the maximum number of invocations.');
          // You can choose to do nothing, throw an error, or handle it in a different way.
      }
  };
}

// Example usage:

const callbackFunction = () => {
  console.log('Callback invoked.');
};

const restrictedCallback = restrictCallback(callbackFunction, 3);

restrictedCallback(); // Output: Callback invoked.
restrictedCallback(); // Output: Callback invoked.
restrictedCallback(); // Output: Callback invoked.
restrictedCallback(); // Output: Callback has reached the maximum number of invocations.


/*******************************Implement Promise Polyfill  *****************************************/
function MyPromise(executor) {
  if (typeof executor !== 'function') {
      throw new TypeError('Executor must be a function.');
  }

  this.state = 'pending';
  this.value = undefined;
  this.handlers = [];

  const resolve = (value) => {
      if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.handlers.forEach(handler => handler.onFulfilled(value));
      }
  };

  const reject = (reason) => {
      if (this.state === 'pending') {
          this.state = 'rejected';
          this.value = reason;
          this.handlers.forEach(handler => handler.onRejected(reason));
      }
  };

  try {
      executor(resolve, reject);
  } catch (error) {
      reject(error);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  return new MyPromise((resolve, reject) => {
      const handle = (handler) => {
          try {
              const result = handler(this.value);
              if (result instanceof MyPromise) {
                  result.then(resolve, reject);
              } else {
                  resolve(result);
              }
          } catch (error) {
              reject(error);
          }
      };

      if (this.state === 'fulfilled') {
          handle(onFulfilled);
      } else if (this.state === 'rejected') {
          handle(onRejected);
      } else {
          this.handlers.push({
              onFulfilled: (value) => handle(onFulfilled),
              onRejected: (reason) => handle(onRejected)
          });
      }
  });
};

// Example usage:

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
      resolve('Promise resolved!');
  }, 1000);
});

promise.then(
  (result) => {
      console.log(result); // Output: Promise resolved!
  },
  (error) => {
      console.error(error);
  }
);


/**************************How to Sort an Array of Objects by Property Values************************ */
const arrayOfObjects = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

// Sort by the 'age' property in ascending order
arrayOfObjects.sort((a, b) => a.age - b.age);

console.log(arrayOfObjects);
// Output: [
//   { name: 'Alice', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 }
// ]

/****************************How to implement String.prototype.repeat********************* */
String.prototype.myRepeat = function (count) {
  if (typeof count !== 'number' || count < 0) {
      throw new Error('Count must be a non-negative number.');
  }

  let repeatedString = '';

  for (let i = 0; i < count; i++) {
      repeatedString += this;
  }

  return repeatedString;
};

// Example usage:
const originalString = 'Hello, ';
const repeatedString = originalString.myRepeat(3);

console.log(repeatedString);
// Output: 'Hello, Hello, Hello, '

/****************************How to implement deepFilter********************* */
function deepFilter(obj, predicate) {
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }

  if (Array.isArray(obj)) {
      // If obj is an array, filter its elements recursively
      return obj.filter(element => deepFilter(element, predicate));
  }

  // If obj is an object, filter its properties recursively
  const filteredObj = {};
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          if (predicate(value)) {
              filteredObj[key] = deepFilter(value, predicate);
          }
      }
  }

  return filteredObj;
}

// Example usage:
const data = {
  name: 'John',
  age: 30,
  address: {
      city: 'New York',
      country: 'USA',
      details: {
          street: '123 Main St',
          zip: '10001'
      }
  },
  hobbies: ['Reading', 'Gaming']
};

const filteredData = deepFilter(data, value => typeof value === 'string' || value > 25);

console.log(filteredData);
/*
Output:
{
  name: 'John',
  age: 30,
  address: {
      city: 'New York',
      details: {
          street: '123 Main St',
          zip: '10001'
      }
  },
  hobbies: []
}
*/

/****************************How to implement cloneDeep********************* */
function cloneDeep(obj) {
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }

  if (Array.isArray(obj)) {
      // If obj is an array, create a deep copy of each element
      return obj.map(element => cloneDeep(element));
  }

  // If obj is an object, create a deep copy of each property
  const clonedObj = {};
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          clonedObj[key] = cloneDeep(obj[key]);
      }
  }

  return clonedObj;
}

// Example usage:
const originalData = {
  name: 'John',
  age: 30,
  address: {
      city: 'New York',
      country: 'USA'
  },
  hobbies: ['Reading', 'Gaming']
};

const clonedData = cloneDeep(originalData);

console.log(clonedData);
// Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' }, hobbies: ['Reading', 'Gaming'] }

// Verify that the original and cloned objects are not the same reference
console.log(originalData !== clonedData); // Output: true
console.log(originalData.address !== clonedData.address); // Output: true


/*********************set a value in an object by providing a path ******************* */
function setValueByPath(obj, path, value) {
  const pathArray = path.split('.');
  let currentObj = obj; // {}

  for (let i = 0; i < pathArray.length - 1; i++) {
      const key = pathArray[i]; // user
      if (!currentObj[key] || typeof currentObj[key] !== 'object') {
          currentObj[key] = {};
      }
      currentObj = currentObj[key];  // { user: {} }
  }

  const lastKey = pathArray[pathArray.length - 1];
  currentObj[lastKey] = value;
}

// Example usage:
const myObject = {};

setValueByPath(myObject, 'user.name.first', 'John');
setValueByPath(myObject, 'user.name.last', 'Doe');
setValueByPath(myObject, 'user.age', 30);

console.log(myObject);
/*
Output:
{
  user: {
      name: {
          first: 'John',
          last: 'Doe'
      },
      age: 30
  }
}
*/




/*****************implement a function called invert that takes an object as input parameter and inverts it i.e. return an object where the keys as values and values as keys*********** */
function invert(obj) {
  if (typeof obj !== 'object' || obj === null) {
      throw new Error('Input must be a non-null object.');
  }

  const invertedObj = {};

  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          invertedObj[obj[key]] = key;
      }
  }

  return invertedObj;
}

// Example usage:
const originalObj = {
  name: 'John',
  age: 30,
  occupation: 'Engineer'
};

const invertedObj = invert(originalObj);

console.log(invertedObj);
/*
Output:
{
  John: 'name',
  30: 'age',
  Engineer: 'occupation'
}
*/


/*********************************create a function toggle that accepts an array as input and toggles between the values in a cyclic manner.******************************************** */
function toggle(inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length === 0) {
      throw new Error('Input must be a non-empty array.');
  }

  let currentIndex = 0;

  return function () {
      const currentValue = inputArray[currentIndex];
      currentIndex = (currentIndex + 1) % inputArray.length;
      return currentValue;
  };
}

// Example usage:
const myToggle = toggle(['Option A', 'Option B', 'Option C']);

console.log(myToggle());  // Output: 'Option A'
console.log(myToggle());  // Output: 'Option B'
console.log(myToggle());  // Output: 'Option C'
console.log(myToggle());  // Output: 'Option A'


/********************shuffle an array in JavaScript*************************** */
function shuffleArray(array) {
  if (!Array.isArray(array)) {
      throw new Error('Input must be an array.');
  }

  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);

console.log(shuffledArray);
// Output: [3, 1, 5, 4, 2] (or any other random permutation)


/**************Currency Formating *****************/
function formatCurrency(amount, currencyCode = 'USD', locale = 'en-US') {
  if (typeof amount !== 'number') {
      throw new Error('Amount must be a number.');
  }

  const formattedAmount = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode
  }).format(amount);

  return formattedAmount;
}

// Example usage:
const price = 12345.6789;
const formattedPrice = formatCurrency(price, 'USD', 'en-US');

console.log(formattedPrice);
// Output: $12,345.68


/*********************How to implement Event Emitter in JavaScript?*************************** */

class EventEmitter {
  constructor() {
      this.events = {};
  }

  on(eventName, listener) {
      if (!this.events[eventName]) {
          this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
  }

  emit(eventName, ...args) {
      if (this.events[eventName]) {
          this.events[eventName].forEach(listener => listener(...args));
      }
  }

  off(eventName, listener) {
      if (this.events[eventName]) {
          this.events[eventName] = this.events[eventName].filter(
              registeredListener => registeredListener !== listener
          );
      }
  }
}

// Example usage:
const emitter = new EventEmitter();

// Subscribe to an event
const listener1 = data => console.log(`Listener 1: ${data}`);
emitter.on('myEvent', listener1);

// Emit an event
emitter.emit('myEvent', 'Hello World!'); // Output: Listener 1: Hello World!

// Subscribe to the same event with another listener
const listener2 = data => console.log(`Listener 2: ${data}`);
emitter.on('myEvent', listener2);

// Emit the event again
emitter.emit('myEvent', 'Another message');
// Output:
// Listener 1: Another message
// Listener 2: Another message

// Unsubscribe a listener
emitter.off('myEvent', listener1);

// Emit the event once more
emitter.emit('myEvent', 'Final message');
// Output: Listener 2: Final message

/*********************Memoize Function **************** */
function memoize(func) {
  const cache = {};

  return function (...args) {
      const key = JSON.stringify(args);

      if (!cache[key]) {
          cache[key] = func.apply(this, args);
      }

      return cache[key];
  };
}

// Example usage:

// A simple function to calculate the square of a number
const square = (x) => {
  console.log('Calculating square:', x);
  return x * x;
};

// Memoize the square function
const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // Output: Calculating square: 5 | 25
console.log(memoizedSquare(5)); // Output: 25 (result is retrieved from cache)
console.log(memoizedSquare(3)); // Output: Calculating square: 3 | 9
console.log(memoizedSquare(3)); // Output: 9 (result is retrieved from cache)
/**********************Implement Currying | JavaScript *************** */
function curry(fn, arity = fn.length) {
  return function curried(...args) {
      if (args.length >= arity) {
          return fn(...args);
      } else {
          return function (...nextArgs) {
              return curried(...args, ...nextArgs);
          };
      }
  };
}

// Example usage:

// A function with multiple parameters
function add(a, b, c) {
  return a + b + c;
}

// Curry the 'add' function
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
/********************Debounce ********************* */
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
          func.apply(this, args);
      }, delay);
  };
}

// Example usage:

// A function to be debounced
function expensiveOperation() {
  console.log('Executing expensive operation...');
}

// Debounce the function with a delay of 500 milliseconds
const debouncedOperation = debounce(expensiveOperation, 500);

// Trigger the debounced function
debouncedOperation(); // This will not immediately execute the expensive operation

// Wait for 500 milliseconds...
// The expensive operation will be executed only once within this timeframe


/******************************Throtlling *****************/
function throttle(func, delay) {
  let lastExecTime = 0;
  let timeoutId;

  return function (...args) {
      const currentTime = new Date().getTime();

      if (currentTime - lastExecTime >= delay) {
          func.apply(this, args);
          lastExecTime = currentTime;
      } else {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
              func.apply(this, args);
              lastExecTime = currentTime;
          }, delay);
      }
  };
}

// Example usage:

// A function to be throttled
function expensiveOperation() {
  console.log('Executing expensive operation...');
}

// Throttle the function with a delay of 500 milliseconds
const throttledOperation = throttle(expensiveOperation, 500);

// Trigger the throttled function
throttledOperation(); // This will execute the expensive operation

// Quickly trigger the throttled function multiple times
// The expensive operation will be executed at most once every 500 milliseconds
setTimeout(() => {
  throttledOperation();
  throttledOperation();
  throttledOperation();
}, 100);


/***************************custom Bind***************** */
Function.prototype.myBind = function (context, ...args1) {
  const originalFunction = this;

  return function (...args2) {
      return originalFunction.apply(context, [...args1, ...args2]);
  };
};

// Example usage:

// Original function
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'John' };

// Using your own bind method
const boundGreet = greet.myBind(person, 'Hello');
boundGreet('!'); // Output: Hello, John!

// Using the built-in bind method for comparison
const builtInBoundGreet = greet.bind(person, 'Hi');
builtInBoundGreet('!'); // Output: Hi, John!
/***********************GroupBy******************** */
function groupBy(collection, iteratee) {
  return collection.reduce((result, item) => {
      const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];

      if (!result[key]) {
          result[key] = [];
      }

      result[key].push(item);

      return result;
  }, {});
}

// Example usage:

const data = [
  { id: 1, name: 'Alice', category: 'A' },
  { id: 2, name: 'Bob', category: 'B' },
  { id: 3, name: 'Charlie', category: 'A' },
  { id: 4, name: 'David', category: 'C' },
  { id: 5, name: 'Eva', category: 'B' },
];

const groupedData = groupBy(data, 'category');

console.log(groupedData);
/*
Output:
{
  A: [ { id: 1, name: 'Alice', category: 'A' }, { id: 3, name: 'Charlie', category: 'A' } ],
  B: [ { id: 2, name: 'Bob', category: 'B' }, { id: 5, name: 'Eva', category: 'B' } ],
  C: [ { id: 4, name: 'David', category: 'C' } ]
}
*/


/*********************Reverse Word in String remove white spaces *******************/

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
var reverseWords = function(s) {

  // Remove Duplicates from a String
    // 1. trim
    // 2. remove in between spaces
    // 3. split
    // 4. map each element

    //5. create memory object 
  const arr1 = s.toString().trim().replace(/\s+/g, " ").split(' ').map(element => [...new Set(...element)])
  var rd = (s) => s.toString().trim().replace(/\s+/g, " ").split(' ').map(element => [...new Set(...element)]).forEach((element) => {})
    
  let arr =  s.toString().trim().replace(/\s+/g, " ").split(' ').reverse().join(' ')
    return arr
};

console.log(reverseWords('"a good   example'))


function reverseString(sentence, left, right) {
  if (!sentence || sentence.length < 2) return
  while (left < right) {
      let temp = sentence[left]
      sentence = sentence.substr(0, left) + sentence[right] + sentence.substr(left+1)
      sentence = sentence.substr(0, right) + temp + sentence.substr(right+1)
      left++
      right--
  }
  return sentence
}

function reverseWords(sentence) {
  let left = 0
  let right = 0
  sentence = sentence.split('').reverse().join('')
  while (true) {
      while(sentence[left] === ' ') left++
      if (left >= sentence.length) break
      right = left + 1
      while (right < sentence.length && sentence[right] != ' ') right++
      sentence = reverseString(sentence, left, right-1)
      left = right
  }
  return sentence
}

let sentence = "I love javascript";
console.log(sentence);
console.log(reverseWords(sentence));

/**
* Time Complexity O(N)
* Space Complexity O(1)
*/
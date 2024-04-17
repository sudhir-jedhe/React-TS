
let array = [ [1, 2], [3, 4], [ [5,[10, 12], 6],  [7, 8, 9] ],  [10, 11, 12, 13, 14, 15]];
const recursive_flattened_array = (array) => {
    const resultArr = [];
    const recursive = (arr) => {
        let count = 0;
        while(count < arr.length) {
            const current = arr[count]
            if(Array.isArray(current)) {
                recursive(current)
            } else {
                resultArr.push(current)
            }
            count++
        }
    }
    recursive(array)
    return resultArr;
}


console.log("Flattened Array: ", recursive_flattened_array(array))

const stackFlatArr = (arr) => {
    const stack = [...arr]
    console.log(stack)
    const flattened_array = []
    while(stack.length) {
        const current = stack.pop()
        if(Array.isArray(current)) {
            stack.push(...current)

        } else {
            flattened_array.push(current)
        }
    }
    return flattened_array.reverse()
}



console.log(stackFlatArr(array))
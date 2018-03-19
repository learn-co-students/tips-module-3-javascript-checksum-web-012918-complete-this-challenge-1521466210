var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

//go through each array grab min and max of each array
//sub tract max from min
//push to new array
//add up all numbers in new array

// const arrMin = data => Math.min(...data);
// const arrMax = data => Math.max(...data);
let numbs = []
data.forEach(a){
	let arrMin = data => Math.min(...data);
	let arrMax = data => Math.max(...data);
	numbs.push(arrMax - arrMin)
}

var sum = numbs.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);

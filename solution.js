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
// let numbs = []
// let myMap = new Map()
// function test(){
// 	myMap(a){
// 		let arrMin = data => Math.min(...a);
// 		let arrMax = data => Math.max(...a);
// 		numbs.push(arrMax - arrMin)
// 	}
// }
//
// var sum = numbs.reduce(add, 0);
//
// function add(a, b) {
//     return a + b;
// }
//
// console.log(sum);


function checksum(arr) {
  return arr.map(arr)
	 arr.sort((a,b) => a - b)).map(x => x[x.length - 1] - x[0]).reduce((total, x) => (total || 0) + x)
}

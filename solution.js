var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function checksum(data) {
  let checksum = []
  data.forEach(function(array) {
    let greatest = findGreatest(array)
    let smallest = findSmallest(array)
    let sum = greatest - smallest
    checksum.push(sum)
  })
  return checksum.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      return accumulator + currentValue;
    },
    0
  );
}


function findGreatest(array) {
  let i = 0;
  for(let element of array){
    if(element > i){
      i = element
    }
  }
  return i
}

function findSmallest(array) {
  return Math.min.apply( Math, array );
}

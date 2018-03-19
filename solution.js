
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function getChecksum(d) {
  let diffs = []
  let sum = 0

  for (arr of d) {
    arr.sort(function(a,b) { return a - b})
  }

  for (arr of d) {
    diffs.push( arr.pop() - arr.shift() )
  }

  for (let i = 0; i< diffs.length; i++) {
    sum += diffs[i]
  }

  return sum;
}

getChecksum(data)
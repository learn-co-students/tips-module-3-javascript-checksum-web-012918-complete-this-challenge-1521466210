
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

let rowChecksum = data.map(function(numArray) {
  let sortedArray = sortNumArray(numArray)
  return sortedArray[sortedArray.length - 1] - sortedArray[0]
})

function sortNumArray(numArray) {
  numArray.sort(function(a,b) {
    return a-b
  })
}

let answer = rowChecksum.reduce((a, b) => a + b, 0)

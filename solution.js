// var data = [
//   [2, 3, 7, 8],
//   [0, 1, 3],
//   [9, 2, 8, 3]
// ]
// 6 + 3 + 7 = 16

var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

// 292 + 408 + 232 + 6255 + 5944 = 13131

function checksum(arr) {
  let newarr = arr.map(arr => {
    arr.sort((a,b) => a - b)
    return arr[arr.length - 1] - arr[0]
  })
  .reduce((total, x) => {return total + x}, 0)
  return newarr
}

checksum(data)

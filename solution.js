var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function rowDifference(row) {
  let min = null
  let max = null

  for (let i = 0; i < row.length; i++) {
    if (min === null || row[i] < min) {
      min = row[i]
    } else if (row[i] > max || max === null) {
      max = row[i]
    }
  }

  return max - min

}


function checkSum(array) {
  let counter = 0

  for (let row of array) {
    rowSum = rowDifference(row)
    counter += rowSum
  }

  console.log(counter)
  return counter
}

checkSum(data);

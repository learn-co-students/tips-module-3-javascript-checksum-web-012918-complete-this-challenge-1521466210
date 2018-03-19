var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

const mappedData = data.map(row => {
  row.sort()
  let slicedRow = row.slice(1, -1)
  let singleSum = slicedRow[slicedRow.length-1] - slicedRow[0]
  return singleSum
})

const summer = (acc, value) => {
  return acc + value
}

const checkSum = mappedData.reduce(summer, 0)
// checkSum = 6386

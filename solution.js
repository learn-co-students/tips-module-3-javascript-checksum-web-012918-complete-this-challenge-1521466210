var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function sortData(data){
  let sortedData = []
  data.forEach(function(data){
    let copyData = [...data]
    sortedData.push(copyData.sort(function(a, b){
      return a - b;
    }))
  })
  return sortedData
}

function getAllSums(sortedData){
  let sums = []
  sortedData.forEach(function(data){
    sums.push(data[data.length -1] - data[0])
  })
  return sums
}

function checkSum(sums){
  return sums.reduce(function(acc, curr){
    return acc + curr
  })
}

let sorted = sortData(data)

let allSums = getAllSums(sorted)

checkSum(allSums)

//Only does it for one row...

// function checksum(nestedArr) {
//   let sum = 0
//   for (const row of nestedArr) {
//     let sortedRows = row.sort(function compare(a,b){
//       a - b
//     })
//     sum = sortedRows[0] - sortedRows[sortedRows.length - 1]
//     return sum
//   }
// }

function checksum(nestedArr) {
  let sum = 0
  for (i = 0; i < nestedArr.length; i++) {
    let sortedRows = nestedArr[i].sort(function compare(a,b){
      a - b
    })
    rowSum = sortedRows[0] - sortedRows[sortedRows.length - 1]
    sum = sum + rowSum
  }
  return Math.abs(sum)
}

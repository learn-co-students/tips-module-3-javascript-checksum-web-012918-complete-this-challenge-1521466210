function checksum(nestedArr) {
  //keep track of each row with a sum variable
  let sum = 0

  //get through each element/row of the nested array
  for (const row of nestedArr) {
    //sort it from least to greatest
    // let sortedRow = row.sort((a,b) => (a - b))
    let sortedRow = row.sort(function compare(a,b) {
      return a - b
    })
    console.log(sortedRow)

    //find difference then add to sum
    diff = Math.abs(sortedRow[0] - sortedRow[sortedRow.length - 1])
    sum = sum + diff
    console.log(sum)
  }

  //return the sum
  return sum
}

// function checksum(nestedArr) {
//   let sum = 0
//   for (i = 0; i < nestedArr.length; i++) {
//     let sortedRows = nestedArr[i].sort(function compare(a,b){
//       a - b
//     })
//     let rowSum = sortedRows[0] - sortedRows[sortedRows.length - 1]
//     let sum = sum + rowSum
//   }
//   return Math.abs(sum)
// }

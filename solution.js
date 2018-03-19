function checkSum(data){
  //array to hold difference between max and min of each row in the data set
  let diffs = []

  //for each element in the data set find the min and the max, take their difference and add it to the differences array
  for (let i = 0; i < data.length; i++){
    let max = Math.max(...data[i])
    let min = Math.min(...data[i])
    let diff = max - min
    diffs.push(diff)
  }

  //function to be called back by reduce
  function add(a, b) {
    return a + b
  }

  //sums all elements in the differences array and returns that value
  return diffs.reduce(add, 0)

}

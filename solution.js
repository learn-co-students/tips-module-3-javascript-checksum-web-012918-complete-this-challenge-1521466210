function checkSum(arr) {
    let diffSum = [];
    for(let x of arr) {
      let largest = 0;
      let smallest = 0
      for(let y of x) {
        if(y > largest) {
          largest = y;
        } else if(y < largest){
          smallest = y;
        }
      }
      diffSum.push(largest - smallest);
    }
    diffSum.reduce(function(acc, current) {
      return acc + current;
    }, 0)
}

//get the difference between the largest and smallest number in each element array,
//then get the sum of all the differences

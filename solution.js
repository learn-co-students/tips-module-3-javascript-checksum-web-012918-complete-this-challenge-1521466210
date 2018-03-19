var data = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]


function checkSum(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    arr[i].sort();
    sum += (arr[i][arr[i].length-1] - arr[i][0]);
  }
  return sum;
}

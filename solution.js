var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]


// function checksum1(data){
//   let checksum_value = 0;
//   for (array of data) {
//     checksum_value += Math.max(...array) - Math.min(...array)
//   }
//   return checksum_value;
// }

function checksum2(data){
  let checksum_value = 0;
  for (array of data) {
    array = array.sort((a,b) => a-b)
    checksum_value += array[array.length-1] - array[0]
  }
  return checksum_value;
}
// I think they both work, im curious as to which one is faster
// checksum1(data)
checksum2(data)

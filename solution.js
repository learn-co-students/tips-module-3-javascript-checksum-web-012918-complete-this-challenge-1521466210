var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function checkSum(data) {
  // I want to filter out each index
  const result1 = data[0];
  const result2 = data[1];
  const result3 = data[2];
  const result4 = data[3];
  const result5 = data[4];

  // I want to then find the Max, and Min of each index
const oneMax = Math.max(...result1);
const oneMin = Math.min(...result1);
  const finalOne = oneMax - oneMin

const twoMax = Math.max(...result2);
const twoMin = Math.min(...result2);
   const finalTwo = twoMax - twoMin

const threeMax = Math.max(...result3);
const threeMin = Math.min(...result3);
   const finalThree = threeMax - threeMin

const fourMax = Math.max(...result4);
const fourMin = Math.min(...result4);
   const finalFour = fourMax - fourMin

const fiveMax = Math.max(...result5);
const fiveMin = Math.min(...result5);
   const finalFive = fiveMax - fiveMin

   // I want to sum up the total difference
  return totalSum = finalOne + finalTwo +finalThree +finalFour +finalFive
}

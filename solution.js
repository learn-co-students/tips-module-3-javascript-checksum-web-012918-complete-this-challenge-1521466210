var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function spreadsheetSavior(spreadsheet){
  checksum = 0;

  for(let i = 0; i < data.length; i++){
    let maximum = Math.max.apply(null, data[i]);
    let minimum = Math.min.apply(null, data[i]);
    let difference = maximum - minimum;
    checksum += difference;
  }
  return checksum;
}

spreadsheetSavior(data);

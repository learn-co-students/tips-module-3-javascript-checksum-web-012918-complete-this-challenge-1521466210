function checkSum(array) {
  return array.reduce(function(aggr, element) {
    let min = element[0];
    let max = element[0];
    element.forEach(function(innerElem){
      if (innerElem < min) {
        min = innerElem;
      } else if (innerElem > max) {
        max = innerElem;
      }
    });
    return aggr + max - min;
  }, 0);
}

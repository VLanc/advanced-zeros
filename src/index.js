module.exports = function getZerosCount(number, base) {
  let result;
  let primesArr = []; 
  let degrees = {};
  let numberCopy = number;

  nextPrime:
  for (let i = 2; i <= base; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    primesArr.push(i);
    degrees[i] = 0;
  }
  
  for(let i = primesArr.length - 1; i >= 0; i--) {
    if(base % primesArr[i] == 0) {
      degrees[primesArr[i]]++;
      base /= primesArr[i];
      i++;
    }
  }

  let resultArr = [];
  let elementNumber = 0;
  
  for(let key in degrees) {
    if(degrees[key] != 0) {
      resultArr.push(0);
      while(numberCopy >= key) {
        numberCopy = Math.floor(numberCopy / key);
        resultArr[elementNumber] += numberCopy;
      }
      resultArr[elementNumber] /= degrees[key];
      elementNumber++;
      numberCopy = number;
    }
  }

  result = Math.floor(Math.min.apply(null, resultArr));
  return result;
}
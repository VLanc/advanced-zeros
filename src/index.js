module.exports = function getZerosCount(number, base) {
  let result = 0;
  let primesArr = []; 
  let maxPrime;

  // search all primes in the range from 2 to base
  nextPrime:
  for (let i = 2; i <= base; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    primesArr.push(i);
  }

  // search maximum prime
  for(let i = primesArr.length - 1; i < primesArr.length; i--) {
    if(base % primesArr[i] == 0) {
      maxPrime = primesArr[i];
      break;
    }
  }

  while(number >= maxPrime) {
    number = Math.floor(number/maxPrime);
    result += number;
  }

  return result;
}
function isDivisibleBy4(number) {

  if (number % 4 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function isDivisibleBy400(number) {

  if (number % 400 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function isDivisibleBy100(number) {

  if (number % 100 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function isDivisibleBy100AndNotDivisibleBy400(number) {
  
  if (isDivisibleBy100(number) && !isDivisibleBy400(number)) {
    return true;
  }
  else {
    return false;
  }
}





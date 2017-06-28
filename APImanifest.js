let joel = (value) => {
  return function (val2){
    return value * val2;
  }
}

let joel1 = joel(5)(2);

console.log(joel1);

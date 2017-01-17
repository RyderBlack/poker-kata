const isStraight = function (hand) {
  hand.sort(function(a,b){return a - b});
  console.log(hand);


    if (hand.length === 5) {
      if (hand === [1,10,11,12,13]) return true;
        for (let i = 0; i < hand.length-1 ;i++) {
          if (hand[i] !== hand[i+1] - 1) {
            return false;
          }
        }
    };
  return true;
}

console.log(isStraight([1,2,3,4,5]));
console.log(isStraight([1,4,3,4,2]));
console.log(isStraight([1,2,13,4,6]));
console.log(isStraight([7,6,8,4,5]));

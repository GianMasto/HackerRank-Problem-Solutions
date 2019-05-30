// https://www.hackerrank.com/challenges/sock-merchant/problem

const n = 9;
const ar = [10,20,20,10,10,30,50,10,20];

let sockMerchant = (n, ar) => {
  // Numbers of pairs
  let pairs = 0;

  // Variable for save equal numbers in differnt arrays
  let dividedAr = []; 

  // Variable for save  sorted array
  let sortedAr = ar.sort();

  // Temporal variable containing equals number wich later will be pushed into dividedAr
  let temporalAr = [];
  function divideAr (sortedAr) {
    sortedAr.forEach((el, i) => {
      if (el === sortedAr[0]) {

        // If the current iteration is equals to the first element in the sorted array, then is pushed into temporalAr
        temporalAr.push(el);
      } else {

        //It it's not, then there are not any more of that number, so the set of numbers is pushed into dividedAr
        dividedAr.push(temporalAr);

        // TemporalAr is reseted
        temporalAr = [];

        // The set of numbers is deleted from sortedAr
        sortedAr.splice(0, i);

        // This funcion is called again, repeating the process for the remaining numbers
        divideAr(sortedAr);
      }
    });
  }
  
  // Function call
  divideAr(sortedAr);

  // The last set of number from sortedAr it is not pushed into dividedAr because el === sortedAr[0] will return true, so is pushed manually
  dividedAr.push(sortedAr);
  
  dividedAr.forEach((el) => {

    // If the numbers of elements in each subset from dividedAr is odd or less than 2, the last element is deleted, so every subset will have an even amount of elements, or 0
    if ((el.length % 2) !== 0) {
      el.pop();
    }
  })


  dividedAr.forEach((el) => {
    if (el.length !== undefined) {
      pairs += el.length / 2;
    }
    
  });

  return pairs;
};

sockMerchant(n, ar);
/*
https://www.codewars.com/kata/57b06f90e298a7b53d000a86
*/

//1. splice off n number of tills array.
//2. add customer time to the smallest queue in till array.
//3. return longest queue from array.
function queueTime(customers, n) {
    if(customers.length === 0) return 0;
     let tills = customers.splice(0,n);
          for(let customer of customers){
              tills[tills.indexOf(Math.min(...tills))] += customer;
          }
  
          return Math.max(...tills);
  }
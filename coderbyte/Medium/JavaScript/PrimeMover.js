function isPrime(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return num > 1;
}

function PrimeMover(num) { 

  var primes = [];
  var i = 2;
  while(primes.length < num){
      if(isPrime(i)){
          primes.push(i);
      }
      
      i++;
  }
  return primes[num - 1]; 
         
}
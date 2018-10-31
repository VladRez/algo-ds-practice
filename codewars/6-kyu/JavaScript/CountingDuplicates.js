//https://www.codewars.com/kata/counting-duplicates

function duplicateCount(text) {
    var obj = {}
    var count = 0;
    text = text.toLowerCase()
      for(let c of text){
        if(obj[c] === undefined) {
          obj[c] = 0
        }
        obj[c] += 1;
      }
      
      for(let key in obj){
        if(obj[key] > 1){
          count += 1;
        }
      }
      
      return count;
  }
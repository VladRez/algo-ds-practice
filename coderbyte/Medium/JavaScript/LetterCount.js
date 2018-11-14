function LetterCount(str) { 

    var words = str.split(' ');
   var obj = {};
   var greatest = '';
   var greatestNum = 0;
      for(var word of words){
          var count = 0;
          var wordObj = {};
          for(var i = 0; i < word.length; i++){
              if(wordObj[word[i]] === undefined){
                  wordObj[word[i]] = 0
              }
              wordObj[word[i]] += 1;
          }
      
          for(let key in wordObj){
              if(wordObj[key] > 1){
                  count += 1;
              }
          }
          
          obj[word] = count;
      }
      for(var key in obj){
          if(obj[key] > greatestNum){
              greatestNum = obj[key]
              greatest = String(key);
          } 
      }
      return greatestNum ? greatest : -1 ;
  }
/*
sing the JavaScript language, have the function TimeConvert(num) take the 
num parameter being passed and return the number of hours and minutes the 
parameter converts to (ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon.
*/

function TimeConvert(num) { 
    var hour = 0;
    var minutes = 0;
    for(var i = num; i >= 0; i-=60){
      if(i < 60){
            minutes = i;
      }else{
          hour += 1;
      }   

    }
  return hour + ":" +  minutes; 
}

  console.log(TimeConvert(126));
  console.log(TimeConvert(45));
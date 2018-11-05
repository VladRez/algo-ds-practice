function FormattedDivision(num1,num2) { 
    var num = String(parseFloat(num1/num2).toFixed(4)).split('.');
          var digits;
          var remainder;
          digits = num[0].split('').reverse();
          if(num.length === 1){
              remainder = '0000';
          }else{
              remainder = num[1].slice(0,4);
          }
          for(var i = 3; i < digits.length; i+=3) {
              
                  digits.splice(i,0,',');
                  i += 1; 
          }
          return digits.reverse().join('') + "." + remainder;
    }
     
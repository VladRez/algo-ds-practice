
function flatten(data) {
    if(!Array.isArray(data)) return [data];
    var result = [];
         data.forEach(item => result = result.concat(flatten(item)));
     return result;
 }
 

 var array2 = ['this', ['will', 'flatten'], [['a', 'Multi'], [['Array']]]]
 console.log(flatten(array2)); //[ 'this', 'will', 'flatten', 'a', 'Multi', 'Array' ]
 
 console.log(flatten('base data')); // [ 'base data' ]
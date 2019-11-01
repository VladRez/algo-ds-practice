var numJewelsInStones = function(J, S) {
    return S.split('').reduce((acc, cur) => J.includes(cur) ? acc+=1 : acc+=0, 0 );
};
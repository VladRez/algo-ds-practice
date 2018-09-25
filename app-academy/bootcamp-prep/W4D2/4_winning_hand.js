/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points
***********************************************************************/

function winningHand(hand1, hand2) {
var suitScore = {'J': 1,'Q': 2,'K': 3}
var player1Score = 0;
var player2Score = 0;
    hand1.split('').forEach(element => {
        player1Score += suitScore[element]
    });

    hand2.split('').forEach(element => {
        player2Score += suitScore[element]
    });

    return player1Score === player2Score ? 'DRAW' : player1Score > player2Score ? hand1 : hand2
}


console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ'
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW'
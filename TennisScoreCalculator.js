/**
Implement a JavaScript function that takes an array of strings representing the winner of each point in a tennis match and returns the final result of the game.

The tennis scoring rules are as follows:
A player scores in the order: 0 → 15 → 30 → 40.
If both players reach 40, the game is in DEUCE.
From DEUCE, a player must win two consecutive points:
First point gives ADVANTAGE to that player.
Second point after advantage results in WIN.
If the opponent scores during advantage, the score goes back to DEUCE.

The function should return:
"Player 1 wins" if player 1 wins
"Player 2 wins" if player 2 wins

Input
points: An array of strings, each being either "p1" or "p2" representing the winner of each point.

Output
A string indicating the match result as described above.

Example 1:
Input = ['p1', 'p1', 'p2', 'p1', 'p1']
Output = "Player 1 wins"

Input = ['p1', 'p1', 'p1', 'p2', 'p2', 'p2', 'p1', 'p2']
Output = "DEUCE"
*/

function getMatchResult(points) {
  // Your code
  let p1 = 0;
  let p2 = 0;

  for (let point of points) {
    if (point === "p1") {
      p1++;
    } else {
      p2++;
    }
  }
  // There are two rules in tennis:

  // Player must score at least 4 points.
  // Player must be 2 points ahead.

  if (p1 >= 4 && p1 - p2 >= 2) {
    return "Player 1 wins";
  }

  if (p2 >= 4 && p2 - p1 >= 2) {
    return "Player 2 wins";
  }

  // Why >= 3?
  // Because:
  // Points	Tennis Score
  // 0	0
  // 1	15
  // 2	30
  // 3	40

  // Deuce
  if (p1 >= 3 && p2 >= 3 && p1 === p2) {
    return "DEUCE";
  }

  // show player advantage
  if (p1 >= 4 && p1 - p2 === 1) {
    return "Advantage player P1";
  }

  if (p2 >= 4 && p2 - p1 === 1) {
    return "Advantage player P2";
  }
}

// console.log(getMatchResult(["p1", "p1", "p1", "p2", "p2", "p2", "p1", "p2"]));
console.log(getMatchResult(["p1", "p1", "p1", "p2", "p2", "p2", "p1"]));

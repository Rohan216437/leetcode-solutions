
/*
Score Of Parentheses
/*
Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.

 

Example 1:

Input: s = "()"
Output: 1


Example 2:

Input: s = "(())"
Output: 2


Example 3:

Input: s = "()()"
Output: 2


 

Constraints:

2 <= s.length <= 50
s consists of only '(' and ')'.
s is a balanced parentheses string.
*/

10
11
12
13
14
15
16
17
18
19
20
21
22
23
9
8
7
6
5
        if (s[i] == "("){
            stack.push(0)
        }else{
            inside = stack.pop()
            if (inside == 0){
                score = 1
            }else{
                score = 2 * inside
            }
            stack[stack.length - 1] += score
        }
    }
    return stack[0]
    for (let i = 0; i < s.length; i++){
    let stack = [0]
var scoreOfParentheses = function(s) {

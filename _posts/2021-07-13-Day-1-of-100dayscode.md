---
layout: post
title:  Tried Leetcode after Long time
date:   2021-07-13 16:03:00 +0500
image:  06.jpg
tags:   DSA



---

Day 1 of 100 days for code challenge. 

Not a good start after 2 hours 30 mins I couldn't solve so I looked through algorithm on how I can solve and figured out the code. I am curious how others are doing reply me in the to the post on the [twitter](https://twitter.com/filius_fall/status/1414918959363592192).



## Generating parenthesis

Question:

Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.

**Example 1:**

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

```

**Example 2:**

```
Input: n = 1
Output: ["()"]

```

**Constraints:**

- `1 <= n <= 8`

Answer:

```python
def generateParenthesis(n: int):
    ans = []
    def backtrack(S = [], left = 0, right = 0):
        if len(S) == 2 * n:
            ans.append("".join(S))
            return
        if left < n:
            S.append("(")
            backtrack(S, left+1, right)  // left backtrack call
            S.pop()
        if right < left:
            S.append(")")
            backtrack(S, left, right+1)  // right backtrack call
            S.pop()
    backtrack()
    return ans
```

We are using Backtracking for this solution

At first we create a base condition that is if the length of the array is equal to 2 * n(n = given order) then we add the combination to the returning array 

Then we add the recursion to the function with conditions like left < n and right < left

In this we are taking left as count for '(' and right as count for ')' so we can see that if number of left is less than given order then we add a '(' to the array and we call the backtrack function recursively and increment left value

now we again go back to first and check the length and since its not equal now we again come back to left < n and since left is 1 we again increment left and add '(' to array and again call backtrack recursively

- [ ]  Backtrack function Left side second call
- [ ]  Backtrack function Left side First call

Now we have two function calls stacked as above now second call makes left = 2 so now assume    n = 2 now left = 2 so we go to next condition right < 2 that is 0 < 2 now we add ')' to array and again add another function call to stack

 

- [ ]  Backtrack function Right side first call
- [ ]  Backtrack function Left side second call
- [ ]  Backtrack function Left side First call

Now the stack looks like above and now we again check first condition and second condition (len < 2*2 and left < n) and third condition satisfies and right < left (1 < 2) so we again add right and ")" so now length becomes 3 and right = 2 now again we call function recursively 

- [ ]  Backtrack function Right side second call
- [ ]  Backtrack function Right side first call
- [ ]  Backtrack function Left side second call
- [ ]  Backtrack function Left side First call

Now same above process occurs and when right function is called again now length = 4 and right = 2 so now third call satisfies the if len = 2 * n so we add array to answer and return which removes third call from stack

- [x]  ~~Backtrack function Right side third call~~
- [ ]  Backtrack function Right side second call
- [ ]  Backtrack function Right side first call
- [ ]  Backtrack function Left side second call
- [ ]  Backtrack function Left side First call

So now the program comes to right second call and executes S.pop() of second call which makes the array [ '( ', ')' , '(' ] and similarly all functions stacks follow same process

```python
['(']
['(', '(']
['(', '(', ')']
['(', '(', ')', ')']
After Back Right
['(', '(', ')']
After Back Right
['(', '(']
After Back Left
['(']
['(', ')']                   // This is after secod left call is finished and it comes 									down the code to next condition
['(', ')', '(']
['(', ')', '(', ')']
After Back Right
['(', ')', '(']
After Back Left
['(', ')']
After Back Right
['(']
After Back Left
[]
['(())', '()()']
```

After all the Right calls are completed and Second left call is completed the code comes down to 

- [x]  ~~Backtrack function Right side third call~~
- [x]  ~~Backtrack function Right side second call~~
- [x]  ~~Backtrack function Right side first call~~
- [x]  ~~Backtrack function Left side second call~~
- [ ]  Backtrack function Left side First call

again right < left since at the time of function call left is 1 and right is 0 so now again right is added which makes left = right = 1 and array = [ '(' , ')' ] and again the recursion continues until all the 

- [ ]  Backtrack function Right side first call
- [ ]  Backtrack function Left side first call

functions are cleared from stack
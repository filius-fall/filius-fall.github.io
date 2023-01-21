---
layout: post
title:  100 Days of code
date:   2021-07-15 16:03:00 +0500
image:  06.jpg
tags:   DSA

---

**17. Letter Combinations of Phone number**

**Medium**

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

**Example 1:**

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

```

**Example 2:**

```
Input: digits = ""
Output: []

```

**Example 3:**

```
Input: digits = "2"
Output: ["a","b","c"]

```

**Constraints:**

- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

## Answer:

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return []

        phone = {
            "2" : "abc",
            "3" : "def",
            "4" : "ghi",
            "5" : "jkl", 
            "6" : "mno",
            "7" : "pqrs",
            "8" : "tuv",
            "9" : "wxyz"
        }
        combinations = []
        def backtrack(index,path):

            if len(path) == len(digits):
                combinations.append("".join(path))
                return

            letters = phone[digits[index]]

            for i in letters:

                path.append(i)
                backtrack(index + 1,path)

                path.pop()

        backtrack(0,[])
        return combinations
```

This a problem on backtracking

Lets talk about base case if only one number is given as input then we would get only values of that number. If 2 numbers are given lets assume "23" the first we take as if one input is given  and add second input values to first. Like in above we assume only 2 is given so the values will be "a","b","c"

now since two are given we just add second values to individual values of first that is we add "3" values to "2"

That is first we take "a" and add all "3" to it then we get ["ad","ae","af"] and we loop through values of "2"

similarly we 3 numbers are given we take all the values from 2 numbers and add 3rd number values to it

So base case will be when each added value should be same length as given numbers. Observe if 1 number is given like 2 you will get ["a","b","c"] so each element length is equal to number given and if we give 2 numbers like "23" we get ["ad","ae","af","bd","be","bf","cd","ce","cf"] which again observe element length equal to length of given number

so base case will be 

```python
if len(path) == len(digits):
	combinations.append("".join(path))
	return
```

Backtracking function expiation

after base case we first get the number which index points that is in "23"  the value is 2 in index is 0

and phone[digits[index]] gives values of that number. Then we iterate over the values for 2 its is "abc" so first i = "a" we add the value to path array and then we go to recursive function

![Notes]({{ site.url }}/assets/04.jpg)

as you can see above first it starts at "a" the index gets incremented and another backtrack is called now the number is 3 and values are "def" so we now iterate through "def" when i = "d" we add "d" to path which makes it [a,d] now again we go to backtrack(2,[a,d]) and since the condition is fulfilled we add array to combinations and return to original backtrack(1,[a,d]) and again in loop we move to "e" similarly to "f" and remember after every backtrack function is returned we pop last value from path so if after we added [a,d] to combinations we go back to function and path.pop() removes "d" 

After all 3 iterations are complete we go back to "b" and similarly "c"
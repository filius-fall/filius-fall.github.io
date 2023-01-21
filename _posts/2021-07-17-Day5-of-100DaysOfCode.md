---
layout: post
title:  Tried Leetcode after Long time
date:   2021-07-17 16:03:00 +0500
image:  06.jpg
tags:   General
---

# 25. Reverse Nodes in k-Group

Given a linked list, reverse the nodes of a linked list *k* at a time and return its modified list.

*k* is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg)

```
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

```

**Example 3:**

```
Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]

```

**Example 4:**

```
Input: head = [1], k = 1
Output: [1]

```

**Constraints:**

- The number of nodes in the list is in the range `sz`.
- `1 <= sz <= 5000`
- `0 <= Node.val <= 1000`
- `1 <= k <= sz`

## Solution

1. Using Recursion

```python
def reverseList(head,k):

    old_head,pointer = None,head

    while k:

        next_pointer = pointer.next

        pointer.next = old_head
        old_head = pointer

        pointer =  next_pointer

        k -= 1

    return old_head

def reversedKList(head,k):
    count = 0
    pointer = head

    while count < k and pointer:
        pointer = pointer.next
        count += 1

    if count == k:

        reversedHead = reversedList(head,k)

        head.next = reversedKList(pointer,k)
        return reversedHead

    return head
```

We are first considering only reversing function. We focus on first k elements reversing and then using recursive function we reverse all the nodes

Now first reversing function we can see

1. Take old head value at first we take None and while we are iterating we replace that with old node that is looped. For example first 1 is taken we assign old node as none and when node is iterated to 2 then old_node becomes 1
2. We set next_pointer that is next in line for iteration for 1 it is 2 and we return the old_head that is 1 now.
3. When we iterate second time then next_pointer = [2.next](http://2.next) ⇒ 3 and we set next_pointer to old_pointer that is 1 so now we have 2→3 and old_head = 2  and pointer = 3 and k-1 is < 0 so the loop stops and returns old_head that is 2

This is first function and in the second function 

1. create a new var count to count number of nodes are there to check whether they are less than or greater than k
2. If they are less than k then the original head of that segment will be returned 
    1. if count > k then only k number of nodes are fed into reverse function and remaining are recursed
    2. if count == k then the nodes are reversed
3. while loops takes the pointer forward k number of steps if when count < k and there are no nodes then also loop stops that's the deciding condition for if count == k
4. Now reversedHead is assigned for first k nodes and remaining are recuresed until there are nodes for reverse function which are less than k then it returns original head of that segment 
5. Observe the below figure

![Notes]({{ site.url }}/assets/photo_2021-07-17_20-47-42.jpg)
---
layout: post
title:  Tried Leetcode after Long time
date:   2021-12-16 16:03:00 +0500
image:  06.jpg
tags:   DSA


---

## 23. Merged K sorted List

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

**Example 1:**

```python
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

**Example 2:**

```
Input: lists = []
Output: []
```

**Example 3:**

```
Input: lists = [[]]
Output: []
```

**Constraints:**

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `10^4 <= lists[i][j] <= 10^4`
- `lists[i]` is sorted in **ascending order**.
- The sum of `lists[i].length` won't exceed `10^4`.

## Solution

Usually the Leetcode dont show how they are giving input. Since I always get confused with how linked lists inputs are given the below will be a example

```python
class Listnode:
		def __init__(seld,val=0,next=None):
				self.val = val
				self.next = next

def makingLinkedList(l):
		head = point = ListNode(0)
		Llist = []
		for x in l:
		    k = ListNode(x)
		    point.next = k
		    point = point.next
		
		head = head.next
		
		while head is not None:
				Llist.append(head.val)
		    print(head.val)
		    head = head.next
		return Llist

# if the inputs Linked lists we are giving are
#[
# 1->4->5,
#  1->3->4,
#  2->6
#]
list1 = makingLinkedList([1,4,5])
list2 = makingLinkedList([1,3,4])
list3 = makingLinkedList([2,6])

# Now the input lists we will be giving is
lists = [list1,list2,list3]
```

### Brute Forcing

We add all the linked lists values to an array and sort the array using sorting techniques or sorted in-built method in python

and we loop the sorted again to make it a linked list again

```python
class Solution:
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        self.nodes = []
        head = point = ListNode(0)
        for l in lists:
            while l:
                self.nodes.append(l.val)
                l = l.next
        for x in sorted(self.nodes):
            point.next = ListNode(x)
            point = point.next
        return head.next
```

head = point = ListNode(0)

we use head and point because we use [point.next](http://point.next) to increment nodes and to access the first value we use head Observe in the above example and in the example input also



## Merge with Divide and conquer

![https://leetcode.com/problems/merge-k-sorted-lists/Figures/23/23_divide_and_conquer_new.png](https://leetcode.com/problems/merge-k-sorted-lists/Figures/23/23_divide_and_conquer_new.png)

```python
    def mergeKLists(lists):
        amount = len(lists)
        interval = 1
        while interval < amount:
            for i in range(0, amount - interval, interval * 2):
                lists[i] = self.merge2Lists(lists[i], lists[i + interval])
            interval *= 2
        return lists[0] if amount > 0 else None

    def merge2Lists(self, l1, l2):
        head = point = ListNode(0)
        while l1 and l2:
            if l1.val <= l2.val:
                point.next = l1
                l1 = l1.next
            else:
                point.next = l2
                l2 = l1
                l1 = point.next.next
            point = point.next
        if not l1:
            point.next=l2
        else:
            point.next=l1
        return head.next
```
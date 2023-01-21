---
layout: post
title:  Tried Leetcode after Long time
date:   2021-07-14 16:03:00 +0500
image:  06.jpg
tags:   DSA
Difficulty: Easy
End time: July 14, 2021 6:00 PM
Engineer: sreeram ambalam
Last Edited: July 14, 2021 4:41 PM
Started time: July 14, 2021 4:17 PM
Status: Complete 🙌
Tags: Algorithms, Leetcode, Python
Type: 100 days of code
total time: 1 h, 103 m


---

**26. Remove Duplicates from Sorted Array**

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` *after placing the final result in the first* `k` *slots of* `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** with O(1) extra memory.

**Custom Judge:**

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

```

If all assertions pass, then your solution will be **accepted**.

**Example 1:**

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

```

**Example 2:**

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

```

**Constraints:**

- `0 <= nums.length <= 3 * 104`
- `100 <= nums[i] <= 100`
- `nums` is sorted in **non-decreasing** order.

# Answer:

```
class Solution:
		def removeDuplicates(self, nums: List[int]) -> int:
				i = 1
				j = 1
				
		    while i < len(nums):
		        if nums[i] != nums[i-1]:
		            nums[j] = nums[i]
		            j += 1
		
		        i += 1
		
		    return j
```

This uses Two pointer algorithm ([Link](https://www.notion.so/Two-point-Algorithm-418ab33c07714dd69332626b1807c048)) 

1. First we keep the first element constant

2. Then we take another variable j for example and move it another pace than first

3. First compare i with previous element(i-1) 
    1. If the previous element is equal to current then we increment the j (that is index value)
    2. If values are different we assign that value to last place the pointer is that is i (since "i" only increments when the values are equal) and we move on the next value

    Example if the array is [1,2,2,2,3,3,4]

    First the i will be at index=1 i.e, at 2 and j will be also at 2. Now we compare i to previous index value that is 1 since they are not equal we increment "j" and after we increment "i" and assign 

    nums[j] = nums[i] since i and j are both 1 so the array doesn't change

    So now j = 2 and value j is at is again 2 so when we compare the values is equal to prev so "j" will not be incremented but "i" will be and i will be index 3 which has value 2 since it is equal to previous "j " will not be incremented but "i" will be incremented again to 4 and "j" is now at only 2

    now nums[i] = 3 ≠ nums[i-1] so now nums[j] = nums[i] so nums[2] = 3 and "j" will be incremented to 3 and "i" to 5

    Now nums = [1,2,3,2,3,3,4]

    Now nums[i] = 3 which is equal to nums[i-1] so  nums[j] = nums[i] that is nums[3] = 4 and increments j to 4 and then i = 6 that makes nums = [1,2,3,4,3,3,4] and returns j = 4 since
    
    i = len(nums)
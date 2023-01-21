---
layout: post
title:  Highlights 27th May
date:   2021-05-27 16:03:00 +0500
image:  06.jpg
tags:   Highlights

---



Main Topics:

 1. Leetcode

 2. Truthy and Falsy

    --------------------

    

    ## Leetcode

    Today problem is to convert a string into a number

    [Leetcode Link](https://leetcode.com/problems/string-to-integer-atoi/submissions/)

    At first I tried to solve problem using try and expect 

    ```
    def test():
        s = "00000-42a1234"
        # s = "4193 with words"
        # s = "21474836406"
        k = ""
        l = []
        for i in s:
            print(i)
            try:
                if int(i):
                    print('Inside Try')
                    k = k + i
                    # print(i)
                    print(k)
                elif int(i) == 0:
                    print('Inside ELIF')
                    k = k + i
            except:
                print('Inside Except')
                if i == "-" or i == "+":
                    l.append(i)
                    print('Detected -')
                elif i == " ":
                    print("passing")
                    pass
                # Method 1
                # else:
                #     print("I am breaking")
                #     break
                else:
                    if len(k) > 0:
                        print("I am ret 0")
                        return 0
                    else:
                        break
    
        print(k)    
        if len(k) != 0:
    
            if len(l) > 1:
                return 0
            elif len(l) == 0:
                m = int(k)
            elif len(l) == 1:
                m = int(l[0] + k)
            if m > pow(-2,31) and m < pow(2,31)-1:
                print('With in pow')
                return m
            elif m < pow(-2,31):
                print('Low power')
                return pow(-2,31)
            elif m > pow(2,31) - 1:
                print('High pow')
                return pow(2,31) - 1
        elif len(k) == 0:
             return 0
    
    
    result = test()
    print(result)
    ```

    

    I am still learning so I use print to find out the problem but how much I try the above method doesn't work for all the  test cases the problem arises when the strings occur after an Integer so the first test case 1 will show 4193 for method 1 and 0 for method 2 and vice versa for test case 2.

    Observe I used elif int(i) == 0 under try statement even though I used int(i) that's because original idea was if int(i) exist then the try will be executed but when string is 0, int(i) has value that is 0 but it is a falsy value so if int(i) will become if 0 so if condition code wont be executed



So new code from scratch is required so i spent next 6 hours writing below code:

```
def str2int(s):
            """
            :type str: str
            :rtype: int
            """

            if (len(s) == 0):
                return 0

            s = s.strip()
            
            try:

                if(s[0].isdigit()):
                    sign = 1
                elif(s[0] == '+'):
                    sign = 1
                    s = s[1:]
                elif(s[0] == '-'):
                    sign = -1
                    s = s[1:]
                else:
                    return 0
            except:
                return 0
            l = len(s)
            
            # Method 1
            val = 0;    i = 0
            while(i < l and s[i].isdigit()):
                val = val * 10 + eval(s[i])
                i += 1
                
                
            # Method 2
            # val = ""
            # while( while(i < l and s[i].isdigit()):
            #	val += s[i]
            #	i +=1
            # val = int(val)

            val = sign * val

            if(val > 2147483647):
                return 2147483647
            elif(val < -2147483648):
                return -2147483648
            else:
                return val

k = str2int()
print(k)
```

**Explanation**

1. First "s.strip()" removes all the blank spaces at the start like if s = "        -42" , s.strip() makes s = "-42".

2. now for cases like s=" ", s.strip() returns a empty string so s[0] wont work so used try and except to avoid that

3. Observe the while loop its an interesting discovery of mine we can build a number from variable input even though complete length or no of inputs are unknown. For example

   ​		i. if we are given 2,4,3 separately and make number 243 and if we dont  know how many inputs will be further given we can use Method 1 to make a number. 

4. Now observe method 2 this uses string addition and conversion into number again



Knowledge of Data structures and algorithms helps a lot you will feel that we don't need those sorting algorithms because the programming language we are using already have a better in-built sorting algorithm but knowing how those things work gives you a different perspective like for me how to use Linked Lists and Dictionaries well
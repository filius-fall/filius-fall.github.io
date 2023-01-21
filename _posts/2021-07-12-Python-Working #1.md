---
layout: post
title:  Python Working #1
date:   2021-07-12 16:03:00 +0500
image:  06.jpg
tags:   Explain




---



## How python works

Python is a interpreted language even though it isnt a complied language the code we wrote will be complied a bit

The python code we write will be in higher level language so its first compiled into a byte code and again interpreted by Interpreter to machine code so that our processor can understand

Thats why mobile devices will have hard time executing python since they don't have an interpreter

Interpreter is like a translator but in our case it translates our code into commands that can be understood by the machine.

The Interpreter interprets the code on the fly i.e., it translates while executing. This has both advantages and disadvantages

```python
class Test:
    def __init__(self):
		    self.print_message()
```

When we run the above it doesn't show error because python just checks if the syntax is right and indentation is right. Most of the error we get are during run time errors

Python just interprets from top to bottom and left to right thats why we have following features

```python
def test_function(x):
    class Animal:
        def __init__(self,name):
            self.name = name
				def print_variable():
						print(x)
		return Animal

test_class = test_function(40)
print(test_class)
s = test_class("human")      
print(test_class.name)
test.print_variable

```

As you can see above python doesn't see class inside a function as a error because its just executing top to bottom and left to right

In a way the above function test_function() works as a class constructor which creates class for us

variable s is assigned to class instance and we can access all the functions and variable as seen above

We can use function in function pretty much all the way like 10 functions inside each other

So everything in python pretty much happens live. So we should be aware of this because some bug may go unnoticed and we may run it on production server by mistake.

### Inspect

We can use inspect module to get source code of the function or file we are executing

```python
import inspect
def func(x):
		if x == 1:
				def test():
						print("Is equal to one")
		else:
				def test():
						print("Not equal to one")
		
		return test

new_func = func(1)
print(inspect.getsource(new_func))
```

```powershell
$ python3 test.py
			def test():
                  print("Is equal to one")
```

We can use this to check source code of python libraries if you have any curiosity on how libraries work


Created: July 12, 2021 5:13 PM
End time: July 12, 2021 5:46 PM
Engineers: sreeram ambalam
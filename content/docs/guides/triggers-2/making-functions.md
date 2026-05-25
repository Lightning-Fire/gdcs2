---
draft: true
title: Making Functions
weight: 6170
date: 2026-05-25
description: Once you start building increasingly complex systems, you may
  encounter a lot of bugs, your setups may become unmanageable, or even you may
  begin to loose understanding of the whole web of triggers being created. This
  is where functions come in. They isolate individual bits of logic into
  atomized setups with clear purposes, making setups easier to utilize,
  understand, reuse and expand. This guide will cover all the considerations you
  must know in order to properly create functions without shooting yourself in
  the foot.
tags:
  - Grade 2
  - Trigger Setups
math: true
---
# 1. Functions

## What are Functions

At its core, a function is a mathematical concept that describes a special kind of relationship between inputs and outputs. Imagine a machine: you put something in (*an input*), and it consistently gives you a specific result out (an *output*). In a computational context, a function still adheres to the mathematical principle of mapping inputs to a single, deterministic output. However, the *how* of this mapping shifts from abstract mathematical notation to a concrete sequence of operations performed by a computing system. The core idea is that a computational function is a procedure that, given specific inputs, reliably produces a specific output after a series of defined steps. This procedure must be finite and *unambiguous*, much like a mathematical function.

**![|250](https://lh7-rt.googleusercontent.com/docsz/AD_4nXduiMJrmZ6g4O_V-jw-DX-XcaLnQ5SDfesIYnRV-a16epi3IDZ6AYqIjP3sexJrCQV4sCfplWyYjyA-4h1ztZ6nsQAnK7GjVPQTVqv1s9zaVLfvo32zQCqoa6dZxGbG3uTOqIj1-A?key=pwV5JaWQbrI5PwJQxXDTMQ)**

A function has three main attributes:
- **Input Data**: These are the parameters you give to the function. Computationally, inputs are concrete pieces of data like numbers, objects, other functions, among other data types.
- **Processing Logic**: This is the algorithm or set of instructions that takes the input data and transforms it into the output.
- **Output Data**: The final result produced by the function. It may produce a new piece of data, change attributes of other data, or do both. 

Function syntaxis varies depending on what programming language you are using, but more often than not, most functions follow a similar pattern:

```
function function_name(input) {
    instructions
    return output
}
```

We first declare this set of instructions will be a function with the keyword *function*, then provide its name in *function_name*, followed by the input parameters *input* inside parenthesis. Inside the brackets, we declare the steps the function must follow in *instructions*. The keyword *return* declares what the function will output.

For instance, let's say we want to compute the average between two numbers. We can do it by defining a function that takes two numbers A and B as input, and outputs the average. That can be written like this:
```c
function average(A,B) {
    sum = A + B       // the function stores A + B in a new variable sum
    average = sum/2   // then calculates the average using sum
    return average    // finally, the function outputs the result
}
```
We can use this function to compute the average between any pair of numbers we input; it should verify that $\rm{average}(2,8) = 5$, $\rm{average}(2,1) = 1.5$, and $\rm{average}(-3,3) = 0$, for example.

The main advantage of using functions is that they let you group a set of instructions and freely reuse them. This makes coding much easier: 
- It lets you avoid repetition as you don't have to write the same instructions every time.
- It simplifies managing your code, because if something breaks you can test the function in isolation.
- It can improve readability, as you can give functions meaningful names and purposes to make your code more understandable, not just to yourself but to others as well. 

From the previous example, every time we want to compute the average between two numbers, we can just use the $\rm{average}$ function instead of summing and dividing everytime. Also, if we later in the code perform $z = \rm{average}(x,y)$, it can easily be understood that $z$ stores the average between $x$ and $y$.

## Functions in GD

Now that we understand what functions are and their advantages, how can we make functions with Geometry Dash’s trigger system? The clear answer is by using **Spawn triggers**. In GD, Spawn triggers behave like functions, where everything the Spawn trigger activates correspond to the instructions of the function. In 2.2, it's now possible to give inputs to these functions via spawn remapping, so we can now create general-purpose setups with remappable IDs in mind, and then use them with any set of inputs. In particular, we can structure functions in this way: 
```c
spawn function_ID(inputIDs, outputIDs) {
  instructions      // here are all the trigger setups spawned
  modify outputIDs  // we setup how to modify the output IDs 
}
```
Instead of declaring functions by their name, we declare them using the group ID that the Spawn trigger activates when it runs the function. Also, using remapping we can tell the spawn trigger what input IDs *and* output IDs to use, so the instructions make modifications to the output IDs depending on what the input IDs do.

Let’s take for example this setup. Here, the Item Edit trigger is taking the original value of Item ID 1 as its input, and performs "$\rm{I1 = I1 \cdot 2}$", outputting the result back in $\rm I1$. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFXjZJSQa8TDaiJkppHukvwOcwJXjxZ7Vrt8E944xyzfMcXFIDbirHrqbIcwsf9z6fBvkS6ES7OCoAHycayIStlKkal4r1CDijMRa-oNm4UwyhAlgHSmf08kULPuPbV7szz99eyw?key=pwV5JaWQbrI5PwJQxXDTMQ)

This means that, GID 10 is a function that remaps ID 1 to to both the input and output ID declared via remapping. This setup allows us to reuse the same logic to double _any_ item ID, without needing to create a separate copy of the trigger setup each time.

(Functions - Function example 1)

Functions don't necessarily have to rely only on item IDs. In fact, when a Spawn trigger remaps an ID, it doesn’t just affect one ID type; <span style="color: red;">**_all_**</span> the ID types will be remapped as well. That is, if you remap ID $A$ into ID $B$, then group ID $A$ remaps to group ID $B$, item ID $A$ remaps to item ID $B$, block ID $A$ remaps to block ID $B$, and so on. For this reason, when designing your functions, you must be mindful not just of which IDs you are using, but also which ID *types* you are using from each ID remapped.

For instance, let's say we want to make a function that moves an object to the player, only if the object is "active". If $A$ is our object, then we can represent "being active" with an item ID that takes the value of 1 if $A$ is active, or 0 if it's not. We could use two different IDs, one for $A$ and another for the item ID, but we could also use only ID $A$, where we move the object using group ID $A$ and store its active state in item ID $A$. In pseudocode, we can write that function as:
```c
// I:object denotes the item ID of object
// G:object denotes the group ID of object

spawn move_if_active(object) {
    if I:object == 1:      // we move the object only if it's active
    move G:object to the player   
}
```
What this will do is optimize ID usage, as we are using only one remappable ID in our function, and we are taking advantage of all the possible ID types a single ID can store (in this case, we are using the group and item ID types). 

(Functions - ID optimization example)

From now on, function setups in this guide will stick to this approach of ID usage, in order to make them as efficient as possible. Also, our pseudocode will adopt the following notation, which will help us clearly indicate what kind of ID is being used, while keeping the code easy to read. For any other ID type, the notation will be specified later if needed.![[Pasted image 20250711145859.png|475]]

# 2. Scope
- Unlike common programming languages, variables that are modified using a certain function are modified elsewhere; that is, functions don't manage local variables but global ones. For example, if you want to store "locally" a lot of values in order to calculate something, you'll have to remap the IDs necessary so you can use the Pickup and Timer IDs you need.
- The importance of using control IDs to stop, resume or pause triggers only on a specific instance of the function. These IDs are the only ones that truly can modify a function locally and are specially important when you work with complex setups involving collisions, Count or Event triggers.

# 3. Synchronization

In most programming languages, the instructions you give to functions are run in a specific order, one step at a time. Take a look at the following piece of code for example. It takes a number $a$, an integer $n$, and outputs $a^n$. Notice that to do that, it follows the instructions from top to bottom,  where it first defines the output, then it enters a for loop where it multiplies the output by $a$ as many times as $n$ dictates. After doing *all* the multiplications step by step, it finally outputs the result.  
```c
function power(a, n) {
    output = 1
    counter = n
    while (counter > 0) { 
	output = output * a
	counter = counter - 1
    }
    return output
}
```
These are called **synchronous functions**. When a synchronous function is called, the program pauses and waits for it to finish before continuing to the next instruction. This means that these functions follow a strict set of sequences, one at a time. While one operation is being performed, other task instructions are halted until the operation is finished. However, GD triggers don't *exactly* work this way. 

In GD, Spawn triggers will activate triggers from left to right on the X-axis, where every trigger that shares the same X-position will be triggered according to priority order. Because of this, trigger setups are better read from left to right instead of top to bottom, thus if we have to make setups that follow instructions sequentially, we *must* order triggers this way in order to avoid problems. Also, because of order inheritance, if a Spawn trigger activates multiple Spawn triggers, then whatever these triggers spawn will do so in the order in which the parent Spawn triggers activate.

(diagram)

For this reason, we *have* control over the order in which triggers spawn. However, the key difference in relation to other programming languages is that, if a trigger spawns, it will *not* halt the execution of other triggers. If two Spawn triggers spawn on the same frame, such that the first one activates a loop, and the other one does an instantaneous action, the second Spawn trigger won't wait until the loop finishes, and it will execute its action even if the loop stops or not. This means that functions in GD are **asynchronous**, as multiple operations can run concurrently without waiting for other tasks to complete. This function behaviour is benefitial in most cases, as:
- Different setups can function independently from each other, allowing for a lot of processes being run at the same time. 
- Multiple instances of a single setup can run in parallel via remapping, making repetitive tasks more managable. 
This is great for GD, as levels can have lots of movements, color changes and other processes handled every frame without much issues. However, if we need operations that must execute in a strict sequence, or perform tasks that are dependent on other ones, we have to be *extra* careful of processes being handled in the correct order, specially for the ones that require more than a single frame to be completed.

We can control these tasks in two ways:
- Make every task work in a single frame, so that spawn and priority order automatically manage the order in which trigger spawns. If an operation is performed in a frame, then within the same frame you can keep spawning other triggers after the operation is done; all of them will work as if the operation is finished, preserving the sequential order.
- If a task takes more than a frame to be completed, you can manually stop other processes using a Pause trigger, and when the task is completed, use a Resume trigger to continue the other processes. Alternatively, you can make the task itself spawn the rest of the sequential triggers once the task is finished.  
The former approach is better because functions will complete their task within a single frame, and thus you can inmediately reuse them for other uses. This won't always be possible though, so in those cases we have to use a combination of the first and second approach in order for functions to work as fast as possible, making them reusable and prevent bugs originated for incorrect execution order.

**Example 1: Modulo Function**<br>
The *modulo* is a function that returns the remainder of the division of two numbers $A$ and $B$. It's notated as $A \% B$ and it's a very useful function for modular arithmetic. Although it isn't an option in the Edit Item trigger, we can make a setup for it, following these instructions:
```c
// the function will receive the IDs A and B as input
// it will save the result in output ID

spawn modulo(A, B, output) {
    I:output = floor(I:A / I:B) 
    I:output = I:B * I:output   
    I:output = I:A - I:output
}
```
The function has three instructions that must be performed from top to bottom, otherwise it will simply not work. The first two steps calculate the largest multiple of item ID $B$ such that item ID $B$ is less than item ID $A$, and the final step substract that number from item ID $A$ to get the reminder. We are only using arithmetic here, so making this function is easy; for each step use an Item Edit trigger, and place them from left to right.

(Functions - Modulo function implementation)

In general, functions that involve computing numbers will follow the same logic. Place the triggers in order from left to right to make sure the calculations are done correctly. As long as you don't use loops, this type of functions most of the cases can compute an output within a single frame, so you can reuse them inmediately (like in this example). 

**Example 2: wip**<br>
Let's say we want to move a block horizontally as many times as an input ID number dictates, where it moves to the right if the number is positive, or to the left if it's negative. 
We can approach this problem by making a function that takes a number $n$ as an input and an object $O$ as output. The function moves $O$ horizontally by 10 units, $n$ times, using a while loop. It moves right if $n$ is positive, or left if $n$ is negative. We can write that function as this:
```c
spawn horizontal_move(n, Obj) {
    move G:Obj to reference point
    I:Obj = 0

    // if the number is positive, move right
    if (I:n >= 0) { 
	while (I:Obj < I:n) { 
	    move G:Obj 10 units to the right
	    I:Obj = I:Obj + 10
        }
    } 

    // if the number is negative, move left
    else {          
        while (I:Obj > I:n) {     
	    move G:Object 10 units to the left
	    I:Obj = I:Obj - 10
        }
    }
}
```
Now, we can use function $ \rm horizontal\_move$ to move any object $10\cdot n$ units horizontally, where the direction depends on whether $n$ is positive or negative.

(Functions - Function example 2)
cut
Note that, *counter* will be an ID that is not being considered as an input the function takes, so it will use the same ID for any remapped instance of the function. This will be important later on.

# 4. Mutability
- Functions are non-mutable, meaning you can't dynamically change the IDs you remap, the triggers involved in the setup, and the IDs you use throughout the level. All of that must be handled inside the editor, and you must use all the possible combinations of triggers and IDs (remappable and non-remappable ones) you may need.

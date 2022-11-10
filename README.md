# Things I learned while working on this project:

***

-The difference between arrow functions and functions is the context of how they use "this". 


-Constructors can create bugs in your code that dont generate error messages creating hard to debug probelms.
Example: if you forget to use the "new" keyword you will not get an error and will pollute the global namespace. 
Changing the prototype breaks instanceof. 
the property of an object is set by the engine exactly one time.  


-I was able to dive deeper into understanding scope and I now know what has changed from ES6. Things like let and const being block scoped is good to know to prevent errors!

-I learned about closure which is essentially what is being shared from inner functions to outter functions. 

-I learned that private functions and variables are useful because they add an extra layer of protection to our code. 


-I learned that modules are essentially factory functions that have been wrapped in a IIFE(immediatly Invoked Function Expression)

## Other notes

-I will be coming back to work on an impossible mode CPU

### Live Demo

[githubPages](https://drrecommended.github.io/TicTacToe/ "Live site demo")

![pictureOfProject](/assets/tictactoe.png)
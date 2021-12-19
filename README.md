# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Kinda did this whole assignment in a caffeine-induced blur last night and forgot to make a proper to do list. I'll retroactively explain as much as I can.

I started with a basic html mockup that imitated the image we were given, then set up the server and client communication, and sourced in all the necessary files. After that I banged my head against a wall for awhile trying to write onclick functions for every single math button, to no avail. After chatting with a couple dev friends, they hipped me to the this.html method, which saved my life throughout this project. this allowed me to grab the clicked math operator and assign it to a property which, combined with a switch statement, allowed me to run my calculations, push the result to an array, send the id back to the client, and append the result. Storing and getting the history was straightforward enough, just a matter of setting up a get endpoint on the server, sending the history array back to the client, and appending the history to the DOM as a list by assigning it to a variable and grabbing it's specifiic elements using template literals, plus emptying the given list 

A lot of this project was spent puzzling over ajax sends and 500 errors. I remember spending over an hour trying to figure out why the browser was complaining and pointing to my correctly formatted ajax send before realizing "oh, wait, you're supposed to check for server errors in the terminal, since that's where the server's running." it wound up being a one character difference between server and client URLs, or html classes or something. Keeping all three of these files formatted consistently is kinda hard, but I imagine it's only gonna get harder once we start writing bigger stuff. 



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

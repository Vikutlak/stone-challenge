First stage - Elixir Learning Program

In this program, we will be collecting the data via console, so I've decided to use the 'prompt-sync' module from Node.JS as it is simple and gets the job done. So, to run it, you might need to install Node and the Prompt-sync.

So first of all, I created some of the variables I would need throughout the code and left them empty.

Then with two loops, one for products and another for emails, it gathers the data submitted via console and stores them in the arrays.

After collecting the data needed, it checks for empty arrays and if there is one, it sends and error message and ends.

If everything is fine, it runs a loop to add up the purchase and stores it in a variable (debtSum) to be used later. In this step, it also checks for any negative price, and if there is one, it sends and error message and ends.

Now, with a loop and a conditional we equally divide the debtSum to all the emails given. To make sure not a single penny is missing, the last emails gets the value of the subtraction between the total debt and the sum of the debts given to the others.

The method then returns an array of objects, showing the e-mail and the debt of each one of them.

To run the program simply go to the folder which contains consoleStoneChallenge.js and run "node consoleStoneChallenge" (without the quotation marks).
You will then be asked questions and with the answers it will return the desired result (or maybe an error message).  

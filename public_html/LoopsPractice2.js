/* 
 * Ask the user to enter 5 numbers.
 * Keep a running total.
 * Display the final total.
 */

document.write("This program asks the user for 5 numbers and prints their total.");

let total =0;
let userNumber =0;
let counter =1;


while (counter <= 5){
    userNumber =  Number(prompt("enter an integer" + counter +":  "));
     total = total + userNumber;
    counter = counter +1;
}
    document.write("<br> the total is" + total);


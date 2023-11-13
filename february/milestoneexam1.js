// 1. PassworM ValiMator
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console
function validatepassword(password,confirmpassword){
    if(password==confirmpassword){
console.log("password validation successsful");
    }
    else{
        console.log("password did not match validation unsuccesssful");
    }
}
validatepassword("12345678","12345678");
validatepassword("12345678","12345679");

// Q2. Calculator
// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
// to perform the operation on the two numbersQ The calculator function should"
// L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
// L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
// L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
// operation and store the result in a variable called resultP
// L If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ

function calculator(num1,num2,operator){
    let result;
    switch(operator){
        case '+':
            result=num1+num2;
            break;
            case '-':
                result=num1-num2;
                break;
                case '*':
                    result=num1*num2;
                    break;
                    case '/':
                        if(num2!=0){
                        result=num1/num2;
                        }else{
                            console.log("error:divison by zero");
                            return;
                        }
                        break;
                        default:
                            console.log("invalid operator");
                            return;
    }
    console.log(`result:${result}`);
}

console.log("");
calculator(5,4,'+');
calculator(5,4,'-');
calculator(5,4,'*');
calculator(5,4,'/');
calculator(5,0,'/');
calculator(5,4,'&');
// 3. Color Mixer
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// based on the following criteria"
// L If color1 is "red" and color2 is "blue" or vice versa, print "purple"P
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
// L If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"P
// L If any other combination of colors is input, the program should print "Invalid color combination"Q

function colormixer(color1,color2){
    let result;

    switch(`${color1.toLowerCase()}-${color2.toLowerCase()}`){

            case 'red-blue':
            case 'blue-red':
                result='purple';
                break;

            case 'red-yellow':
            case 'yellow-red':
                result='organge';
                break;

            case 'blue-yellow':
            case 'yellow-blue':
                result='green';
                break;
                        default:
                            console.log("invalid color");
                            break;
    }
    console.log(`result:${result}`);
}

colormixer('red','blue');
colormixer('yellow','red');
colormixer('blue','yellow');
colormixer('green','red');

// 4. Highest Marks
// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marksQ

function findhighestmarks(marks){
    let highestmarks=0;

    for (let i=0;i<marks.length;i++){
        highestmarks=(marks[i]>highestmarks?marks[i]:highestmarks)
    }
console.log(`highest marks:${highestmarks}`)
}

const studentmarks=[50,60,70,80,90];
findhighestmarks(studentmarks);

// 5. Capitalize
// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changesQ
function capitalizename(name){
    const modifiedname=(name&&name[0].toLowerCase()===name[0])?name.charAt(0).toUpperCase()+name.slice(1):name;
    return modifiedname;
}
const username="naveen";
const modifiedname=capitalizename(username);
console.log(`original Name: ${username}`);
console.log(`Modified Name: ${modifiedname}`);

// 6. Vowel Counter
// We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
// countedQ

function countvowels(name){
    const vowels="aeiouAEIOU";
    let vowelcount=0;
for(let i=0;i<name.length;i++){
    if(vowels.includes(name[i])){
        vowelcount++;
    }
}
return vowelcount;
}
const personname="naveenkumar";
const numberofvowels=countvowels(personname);
console.log(`number of vowels in ${personname}:${numberofvowels}`);

// 7. Remove Duplicates
// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase but also
// affect the accuracy of the purchase order.
// To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program
// should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds.
// Writd a program to solvd thd probldm of duplicatd itdms in thd cart by rdmoving duplicatds.
function removeduplicates(cart){
    const uniquecart=[...new Set(cart)];
    return uniquecart;
}
const customercartwithduplicates=["intems1","intems2","intems1"];
const customercartwithoutduplicates=removeduplicates(customercartwithduplicates);
console.log("customer cart with duplicates:", customercartwithduplicates);
console.log("customer cart without duplicates:", customercartwithoutduplicates);

// 8. InverteW right-angleW triangle pattern with asterisks
// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.
// Invdrtdd right-angldd pattdrn:
// If i=6
function invertedtrianglepattern(rows){
    for(let i=1;i<=rows;i++){
        for (let j=1;j<=i;j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}
const numrows=7;
invertedtrianglepattern(numrows);

// 9. Check for divisibility.
// Writde a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
// Use a for loop and continue statement.

function filternumber(array){
    for(i=0;i<array.length;i++){
    let num=array[i];
        
    if(num%3===0&&num%2!==0){
         console.log(num);
          }
        }
      }
    
    let numbers=[1,2,3,4,5,6,7,8,9,10];
    filternumber(numbers);

// 10. Correct a bug
// You are working on an e-commerce website where customers can add items to their cart. The cart stores the
// quantity of each item that the customer wants to purchase in an array of numbers. However, the website dis
// currently depdriencing a bug where the quantity of each item is being recorded incorrectly by reducing it to
// half. As a result, you nddd to write a JavaScript function that can double the quantity of each item in the cart
// array to correct the bug.

function doublecartquantities(cart){
    const correctedcart=cart.map(quantity=>quantity*2);
    return correctedcart;
    }
    const originalcart=[1,2,3,4,5];
    const correctedcart=doublecartquantities(originalcart);
    console.log("originalcart:",originalcart);
    console.log("originalcart:",correctedcart);
    
// 11. Unit converter
// A local weather station needs to convert temparature data collected in Celsius to Fahrenheit before displaying
// it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The
// function should take input in Celsius and return output in Fahrenheit. This function will help thd weather station
// to provide temperature readings that are easily understandable to a widdr audince.








// 12. Calculate rental cost
// A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
// of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
// Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
// Thd rdntal costs arc
// V Economy = Rs. 4FFF /- per dayE
// V Midsizd = Rs. 1F,FFF /- per dayE
// V Luxury = Rs. 2F,FFF /- per day.

// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.



// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.




// 15. Calculate the percentage of the discount
// A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
// show customers how much they can save. Given the original price and the discounted price of a product,
// implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
// This function could be useful for the store's marketing team to create promotions and offers that attract
// customers.





// 16. Generate a random number
// Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
// Use a self-invoking arrow function to generate the random number. This program can be used as a component
// in various games or applications that require a random number generator.




// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.




// 18. Change Text on Button click.
// Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
// platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
// toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.

// 19. Validate Password
// You are building a login form for a website and need to validate user input using JavaScript. The form has two
// input fields: email and password, and a submit button.
// Your task is to implement JavaScript code that validates the email and password input fields. The email field
// should contain the "@" symbol. The password field should have a minimum length of 8 characters. If either of
// these conditions is not met, an error message “Invalid email or password!” should be displayed in red color as a
// paragraph text below the form. If the password is valid the message “Valid email and password!” must be
// displayed in green color as a paragraph text below the form.
// Your code should run when the user clicks the submit button and should prevent the form from submitting if
// the input is invalid. The input type of email must be text and the input type of password must be password
// without any minLength attribute specified.


// 20. Dynamically Adding List Items to an Ordered List
// Visit page and look for “What you'll learn” section.
// The section consists of a list of information on what you will be learning in the course. You are required to write
// a JavaScript program that stores a pre-existing array of list items. On each button click, the program should
// add a new list item in sequential order. The program should verify if any remaining items are available in the list
// item array and add the next item to the list accordingly. If no items are left, the function should display a
// message indicating that all items have been added.

// 21. TODO App
// Create a simple to-do app to add TODO items to the list through an input field and a button.

// 22. Progress Bar
// Create a progress bar that fills up as the user scrolls down the page.

// 23. Change the color on click
// Create a button that utilizes an array of colors and the Math.random method to change the background color
// of the page upon clicking.

// 24. Text Highlighting
// Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8
// characters. The highlighted words should be with a yellow background color.

// 25. Move the Image
// The objective is to write a JavaScript program that enables an image to move according to the direction
// specified by the arrow keys. The program must be able to recognize and respond to the input from the arrow
// keys, and accordingly, update the position of the image on the screen. The program should be able to handle
// the movement of the image in all directions, including up, down, left, and right, in a smooth and responsive
// manner. Have a look at the event key codes before starting the project.
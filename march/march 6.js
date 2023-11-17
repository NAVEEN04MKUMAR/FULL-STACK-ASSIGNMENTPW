// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

let input="naveen";
function reversedstring() {
    let reversedstring=input.split('').reverse('').join('');//split the element then reverse it stored into array  then join the array
    console.log(reversedstring);
}
setTimeout(reversedstring,2000);//2000 EQUAL TO THE MILLI SECOND

// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

let delay=10000;//actually how much we have to make the delay
function generaterandomnumber(){
    let remainingTime=delay/1000;
    let progressInterval=setInterval(()=>{
    console.log(`Time remaining:${remainingTime} seconds`);
     remainingTime--;
if (remainingTime < 0) {
    clearInterval(progressInterval); // stop displaying progress messages
    let randomNumber = Math.floor(Math.random() * 100); // generate random number between 0 and 99
    console.log(`Random Number: ${randomNumber}`); // Output the generated random number
  }
},1000); 
setTimeout(()=>{
clearInterval(progressInterval);//stop displaying the value if time is exceeded
let randomnumber=Math.floor(Math.random()*100);//generate the number between the 0 and 99
console.log(`Randomn Number:${randomnumber}`);
},delay);
}
generaterandomnumber();

// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

//all th eprices are the interms of the doller
const inventory={
    item1:1,
    item2:2,
    item3:3
};
const exchangerate=80;
//for each values of the US dolleres we convrt into the indian ruppes throgh mapping
const convertedinventory=Object.fromEntries(
    Object.entries(inventory).map(([item,price])=>[item,price*exchangerate])
);
console.log(convertedinventory);

// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const books=[
{  book:"book A",authorname:"authorname A",year: 2008},
{  book:"book B",authorname:"authorname B",year: 2010},
{   book:"book C",authorname:"authorname C",year: 2012},
{   book:"book D",authorname:"authorname D",year: 2014},
];
const filteredbooks=books.filter((books)=>books.year>2010);
//We create a new object using the spread operator (...book) to copy all the properties of the original book object.
//We update the author property of the new object by calling the toUpperCase() function on book.author. This function converts the author name to uppercase.
 const capitalizedbooks=filteredbooks.map((books)=>{
   return{...books,author:books.authorname.toUpperCase()};
 });
 console.log(capitalizedbooks);

// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.

function validatelinkedinurl(url) {
  // Define the pattern for a valid LinkedIn profile URL
  var pattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  // Check if the provided URL matches the pattern
  return pattern.test(url);
}

var urltovalidate = "https://www.linkedin.com/in/john_doe123";
if (validatelinkedinurl(urltovalidate)) {
  console.log("the linkedIn profile URL is valid.");
} else {
  console.log("invalid linkedIn profile URL. please check the format.");
}

// 6. LinkedIn Profile URL Validator.
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.

function validatelinkedinprofileuRL(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return pattern.test(url);
}

const validURL = "https://www.linkedin.com/in/john_doe123";
const invalidURL = "https://www.linkedin.com/in/invalid@user";
console.log(validateLinkedinprofileURL(validURL));   // Output: true
console.log(validatelinkedinprofileURL(invalidURL)); // Output: false

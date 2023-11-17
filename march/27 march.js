// Coding Challenges on Error Handling and Prototypes
// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.
function doubleusingcallback(arr, callback) {
  if (!array.isarray(arr) || typeof callback !== 'function') {
    throw new Error('Invalid input. Please provide an array of integers and a callback function.');
  }
  const doubledArray = arr.map(element => callback(element) * 2);
  return doubledArray;
}
const inputArray = [1, 2, 3, 4];
const doubledResult = doubleUsingCallback(inputArray, num => num * 2);
console.log(doubledResult); 

// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.

function manipulateString(str) {
    const manipulatedStr = str.toUpperCase();//take string where the convert into uppercase stored in the manipulatedstr
  
    function logString() {
      console.log("The manipulated string is: " + manipulatedStr);//whatever value we here we concatinate with the manipulatedstring 
    }
  
    return logString;
  }
  
  const sentence = "naveen kumar";
const logManipulatedString = manipulateString(sentence);
logManipulatedString();

// 3. Age in Days.
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.
// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."
// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.

function ageInDays(person) {
 //concatenate the firstname,lastname, and ageindays concert into the day from the age of years
    var fullName = person.firstName + ' ' + person.lastName;
    var ageInDays = person.age * 365;
  
    return function() {
      console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
    };
  }
  //get the first name,lastname and the age from the object of the person
  var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  var logMessage = ageInDays(person);
  logMessage(); // Logs: "The person's full name is John Doe and their age in days is 10950."

// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

//get the all the books tittle,autor,year
const books=[
    {title:"book A",author:"author A",year:2021},
    {title:"book B",author:"author B",year:2022},
    {title:"book C",author:"author C",year:2023},
];
//define the callback function
function logtitle(titles){
    titles.sort();//sort the all the tittle
    titles.forEach(title=>console.log(title));//log each title to the console
}
//define the main function
function processbooks(booklist,callback){
    const titles=booklist.map(book=>book.title);//create a newlist containing the only titles
    callback(titles);//pass the new list to the callback function
}
//call the main function with the book list and callback function
processbooks(books,logtitle);

// 5. Greeting Promise.
// You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

//try to verify whether it is the string or not
function greet(name){
return new Promise((resolve,reject)=>{

    if(typeof name==='string'&&name.trim().length>0){
    const greeting=`Hello,${name.trim()}!`;
    resolve(greeting);
}
    else{//when the validation fail throw an error
    reject(new Error('invalid name'));
}
});
}
//accept the promise 
greet('naveen') 
.then(message=> {
    console.log(message);//if the return the greeting from this
})
.catch(error=> {//if the error occured during the execution it will work
    console.log(error.message);
});

// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

function fetchData() {
    fetchData('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Result:', data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

// 7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

//fetch(todourl,posturl, combinedData);
async function fetchData() {
    try {//get the both the url to the variable
      const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
      const postUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
      const [todoResponse, postResponse] = await Promise.all([
        fetch(todoUrl),
        fetch(postUrl)
      ]);
  
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
      const combinedData = {
        todo: todoData,
        post: postData
      };
  
      console.log(combinedData);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the function
  fetchData();

// 8. Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
// the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
// of posts, and then display them to the browser console.
function fetchdatafromapi(){
    const apiurl='https://jsonplaceholder.typicode.com/posts';
fetch(apiurl)
.then(response=>{
    if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`);
    }
    return response.json();
    })
.then (data=>{
    console.log('data frpm api:',data);
})
    .catch(error=>{
        console.error('error fetching data:',error);
    });
}
fetchdatafromapi();

// 9. Error Handling
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
// that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
// to simulate an error, and then display an error message on the webpage.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="result"></div>
    <script >
        function fetchdatafromapi(){
    const apiurl='https://jsonplaceholder.typicode.com/posts';
fetch(apiurl)
.then(response=>{
    if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`);
    }
    return response.json();
    })
.then (data=>{
displayData(data);
})
    .catch(error=>{
        displayError(error.message);
    });
}

function displayData(data){
    const resultdiv=document.getElementById('result');
    resultdiv.textContent='data from api'+JSON.stringify(data);
}
function displayError(data){
    const resultdiv=document.getElementById('result');
    resultdiv.textContent='err'
}
fetchdatafromapi();
    </script>
</body>
</html>

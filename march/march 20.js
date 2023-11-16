// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

//get the number successfull way
function convertintonumber(str){
    try{
        const number=parseInt(str);//parseint helpful to convert the string into integer
//when str is not a valid number during converting but it will return the true     
        if(isNaN(number)){
            throw new Error('invalid number');
        }
        return number;
    }
//conversion was unsuccessfull
//above code error may occur may not occur but catch section only error occured
    catch(error){
        return 'invalid number';
    }
}
console.log(convertintonumber('42'));
console.log(convertintonumber('nav'));

// 2. Building Robust Functions in JavaScript
// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.


function getperson(person){
    try{
        if(typeof person!=='object'||!person.hasOwnProperty('name')||!person.hasOwnProperty('age')){
            throw new Error('Invalid parameter type');
        }
        return `Name:${person.name},Age:${person.age}`;
    }catch(error){
        return error;
    }
    }
    
    const validperson = { name: 'John', age: 25 };
    console.log(getperson(validperson));
    
    const invalidperson = 'not';
    console.log(getperson(invalidperson));

    // 3. Car Description Class.
    // Create a class called Car with three properties: company, model, and year. The class should have a method
    // called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
    // instance of the Car class and call the getDescription method.
    class car{
        //purpose of the constructor to initialise the properties ,set default value,any nessasary setup   
            constructor(company,model,year){
                this.company=company;
                this.model=model;
                this.year=year;
            }
            getdescription(){
                return `This is a ${this.year} ${this.company} ${this.model}`;
            }
        }
        const carr = new car('Toyota', 'Camry', 2022);
        const description = carr.getdescription();
        console.log(description);

//         4. Employee Class Challenge.
// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.

class Employee{
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getsalary(){
        return this.salary;
    }
}
const employee1=new Employee("naveenkumar","strong probelem solver with backend developer",10000000);
const salary=employee1.getsalary();
console.log(`${employee1.name} is a ${employee1.position} with a salary of ${salary}`);

// 5. Implementing a Person Class with Default Values
// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person{
    constructor(name="unknown",age=0){
        this.name=name;
        this.age=age;
    }
    getdetails(){
        return `name:${this.name},age:${this.age}`;
    }
}
const person1=new Person();
console.log(person1.getdetails());

const person2=new Person("naveenkumar",23);
console.log(person2.getdetails());

// 6. Using Static Method to Add Two Numbers with Calculator Class
// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.

class Calculator{
    static add(number1,number2){
        return number1+number2;
    }
}

//const calculator=new Calculator();
const sum=Calculator.add(1,2);
console.log(`the sum is ${sum}`);


// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User{
    constructor(username,password){
        this.username=username;
        this._password=password;
    }

    get password(){
        return this._password.replace(/./g,'*');
    }

    set password(newpassword){
        if(newpassword.length>=8&&/[A-Z]/.test(newpassword)){
            this._password=newpassword;
           console.log('password updated successfully');
        }else{
            console.error('invalid password');
        }
    }
}

const user=new User('naveen','1234567N');
console.log(`current password:${user.password}`);
user.password='123456N8';

// 8. Adding a Method to a Prototype.
// Create a prototype object called Student with a property name. Add a method called printDetails to the
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
// name "Mithun" and call the printDetails method.

function Student(name){
    this.name=name;
}

Student.prototype.printdetails=function(){
    console.log(`hello,my name is ${this.name}`);
};

const student1=new Student("naveen");
student1.printdetails();

// 9. Check the presence using closures.
// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.
function numberchecker(numbers) {
    // The closure function that checks if a number is in the array
    return function (number) {
        return numbers.includes(number);
    };
}

const numbersarray = [1, 2, 3, 4, 5];
const checknumber = numberchecker(numbersarray);

console.log(checknumber(3)); 
console.log(checknumber(6)); 

// 10. Filter by Category.
// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.

function filterbycategory(products) {
    return function (category) {
        return products.filter(product => product.category === category);
    };
}
const productsarray = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-shirt', category: 'Fashion' },
    { id: 3, name: 'Headphones', category: 'Electronics' },
    { id: 4, name: 'Sneakers', category: 'Fashion' },
    { id: 5, name: 'Coffee Maker', category: 'Appliances' }
];

const filterproductsbycategory = filterbycategory(productsarray);
const fashionproducts = filterProductsbycategory('Fashion');
console.log(fashionproducts);




















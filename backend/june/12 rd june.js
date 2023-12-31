// status :answer is available to all the question



// In this coding challenge, your task is to create a package&json file for your project using the npm init
// command& The package&json file is essential for managing dependencies, scripts, and other project"related
// details& Below is the expected folder structure

//  In the same project directory created in the above assignment, your task is to create a new file index&js and using the fs module add information about Node&js architecture to a new file nodejs_architecture&txt& Below are the expected files in the project folders

//  Continuing assignment 2& Here, let’s create a new file named index&js and use the fs module to read the
// content of nodejs_architecture&txt and print the content to the console&

//  In this coding challenge, you will continue working with the file created in the previous assignments& Here your task is to access the existing nodejs_architecture&txt file and use the fs module to append additional data to it& Specifically, add some advantages of Node&js to the file and print the file content to the console

//  To wind up the fs module walk"through challenges, let’s delete the nodejs_architecture&txt file& On deletion print "File Deleted SuccessFully" to the console%

//  Assume a situation where our server restricts access to its configuration via the user interface& The only way to obtain the OS and release information is through a programmatic approach& In this challenge, you are expected to use the os module and print the os name and the os"release version to the console&

//  In this challenge, you are required to use Node1js and the built-in HTTP module to create a server that
// displays the text "I Am Happy To Learn Full Stack Web Development From PW Skills!" on the browser screen1
// The goal is to utilize the HTTP module to create an HTTP server, set the port, appropriate content type, and send the message as a response to the client's request, allowing it to display on the browser

// Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
// event named "subscribe"1 When this event is triggered, it should display a message in the console indicating that the user has subscribed

//  While working with the events module, one interesting observation is that when an event is created and
// called, the associated event handler is triggered1 However, what happens if we remove an event and then
// try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event handler and observe what happens when we call it0
// du

// In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
// allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
// number of event listeners associated with an event and then set the maximum number of event listeners to
// 51 Note that the default maximum number of listeners might vary1 Your task is to limit the number







answer:
const fs = require('fs');
const os=require('os');
const http=require('http');
const EventEmitter=require('events');

const nodejsarchitectureinfo=`Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable and networked applications.
Node.js uses an event loop for handling asynchronous operations, making it suitable for building real-time applications and APIs. It also has a rich ecosystem of packages available through npm (Node Package Manager) that simplifies the development process.
Node.js follows a single-threaded, event-driven model but can handle multiple concurrent connections efficiently through mechanisms like callbacks, promises, and async/await.`;

// //write the Node.js  architecture information to a file

fs.writeFile('nodejs_architecture.txt',nodejsarchitectureinfo,(err)=>{
    if(err){
        console.error('error writing to nodejs architecture.txt',err);   
    }else{
        console.log('nodejs architecture information has been written to the nodejs architecture.txt');   
    }
});

fs.readFile('nodejs_architecture.txt','utf8',(err,data)=>{
if(err){
    console.error('error reading to nodejs architecture.txt',err);   
}else{
console.log('content of nodejs_architecture.txt:');
console.log(data);
}
});


const datatoadd=`1.Great for Prototyping: Node.js is excellent for rapid prototyping and MVP (Minimum Viable Product) development, allowing you to quickly validate ideas and concepts,
2.Microservices: Node.js is often used for building microservices architectures due to its lightweight nature, scalability, and support for containerization technologies like Docker.
3.NPM (Node Package Manager): Node.js comes with npm, one of the largest package ecosystems in the world. It provides easy access to a vast number of open-source libraries and modules, allowing developers to quickly build applications without reinventing the wheel.`
fs.appendFile('nodejs_architecture.txt',datatoadd,(err)=>{
    if (err) {
        console.error('Error appending data to file:', err);
      } else {
        console.log('data appended to file successfully.');
      }
});


const filepath='config\workspace\nodejs_architecture.txt';
console.log('File path:', filepath); 

if(fs.existsSync(filepath)){
fs.unlink(filepath,(err)=>{
    if (err) {
        console.error('Error deleting file:', err);
      }else{
        console.log('File deleted successfully.');
      }
});
}else {
    console.log('File does not exist.');
  }



  const platform=os.platform();
  console.log('os platform:',platform);

  const release=os.release();
  console.log('os platform:',release);

  
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');
});
const port=3002;
const hostname='localhost';

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});

//it is for when we click the one element it is trigured the get the result at server something

const eventemitter=new Eventemitter();

eventemitter.on('subscribe',(username)=>{
    console.log(`user ${username} has subscribed`);
});

// const username='Naveen';
// eventemitter.emit('subscribe',username);



function simulatesubscription(username){
    eventemitter.emit('subscribe',username);
}
simulatesubscription('JohnDoe');

 const eventEmitter=new EventEmitter();

 const eventhandler=()=>{
   console.log('event handler is triggered');
 };

 eventEmitter.on('myevent',eventhandler);
eventEmitter.emit('myevent');
eventEmitter.off('myevent',eventhandler);
process.nextTick(()=>{
   eventEmitter.emit('myevent');
});

setTimeout(() => {
   console.log('start');
   eventEmitter.emit('myevent');
   console.log('finish');
 }, 0);



 eventEmitter.setMaxListeners(5);
 const currrentmaxlisteners=eventEmitter.getMaxListeners();
 console.log(`Current maximum number of listeners: ${currrentmaxlisteners}`);


 
 eventEmitter.setMaxListeners(10);
 const updatemaxlisteners=eventEmitter.getMaxListeners();
 console.log(`Current maximum number of listeners: ${updatemaxlisteners}`);




// .txt file 
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable and networked applications.
// Node.js uses an event loop for handling asynchronous operations, making it suitable for building real-time applications and APIs. It also has a rich ecosystem of packages available through npm (Node Package Manager) that simplifies the development process.
// Node.js follows a single-threaded, event-driven model but can handle multiple concurrent connections efficiently through mechanisms like callbacks, promises, and async/await.1.Great for Prototyping: Node.js is excellent for rapid prototyping and MVP (Minimum Viable Product) development, allowing you to quickly validate ideas and concepts,
// 2.Microservices: Node.js is often used for building microservices architectures due to its lightweight nature, scalability, and support for containerization technologies like Docker.
// 3.NPM (Node Package Manager): Node.js comes with npm, one of the largest package ecosystems in the world. It provides easy access to a vast number of open-source libraries and modules, allowing developers to quickly build applications without reinventing the wheel.

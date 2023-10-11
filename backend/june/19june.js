//status good all the problem is done


Q.1 Build a Server Using Http Module NodejS with api endpoints for Getting Products Date
" ‘/’G →G send msg as “We:come to Men & Women Dummy Data”F
" G‘/men’ →G send 10 products data of men
" ‘/women’G →G send 10 products data of women;
" ‘/other’G → send response as page not found
Hint: You can use any data, send data in json format

Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
" ‘/’G →G send counter data as {counter:counter^
" `/increment` → increment counter by 1 and send in response :a test data as {counter:counter^
" `/decrement` → decrement counter by 1 and send in response :a test data as {counter:counter}
Note: Using Express is Mandatory for this Question

Q.3_Create a Basic Server with Different Routes using Expresl
" `/`G G → send response as {msg:`I am homepage`^
" `/about`G → send response as {msg:`I am about page`^
" `/contact ` → send response as {emai::`suppor#@pwskills.com`}
Assignment

Q.4 Build a Server that Generate Random Number Using Epre!
 ‘/random’ → send random number in response {random:10}





const http=require('http');
const express=require('express');
const app=express();

const server=http.createServer((req,res)=>{
  res.setHeader('Content-Type', 'text/plain');

const menproducts=[
  {id: 1, name: 'Men Product 1' },
  {id: 1, name: 'Men Product 2' },
  {id: 1, name: 'Men Product 3' },
];

const womenproducts=[
  {id: 1, name: 'Men Product 1' },
  {id: 1, name: 'Men Product 2' },
  {id: 1, name: 'Men Product 3' },
];

  if(req.url==='/'){
    res.statusCode=200;
    res.end('Welcome to man and women dummy data');
}else{
    res.statusCode=404;
    res.end('not found');
}
});


app.get('/men',(req,res)=>{
  res.json(menproducts);
});

app.get('/women',(req,res)=>{
  res.json(womenproducts);
});


//Listen on a specific port and hostname
const port = 3005;
const hostname = 'localhost';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//problem number:2
//we fix this one with the increment and decrement by one if needed 

let counter=0;

app.get('/',(req,res)=>{
  res.send(`counter:${counter}`);
});

app.get('/increment',(req,res)=>{
  counter+=1;
  res.send(`counter:${counter}`);
});

app.get('/decrement',(req,res)=>{
  counter-=1;  
  res.send(`counter:${counter}`);
});




//problem:3
//give the text message

app.get('/',(req,res)=>{
  res.send(`I am a message`);
});

app.get('/about',(req,res)=>{
  res.send(' I am a about message');
});

app.get('/contact',(req,res)=>{
  res.send('it is my email:naveengatemech@gmail.com');
});


//problem:4
//generate the random number in the given range


app.get('/random',(req,res)=>{

  const minnumber=1;
  const maxnumber=100;
  const randomvalue=getrandomnumber(minnumber,maxnumber);
  res.json({ random: randomvalue });
});

//it will give the number 0 to 1 then get the 0 to 100*min value
function getrandomnumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}






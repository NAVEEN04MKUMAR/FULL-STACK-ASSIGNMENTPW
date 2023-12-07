import React,{useState} from 'react';


function Counter(){
const[count,setcount]=useState(0);


const increment=()=>{
setcount(count+1);
};


const decrement=()=>{
    if(count>0){
setcount(count-1);
}
};


return (
<div>
<h1>counter</h1>
<p>count:{count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
);

};
export default Counter;









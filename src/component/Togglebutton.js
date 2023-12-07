import React from 'react';


const Togglebutton=({onClick,text})=>{
return (
<button onClick={onClick} className="toggle-button">
{text}
</button>

);
};
export default Togglebutton;
import React,{useState} from 'react';

//usestate hook store the the value of the username and password
    const Loginform=()=>{
        const [FormData,setFormData]=useState({
username:'',
password:'',
        });

//const [signupdata,setSignupData]=useState(true);
const [signupdata, setSignupData] = useState({
  name: '',
  email: '',
  password: '',
});

const handleInputChange=(e)=>{
          const {name,value}=e.target;
          setFormData({
            ...FormData,
            //formData state by creating a new object that copies the existing state and updates the specific field (name) with the new value.
                [name]:value,
            });
          };

const handleSignupInputChange=(e)=>{
          const {name,value}=e.target;
          setSignupData({
            ...signupdata,
            //formData state by creating a new object that copies the existing state and updates the specific field (name) with the new value.
                [name]:value,
            });
          };

const handleSubmit=(e)=>{
            e.preventDefault();
           //it is for client side validation
            console.log('form submitted with data',FormData);
          };

//it is for the signup form          
// setFormData({
//     username:'',
//     email:'',
//     password:'',
// });

const handletogglesignup=()=>{
     setSignupData(!signupdata);

// if (signupdata) {
//     setSignupData({
//       username: '',
//       password: '',
//       name: '',
//       email: '',
//     });
//   } else {
//     setFormData({
//       username: '',
//       password: '',
//     });
//   }




};


          
return(
        <form onSubmit={ handleSubmit}>
        <div>
        <label htmlFor="username">Username:</label>
        <input type="text"
        id ="username"
        name="username"
        value={FormData.username}
        onChange={handleInputChange}
         />
         </div>       


  <div>
      <label htmlFor="password">password</label>
       <input 
        type="password"
        id ="password"
        name="password"
        value={FormData.password}
        onChange={handleInputChange}
        />
  </div>
{/* if the signup is true then it will show the name and email*/}
{signupdata&&(
<>
<div>

     <label htmlFor="name">Name:</label>
       <input 
        type="text"
        id ="name"
        name="name"
        value={setSignupData.name}
        onChange={handleSignupInputChange}
        />
</div>

<div>
<label htmlFor="email">Email:</label>
<input
        type="email"
        id ="email"
        name="email"
        value={setSignupData.email}
        onChange={handleSignupInputChange}
></input>
</div>
</>

)};

{/* <div>
    <button type="submit">Login</button>
</div> */}

<div>
    <button type="button" onClick={handletogglesignup}>
        {signupdata?'switch to login':'switch to signup'}
    </button>
</div>
</form>

    );
    };
export default Loginform;
import React,{useState} from 'react';
import Instragramlogo from './component/instragramlogo';
// import Signup from './component/Signup';
// import Login from './component/Login';
import Togglebutton from './component/Togglebutton';
import Loginform from './component/Loginform';

function App(){

    const [signupdata, setSignupData]=useState(false);

    const toggleView=()=>{
    setSignupData(!signupdata);
};

    return (
        <div className="App">
            <header className="app-header">
                <Instragramlogo />
                <Togglebutton onClick={toggleView}
                text={signupdata?'Switch to Login':'Switch to Signup'}/>
            {/* {signupdata ? <Signup /> : <Login />} */}
            <Loginform/>
            </header>
        </div>
    );
}

export default App;
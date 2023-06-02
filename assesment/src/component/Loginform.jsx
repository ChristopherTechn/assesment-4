
import React, {useState} from 'react'
import DarkModeToggle from './Darkmode'
export default function Login(){

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);

    }
    const[email, setemail]= useState('')
    const[password, setpassword]= useState('')
    const[error, seterror]= useState('')
const handleSubmit = (e) => {
    e.preventDefault();

    if((email.trim()== '') || (password.trim()=='')){

        seterror("please enter both email and password to continue");
        return;
    }
    console.log('Form submitted!');
    console.log('Email:', email);
    console.log('Password:', password);

    setemail('')
setpassword('')
seterror('')
};


    return(
<div className='loginform'>
    <h1>LoginForm</h1>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit}>
    <div>
        <label>Email</label>
        <input type="email" value={email}
         onChange={(e) => setemail(e.target.value)}/>
    </div>
    <div>
        <label>Password</label>
        <input type="password" value={password}
         onChange={(e) => setpassword(e.target.value)}/>
    </div>
    <button type='submit'>Submit</button>
    </form>
</div>
        )
};




import { useState } from "react";

const More_Form = (props) =>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [firstNameError, setFirstNameError] = useState ('')
    const [lastNameError, setLastNameError] = useState ('')
    const [emailError, setEmailError] = useState ('')
    const [passwordError, setPasswordError] = useState ('')
    const [confirmPasswordError, setConfirmPasswordError] = useState ('')

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 1){
            setFirstNameError('First name is required!')
        } else if(e.target.value.length < 2) {
            setFirstNameError('First name must be at least two characters!')
        } else{
            setFirstNameError('')
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 1){
            setLastNameError('Last name is required!')
        } else if(e.target.value.length < 2) {
            setLastNameError('Last name must be at least two characters!')
        } else{
            setLastNameError('')
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1){
            setEmailError('Email is required!')
        } else if(e.target.value.length < 3) {
            setEmailError('Email must be at least three characters!')
        } else{
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1){
            setPasswordError('Password is required!')
        } else if(e.target.value.length < 3) {
            setPasswordError('Password must be at least three characters!')
        } else{
            setPasswordError('')
        }
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 1){
            setConfirmPasswordError('Confirm password is required!')
        } else if(e.target.value!={password}) {
            setConfirmPasswordError('Confirm password must match password!')
        } else{
            setConfirmPasswordError('')
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    }
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
	}
    };

    return(
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={firstNameHandler}></input>
                
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={lastNameHandler}></input>
                                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={emailHandler}></input>
                                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={passwordHandler}></input>
                                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={confirmPasswordHandler}></input>
                                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
        </form>
        <div>
            <p>
                First Name: {firstName}
            </p>
            <p>
                Last Name: {lastName}
            </p>
            <p>
                Email: {email}
            </p>
            <p>
                Password: {password}
            </p>
            <p>
                Confirm Password: {confirmPassword} 
            </p>
            <p>
                This works!
            </p>
        </div>
        </>
    )
}
export default More_Form;
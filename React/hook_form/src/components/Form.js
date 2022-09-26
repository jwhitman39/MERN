import { useState } from "react";

const Form = (props) =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    }
    return(
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
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
export default Form
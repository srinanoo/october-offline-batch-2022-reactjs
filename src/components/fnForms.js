import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function FuncForms() {

    const [name, setName] = useState("");
    const oldname = useRef("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const handleForm = () => { // most preferred
        let data = {
            "username": username,
            "password": password
        }
        console.log(data);
    }

    const handleFormRef = () => { // next preferred
        let data = {
            "username": usernameRef.current.value,
            "password": passwordRef.current.value
        }
        console.log(data);
        // axios.get('/', data).then
    }

    const handleFormSubmit = (e) => { // least preferred
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let data = {
            "username": username,
            "password": password
        }
        console.log(data);
    }

    useEffect( () => {
        console.log("useEffect() called");
        oldname.current = name;
    });

    return (
        <>
            {/* <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="button" value="Submit" onClick={handleForm} /><br />

            <hr />

            <input type="text" placeholder="Username" ref={usernameRef} /><br />
            <input type="text" placeholder="Password" ref={passwordRef} /><br />
            <input type="button" value="Submit" onClick={handleFormRef} /><br />

            <hr />

            <form onSubmit={handleFormSubmit}>
                <input type="text" id="username" placeholder="Username" /><br />
                <input type="text" id="password" placeholder="Password" /><br />
                <input type="submit" /><br />
            </form> */}

            <p>Old Name: {oldname.current}</p>
            <p>Name: {name}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            
        </>
    )
}
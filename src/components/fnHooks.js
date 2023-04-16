import { useEffect, useState } from "react";
import axios from "axios";
import "./hook.css";
import colors from "./hook.module.css";

export default function FuncHooks(props) {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [data, setData] = useState("");

    const updateNameState = () => {
        setName("New Name");
    }

    useEffect(() => {
        console.log("useEffect() called for count & name state");
        // fetchData();
        // let timer = setInterval(() => {
        //     axios.get("https://catfact.ninja/fact")
        //     .then(res => {
        //         // console.log(res);
        //         // let output = <><p>Fact: {res.data.fact}</p> <p>Length: {res.data.length}</p></>
        //         if(data !== res.data.fact)
        //             setData(()=> (res.data.fact));
        //     });
        // }, 5000);
        // return () => clearInterval(timer);
    },[]);

    // useEffect(() => {
    //     console.log("useEffect() called for name state");
    // },[name]);

    return (
        <>
            <h2 className="bgPink">This is a function component</h2>
            <div className={colors.bgPurple}>
                ID: {props.id}<br />
                Name: {props.userData.name}<br />
                Title: {props.userData.title}<br />
            </div>

            <p>Count: {count}</p>

            <p><button onClick={() => setCount(1)}>Update Count</button></p>

            <p>Name: {name}</p>
            <p><button onClick={updateNameState}>Update Name</button></p>

            <p>Fact: {data}</p>
        </>
    )
}

// export default FuncHooks;
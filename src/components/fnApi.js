import { useState } from "react";
import axios from "axios";

function FuncAPI() {
    const [data, setData] = useState();

    const showFact = async () => {
        // fetch("https://catfact.ninja/fact")
        //   .then(res => res.json())
        //   .then(data => {
        //     // setData(data)
        //     console.log(data);
        //     let output = <><p>Fact: {data.fact}</p> <p>Length: {data.length}</p></>
        //     setData(output);
        //   })

        // axios.get("https://catfact.ninja/fact")
        //     .then(res => {
        //         console.log(res);
        //         let output = <><p>Fact: {res.data.fact}</p> <p>Length: {res.data.length}</p></>
        //         setData(output);
        //     });

        let res = await axios.get("https://catfact.ninja/fact")
        console.log(res);
        let output = <><p>Fact: {res.data.fact}</p> <p>Length: {res.data.length}</p></>;
        setData(output);
    }

    return (
        <>
            <div>{data}</div>
            <p><button onClick={showFact}>Show Fact</button></p>
        </>
    )
}

export default FuncAPI;
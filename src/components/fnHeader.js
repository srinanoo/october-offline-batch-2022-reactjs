import { useState } from "react";

function FuncHeader(props) {

    const [login, setLogin] = useState("");
    const [userData, setUserData] = useState(props.custom);
    const [name, setName] = useState("Dinesh");

    // const updateLogin = () => {
    //     setLogin(true);
    // }

    // const updateLogout = () => {
    //     setLogin(false);
    // }

    const updateUserData = () => {
        setUserData({
            "id": 2,
            "name": "New Name",
            "title": "New Title",
        });
    }

    const Res = () => {
        if(name)
            return <>OK FROM FUNC</>
        else
            return <>NOT OK FROM FUNC</>
    }
    
    return (

        <>
            {login.toString()}

            <Res />

            {
                name && <>OK</>
            }
            {
                login 
                    ?
                    <>
                        <button onClick={() => setLogin(false)}>Logout</button>
                        <button onClick={updateUserData}>Update User Data</button>
                        <div className="row1">
                            <div className="row1section1">
                                <div>
                                    <img src="images/Dinesh.jpg" alt="" className="logo" />
                                </div>
                                <div>
                                    <h3>{userData.name}</h3>
                                    <div>{userData.id}</div>
                                    <div>{userData.title}</div>
                                    <div>Web Developer</div>
                                    <div>Email Me</div>
                                </div>
                            </div>
                            <div className="row1section2 bg">
                                <div>Projects</div>
                                <div>About Me</div>
                                <div>Contact Me</div>
                            </div>
                        </div>
                    </>
                    :
                    <button onClick={() => setLogin(true)}>Login</button>
            }
            
            
        </>
    )
}

export default FuncHeader;
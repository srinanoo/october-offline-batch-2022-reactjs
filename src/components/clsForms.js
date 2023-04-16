import React from "react";

export default class ClsForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm = () => { // most preferred
        let data = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log(data);
    }

    handleFormSubmit = (e) => { // least preferred
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let data = {
            "username": username,
            "password": password
        }
        console.log(data);
    }

    render() {
        return (
            <>
                <input type="text" placeholder="Username" onChange={(e) => this.setState({"username": e.target.value})} /><br />
                <input type="text" placeholder="Password" onChange={(e) => this.setState({"password": e.target.value})} /><br />
                <input type="button" value="Submit" onClick={this.handleForm} /><br />

                <hr />

                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" id="username" placeholder="Username" /><br />
                    <input type="text" id="password" placeholder="Password" /><br />
                    <input type="submit" /><br />
                </form>
            </>
        )
    }
}
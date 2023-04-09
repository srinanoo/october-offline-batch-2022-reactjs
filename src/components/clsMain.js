import React from "react";

class Main extends React.Component {
    constructor(props){
        super(props);

        console.log(this.props);
        console.log(this.props.data.login)
    }
    render() {
        return (
            <>
                MAIN : {this.props.data.login.toString()}
                <div className="row2">
                    <h3>Projects / Experiences</h3>
                    <div className="row2section1">
                        <div>
                            <img src="images/background.jpeg" alt="" /><br />
                            Project 1<br />
                            Project Description goes here...
                        </div>
                        <div>
                            <img src="images/background.jpeg" alt="" /><br />
                            Project 1<br />
                            Project Description goes here...
                        </div>
                        <div>
                            <img src="images/background.jpeg" alt="" /><br />
                            Project 1<br />
                            Project Description goes here...
                        </div>
                        <div>
                            <img src="images/background.jpeg" alt="" /><br />
                            Project 1<br />
                            Project Description goes here...
                        </div>
                        <div>
                            <img src="images/background.jpeg" alt="" /><br />
                            Project 1<br />
                            Project Description goes here...
                        </div>
                        <div>
                            <img src="images/background.jpeg" alt="" /><br />
                            Project 1<br />
                            Project Description goes here...
                        </div>
                    </div>
                </div>
                <div className="row3">
                    <h3>About Me</h3>
                    <div className="row3section1">
                        <div>
                            <h4>Personal Details</h4>
                            <ul>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Educational Details</h4>
                            <ul>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;
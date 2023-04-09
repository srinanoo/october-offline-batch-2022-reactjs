import React from "react";
import color from '../styles.module.css';

class Header extends React.Component {
    constructor(props) {
        super();

        // this.state = {
        //     "id": "1",
        //     "name": "Name",
        //     "title": "Title",
        // }

        // this.state = {
        //     "login": false
        // }
    }

    // updateChange() {
    //     this.setState(
    //         {
    //             "id": 2,
    //             "name": "Dinesh",
    //             "title": "New Title",
    //         }
    //     );
    // }

    render() {
        return (
            <>
                
                            
                <div className="row1">
                    <div className="row1section1" id={color.bgBlue}>
                        <div>
                            <img src="images/Dinesh.jpg" alt="" className="logo" />
                        </div>
                        <div>
                            <h3 className={color.colorRed}> {this.props.custom}</h3>
                            <div>{this.props.id}</div>
                            <div>{this.props["data-custom"]}</div>
                            <div>Technical Trainer</div>
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
                

                {/* <p>ID: {this.state.id}</p>
                <p>Name: {this.state.name}</p>
                <p>Title: {this.state.title}</p> */}
                {/* <p><button onClick={this.updateChange}>Update State</button></p> */}
                {/* <p><button onClick={() => (this.setState({"id": 2, "name": "New Name"}))}>Update State</button></p> */}
                
            </>
        )
    }
}

export default Header;
import React from "react";

class Main extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let mainData = [
            {
                "img": "images/background.jpeg",
                "title": "Project 1 Title",
                "description": "Project 1 Description goes here..."
            },
            {
                "img": "images/background.jpeg",
                "title": "Project 2 Title",
                "description": "Project 2 Description goes here..."
            },
            {
                "img": "images/background.jpeg",
                "title": "Project 3 Title",
                "description": "Project 3 Description goes here..."
            },
            {
                "img": "images/background.jpeg",
                "title": "Project 4 Title",
                "description": "Project 4 Description goes here..."
            },
            {
                "img": "images/background.jpeg",
                "title": "Project 5 Title",
                "description": "Project 5 Description goes here..."
            },
            {
                "img": "images/background.jpeg",
                "title": "Project 6 Title",
                "description": "Project 6 Description goes here..."
            }
        ]
        return (
            <>
                <div className="row2">
                    <h3>Projects / Experiences</h3>
                    <div className="row2section1">
                        {
                            mainData.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <img src={value.img} alt={value.title} /><br />
                                        {value.title}<br />
                                        {value.description}
                                    </div>
                                )
                            })
                        }
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
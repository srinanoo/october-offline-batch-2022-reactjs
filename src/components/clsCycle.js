import React from "react";
import axios from "axios";

class ClsCycle extends React.Component {
    constructor(props) {
        super(props);

        this.timer = "";

        this.state = {
            name: "Name",
            age: 0,
            menuData: ["Home", "About", "Contact", "Blog"],
            userData: [
                {
                    id: 1,
                    name: "Name1",
                    age: 30
                },
                {
                    id: 2,
                    name: "Name2",
                    age: 20
                },
                {
                    id: 3,
                    name: "Name3",
                    age: 10
                }
            ],
            data: []
        }

        // this.updateMemberVariable = this.updateMemberVariable.bind(this);
    }

    fetchData() {
        axios.get("https://catfact.ninja/fact")
            .then(res => {
                // console.log(res);
                let output = <><p>Fact: {res.data.fact}</p> <p>Length: {res.data.length}</p></>
                // if(output !== this.state.data)
                    this.setState(()=> ({data: output}));
            });
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextState.data !== this.state.data) {
    //         return true;
    //     }
    //     return false;
    // }

    componentDidMount() {
        // console.log(this.state.name, this.state.age, " - componentDidMount");
        this.fetchData();

        // console.log(this.state.menuData);
    }

    // updateMemberVariable() {
    //     this.setState(
    //         {
    //             name: "New Name",
    //             age: 1
    //         }
    //     );
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(prevState.name, prevState.age, " - before");
    //     return "";
    // }

    componentDidUpdate() {
        // console.log(this.state.name, this.state.age, " - after");
        console.log("componentDidUpdate");
        this.timer = setInterval(() => {
            this.fetchData();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let menuoutput = this.state.menuData.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (
            <>
                <p>This is my Class component</p>
                <p>Name: {this.props.name}</p>
                <p>Member Name: {this.state.name}</p>
                <p>Member Age: {this.state.age}</p>
                <p><button onClick={this.updateMemberVariable}>Update Member Variable</button></p>

                <ul className="menu">
                {
                    this.state.menuData.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
                </ul>

                <ul className="menu">
                {menuoutput}
                </ul>

                <div>
                    {
                        this.state.userData.map((item, index) => {
                            return (
                                <div key={index}>
                                    ID: {item.id}<br />
                                    Name: {item.name}<br />
                                    Age: {item.age}
                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    {this.state.data}
                </div>
            </>
        )
    }
}

class ClsCycle1 extends React.Component {
}

class ClsCycle2 extends React.Component {
}

class ClsCycle3 extends React.Component {
}

export default ClsCycle;
export {ClsCycle1, ClsCycle2, ClsCycle3};
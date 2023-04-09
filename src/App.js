// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import './styles.scss';
import Header from './components/clsHeader';
import Main from './components/clsMain';
import Footer from './components/clsFooter';

// function App() {
//   return (
//     <>
//         <Header id="header" data-custom="1000" custom="Dinesh" />
//         <Main />
//         <Footer />
//     </>
//   );
// }

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            "login": false,
            "lists": [1, 2, 3, 4, 5],
            "namesList": ["John", "John Smith", "Mike Smith", "Michael", "Leo"],
            "stylesList": ["div", "p", "h1", "h2", "h3", "h4"],
            "styles": []
        }
    }

    showStyles = () => {
        let stylesLocal = [];
        this.state.stylesList.forEach((v, i) => stylesLocal.push(<div key={i}>{v}</div>));
        this.setState({"styles": stylesLocal});
    }
    render() {
        return (
            <>
                <ul>
                {
                    this.state.lists.map((v, i) => <li key={i}>{v}</li>)
                }
                </ul>

                {
                    this.state.namesList.map((v, i) => <div key={i}>{v}</div>)
                }

                {this.state.styles}
                <p><button onClick={this.showStyles}>Click</button></p>

                <p>Login: {this.state.login.toString()}</p>
                {
                    this.state.login && <>IT IS LOGGED IN</>
                }
                {
                    this.state.login
                        ?
                            <>
                                <p><button onClick={() => (this.setState({"login": false}))}>Logout</button></p>
                                <Header id="header" data-custom="1000" custom="Dinesh" />
                                <Main data={this.state} />
                                <Footer />
                            </>
                        :
                            <p><button onClick={() => (this.setState({"login": true}))}>Login</button></p>
                }
            </>
        );
    }
}

export default App;

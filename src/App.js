// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import './styles.scss';
// import Header from './components/clsHeader';
import Main from './components/clsMain';
import Footer from './components/clsFooter';
import FuncHeader from './components/fnHeader';
import FuncAPI from './components/fnApi';

import ClsCycle, {ClsCycle1, ClsCycle2, ClsCycle3} from './components/clsCycle';
import FuncHooks from './components/fnHooks';

import ClsForms from './components/clsForms';
import FuncForms from './components/fnForms';

// function App() {
//   return (
//     <>
//         <Header id="header" data-custom="1000" custom="Dinesh" />
//         <Main />
//         <Footer />
//     </>
//   );
// }

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             "login": false,
//             "lists": [1, 2, 3, 4, 5],
//             "namesList": ["John", "John Smith", "Mike Smith", "Michael", "Leo"],
//             "stylesList": ["div", "p", "h1", "h2", "h3", "h4"],
//             "styles": []
//         }
//     }

//     showStyles = () => {
//         let stylesLocal = [];
//         this.state.stylesList.forEach((v, i) => stylesLocal.push(<div key={i}>{v}</div>));
//         this.setState({"styles": stylesLocal});
//     }
//     render() {
//         return (
//             <>
//                 <ul>
//                 {
//                     this.state.lists.map((v, i) => <li key={i}>{v}</li>)
//                 }
//                 </ul>

//                 {
//                     this.state.namesList.map((v, i) => <div key={i}>{v}</div>)
//                 }

//                 {this.state.styles}
//                 <p><button onClick={this.showStyles}>Click</button></p>

//                 <p>Login: {this.state.login.toString()}</p>
//                 {
//                     this.state.login && <>IT IS LOGGED IN</>
//                 }
//                 {
//                     this.state.login
//                         ?
//                             <>
//                                 <p><button onClick={() => (this.setState({"login": false}))}>Logout</button></p>
//                                 <Header id="header" data-custom="1000" custom="Dinesh" />
//                                 <Main data={this.state} />
//                                 <Footer />
//                             </>
//                         :
//                             <p><button onClick={() => (this.setState({"login": true}))}>Login</button></p>
//                 }
//             </>
//         );
//     }
// }

// class App extends React.Component {
//     render() {
//         // let obj = {
//         //     "id": 1,
//         //     "name": "Dinesh",
//         //     "title": "Technical Trainer"
//         // }
//         return (
//             <>
//                 <Header custom={obj} />
//                 <Main />
//                 <Footer />
//             </>
//         )
//     }
// }

// function App() {
//     let obj = {
//         "id": 1,
//         "name": "Dinesh",
//         "title": "Technical Trainer"
//     }
//     return (
//         <>
//             <FuncAPI />
//             <FuncHeader custom={obj} />
//             <Main />
//             <Footer />
//         </>
//     )
// }

// class App extends React.Component {
//     constructor() {
//         super();
//     }

//     render() {
//         let obj = {
//             "name": "Dinesh",
//             "title": "Technical Trainer"
//         }
//         return (
//             <>
//                 {/* <ClsCycle name="Dinesh" /> */}
//                 <FuncHooks id="1" userData={obj} />
//             </>
//         )
//     }
// }

function App() {
    const [login, setLogin] = useState(false);

    let obj = {
        "name": "Dinesh",
        "title": "Technical Trainer"
    }
    return (
        <>
            {/* Login: {login.toString()}
            {
                login
                    ?
                    <>
                        <p><button onClick={() => setLogin(false)}>Logout</button></p>
                        <FuncHooks id="1" userData={obj} />
                    </>
                    :
                    <p><button onClick={() => setLogin(true)}>Login</button></p>
            } */}

            {/* <ClsForms /> */}

            <FuncForms />
        </>
    )
}

export default App;

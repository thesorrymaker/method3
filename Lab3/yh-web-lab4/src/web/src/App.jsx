import React from 'react';
import {Provider} from "react-redux";
import {store} from "./redux/attempts/store.js";
import MainPage from "./pages/main/MainPage.jsx";
import {Router, Route, Link} from 'react-router-dom';
import Header from "./components/header/Header.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";


const App = () => {


    return (
        <Provider store={store}>
            <Header/>
            <Router>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Router>
        </Provider>
    );
};

export default App;
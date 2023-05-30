import React from "react";
import ReactDOM from "react-dom"
// ReactDom用于页面渲染
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/App";
//引入插件，在公共目录src下的index.js中进行路由与redux进行连接
import {Provider} from 'react-redux'
import {Store} from "./components/reduxStore/store";

ReactDOM.render(// 用ReactDOM.render来将元素渲染到页面中
    <Provider store={Store}>
         <Router>
                <App/>
         </Router>
    </Provider>,
    document.getElementById("app")
);

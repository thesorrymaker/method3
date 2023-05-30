import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {LoginPage} from "./login/login";
import {Main} from "./main/main";
import {Register} from "./register/register";
class App extends React.Component {
    //将存储到 DOM 容器的根组件呈现出来
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path={"/main"} element={<Main/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                </Routes>
            </div>
        )
    }
}
export default App;
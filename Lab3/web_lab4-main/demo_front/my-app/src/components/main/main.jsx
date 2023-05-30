import {MainForm} from "./mainForm";
import {MainGraph} from "./mainGraph";
import React from "react";
import {Link} from "react-router-dom";
import ResultTable from "./mainTable";
export class Main extends React.Component {
    render() {
        return (
            <div>

                <MainGraph/>
                <MainForm/>
                <Link className={"link"} to={"/"}><button id={"back"} className={"click_button"}>Back</button></Link>
                <ResultTable/>

            </div>
        )
    }
}
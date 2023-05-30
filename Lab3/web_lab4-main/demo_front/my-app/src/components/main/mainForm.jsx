import React from "react";
import $ from "jquery";
import '../../assets/css/addtional.css'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addDot, clearDots, GetR, GetX, GetY} from "../reduxStore/action/action";


//pure ui component,which only deal with view
class CanvasForm extends React.Component{
    render(){
        const { X,Y,R,getX,getY,getR,submitForm} = this.props;
        let username = window.sessionStorage.getItem("username");
        if(username===null||username===""){
            return (<div>Ah,ha. Seems that you try to bypass login</div>);
        }else {
            return (
                <div>
                    <form id={"canvas_form"} role={"form"}>
                        <div className={"form-group"}>
                            <label>
                                choose your x:
                            </label>
                            <div>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(-4)}>-4</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(-3)}>-3</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(-2)}>-2</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(-1)}>-1</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(0)}>0</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(1)}>1</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(2)}>2</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(3)}>3</button>
                                <button type={"button"} name={"X"} className={"X"} onClick={() => getX(4)}>4</button>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <label>
                                input Y:
                            </label>
                            <br/>
                            <div className={"col-xs-10 col-sm-2"}>
                                <input type={"text"} id="y" name={"Y"} className={"form-control"} value={Y} onChange={getY}/>


                            </div>
                        </div>

                        <br/>
                        <div className={"form-group"}>
                            <label>
                                choose your R:
                            </label>
                            <div>
                                <button type={"button"} name={"R"} className={"R"} onClick={() => getR(0)}>0</button>
                                <button type={"button"} name={"R"} className={"R"} onClick={() => getR(1)}>1</button>
                                <button type={"button"} name={"R"} className={"R"} onClick={() => getR(2)}>2</button>
                                <button type={"button"} name={"R"} className={"R"} onClick={() => getR(3)}>3</button>
                                <button type={"button"} name={"R"} className={"R"} onClick={() => getR(4)}>4</button>
                            </div>
                        </div>
                        <div className={"form-group"}>
                            <div id="abc"></div>
                          <button onClick={(event) => submitForm(X, Y, R, event)}>Add</button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

CanvasForm.propTypes = {
    X:PropTypes.number.isRequired,
    Y:PropTypes.string.isRequired,
    R:PropTypes.number.isRequired,
    getX:PropTypes.func.isRequired,
    getY:PropTypes.func.isRequired,
    getR:PropTypes.func.isRequired,
    submitForm:PropTypes.func.isRequired,
}

function mapStateToPros(state){
    return{
        X:state.dot.X,
        Y:state.dot.Y,
        R:state.dot.R,
    }
}
/*function NumericInput(){
    const [value,setValue]=useState('');
    const handleInputChange =(event) =>{
        const inputValue =event.target.value;
        const numValue = inputValue.replace(/[^-0-9]/g, ""); // 先将非数字的字符过滤掉
        const validatedValue = Math.max(Math.min(numValue, 5), -5); // 然后对数值进行限制
        setValue(validatedValue);
    };
    return (
        <input type="text" value={value} onChange={handleInputChange}/>
    )
}*/



function mapDispatchToProps(dispatch){
    return{
        getX:(x)=>dispatch(GetX(x)),
        getR:(r)=>dispatch(GetR(r)),
        getY:(event)=>dispatch(GetY(event.target.value)),
        submitForm:(x,y,r,event)=>{
            event.preventDefault();
            $.ajax({
                url: "api/getDot",
                method:"POST",
                data:{
                    X:x,
                    Y:y,
                    R:r,
                    Password:window.sessionStorage.getItem("password"),
                    Username:window.sessionStorage.getItem("username")
                },
                async:false,
                success:function (res){
                    if(res.wrong) {
                        //alert(res.message);
                        document.getElementById("abc").innerHTML = "y should be between -5 and 5";
                    }else {
                        //dispatch(addDot(res.x,res.y+"",res.r,res.hit,res.date));
                        //alert("x="+res.x+" y="+res.y+" r="+res.r+" hit="+res.hit+" date="+res.date);
                        let listContent = "";
                        dispatch(clearDots());
                        res.dotList.map((ele) => {
                            //listContent = listContent + "\n" + ele.x + ", " + ele.y + ", " + ele.r + ", " + ele.hit + ", " + ele.date;
                            dispatch(addDot(ele.x,ele.y+"",ele.r,ele.hit,ele.date));
                        })
                        //alert(listContent);
                        window.sessionStorage.setItem("list",JSON.stringify(res.dotList));
                    }
                }
            })
        }
    }
}

export const MainForm = connect(mapStateToPros,mapDispatchToProps)(CanvasForm);
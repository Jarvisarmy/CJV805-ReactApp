import React from 'react'
import {useContext} from 'react'
import DataContext from "../context/DataContext";
const Summaryboard = () => {
    const {modal, marks, price, recieved, change, hideModal,recievedAppend, recievedSlice, calculateChange} = useContext(DataContext);
    const totalPrice = marks.length * price;
    return (
        <div className={modal.visible===true ? "summaryboard-container":"hide"}>
            <p className="summary-title"> Cash</p>
            <div className="summaryboard">
                <div className="summary-left">
                
                    <div className="enter-title">
                        <p> ENTER Amount Received</p>
                    </div>
                    <div className="enter-input">

                        <h4 style={{float: "left",paddingRight: "125px"}}> Total: </h4>  <h4>${totalPrice}</h4>
                        <div className="summaryRecieved">
                        <label style={{paddingRight: "100px"}} for="summaryRecieved"> Recieved</label>
                        <input type="text" name="summaryRecieved" value={recieved}></input> <br />
                        </div>
                        <div className="summaryChange">
                        <label style={{paddingRight: "105px"}} for="summaryChange"> Change </label>
                        <input type="text" name="summaryChange" value={change}></input> <br />
                        </div>
                    </div>
                    <div className="enter-buttons">
                        <button onClick={calculateChange}> Confirm </button>
                        <button onClick={hideModal}> Close</button>
                    </div>
                </div>
            <div className="summary-right">
                <button onClick={()=>{
                    recievedAppend("7");
                }}> 7</button>
                <button onClick={()=>{
                    recievedAppend("8");
                }}> 8</button>
                <button onClick={()=>{
                    recievedAppend("9");
                }}> 9</button>
                <button onClick={()=>{
                    recievedAppend("4");
                }}> 4</button>
                <button onClick={()=>{
                    recievedAppend("5");
                }}> 5</button>
                <button onClick={()=>{
                    recievedAppend("6");
                }}> 6</button>
                <button onClick={()=>{
                    recievedAppend("2");
                }}> 1</button>
                <button onClick={()=>{
                    recievedAppend("2");
                }}> 2</button>
                <button onClick={()=>{
                    recievedAppend("3");
                }}> 3</button>
                <button onClick={()=>{
                    recievedAppend("0");
                }}> 0</button>
                <button onClick={()=>{
                    recievedAppend(".");
                }}> .</button>
                <button className="delete-button" onClick={()=>{
                    recievedSlice();
                }}> d</button>
            </div>
        </div>
        </div>
    )
}

export default Summaryboard

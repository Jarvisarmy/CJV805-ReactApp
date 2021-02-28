import React from 'react'
import Button from "./Button.js";
import {useContext} from 'react';
import DataContext from "../context/DataContext";
const Dashboard = () => {
    const {displayModal, clear} = useContext(DataContext);
    var buttons = [];
    for (var i = 1; i <=20; i++) {
        buttons.push(i);
    }
    return (
        <div className="dashboard-container">
            {buttons.map(i => <Button key = {i} val={i}></Button>)}
            <div>
            <button className="dashboard-control-btn" onClick={displayModal}> CASH</button>
            </div>
            <div>
            <button className="dashboard-control-btn" onClick={clear}> CLEAR</button>
            </div>
        </div>
    )
}

export default Dashboard;

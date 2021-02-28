import React from 'react'

import {useContext} from 'react';
import DataContext from "../context/DataContext";
const Button = (props) => {
    const {marks,addMark} = useContext(DataContext);
    const isSelected = () =>{
        const res = marks.filter(el=>el === props.val);
        return res.length > 0;
    }
    const addNewMark = ()=>{
        addMark(props.val);
    }
    return (
            <button className={isSelected() === true ? "selected dashboard-mark-btn" : "dashboard-mark-btn"} type="button" onClick={addNewMark}> {props.val} </button>
    )
}

export default Button

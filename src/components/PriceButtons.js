import React from 'react'
import {useContext} from 'react';
import DataContext from "../context/DataContext";
const PriceButtons = () => {
    const {addPrice} = useContext(DataContext);
    return (
        <div className="pricebuttons-container">
            <button onClick = {()=>{
                addPrice(1);
            }}>$1</button>
            <button onClick = {()=>{
                addPrice(5);
            }}>$5</button>
            <button onClick = {()=>{
                addPrice(10);
            }}>$10</button>
            <button onClick = {()=>{
                addPrice(20);
            }}>$20</button>
                    

        </div>
            
    )
}

export default PriceButtons;
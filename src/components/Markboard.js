import React from 'react'
import {useContext} from 'react';
import DataContext from "../context/DataContext";

const Markboard = () => {
    const {marks,price} = useContext(DataContext);
    const totalPrice = marks.length * price;
    return (
        <div className="markboard-container">
        <div>
            <p> Numbers Selected</p>
            {marks.map((el) => <p key={el}> Mark: {el} </p>)}
        </div>
        <p className="totalPrice"> Total: ${totalPrice}</p>
        </div>
    )
}

export default Markboard;

import React from 'react'
import {useContext} from 'react'
import DataContext from "../context/DataContext";

const Header = () => {
    const {modal} = useContext(DataContext);
    return (
        <div className={modal.visible === true ? "title-container blur" : "title-container"}>
            <h1 className="title"> WHE WHE on D' Avenue</h1>
        </div>
    )
}
export default Header;


import './../css/App.css';
import Header from './Header.js';
import Logo from './Logo.js';
import DataContext from "../context/DataContext";
import Dashboard from "./Dashboard.js";
import Markboard from "./Markboard.js";
import PriceButtons from "./PriceButtons.js";
import Summaryboard from "./Summaryboard.js";
import {useState} from "react";

function App() {
  const [marks, setMarks] = useState([]);
  const [price, setPrice] = useState(0);
  const [modal, setModal] = useState({
    visible: false
  });
  const [recieved, setRecieved] = useState("");
  const [change, setChange] = useState("");
  const recievedAppend = (c) =>{
    setRecieved(recieved+c);
  }
  const recievedSlice = ()=>{
    setRecieved(recieved.slice(0,-1));
  }
  const hideModal = ()=>{
    setModal({
      visible: false
    })
  }

  const displayModal = ()=>{
    setModal({
      visible: true
    })
  }
  const calculateChange = ()=>{
    const res = (parseFloat(recieved).toFixed(2) - marks.length*price).toFixed(2);
    if (Number.isInteger(res)) {
      setChange(res + ".00");
    } else {
      setChange(res.toString());
    }

  }
  const addMark = (mark)=>{
    if (marks.indexOf(mark) !== -1) {
      const newMarks = marks.filter((item)=> item !== mark);
      setMarks(newMarks);
    } else {
      if (marks.length < 5) {
        setMarks([...marks,mark]);
      }
    }
  };
  const addPrice = (amt) =>{
    setPrice(price+amt);
  }
  const clear = ()=>{
    setPrice(0);
    setMarks([]);
  }
  return (
    <div className="App">
      <DataContext.Provider value={{marks, price, modal, recieved, change, 
        addMark, addPrice, hideModal, displayModal, recievedAppend, recievedSlice, calculateChange,clear}}>
        
        <div className={modal.visible === true ? "mainboard blur" : "mainboard"}>
        <Header />
        <div className="leftboard">
          <Logo />
          <PriceButtons />
        </div>
        <Dashboard />
        <Markboard />
        </div>
        <Summaryboard />
      </DataContext.Provider>
      
    </div>
  );
}

export default App;

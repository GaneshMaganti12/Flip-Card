import React, { useState } from "react"
import './App.css';

function App() {

  const [cardTwo, setCardTwo] = useState(false)
  const [cardThree, setCardThree] = useState(false)

  const changeCardTwo = () =>{
    setCardTwo(!cardTwo)
  }

  const changeCardThree = () =>{
    setCardThree(true)
    setTimeout(() => {
      setCardThree(false)
    },1000)
  }

  return (
    <div className="app-container">
      <div className="card-1">
        <div className="front-1"></div>
        <div className="back-1"></div>
      </div>
      <div className={cardTwo? "card-second" :"card-2"} onClick={changeCardTwo}>
        <div className="front-2"><button>Flip to Back</button></div>
        <div className="back-2"><button>Flip to Front</button></div>
      </div>
      <div className={cardThree? "card-3" : "no-flip"} onClick={changeCardThree}>
        <div className="front-3"></div>
        <div className="back-3"></div>
      </div>
    </div>  
  );
}

export default App;

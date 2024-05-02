import React from "react";
import { useState } from "react";



export const Questions = ({ question, answer,}) => {
    const [isOpen, setIsopen] = useState(false)

  const handleToggle = () => {
    setIsopen(!isOpen);
  }
    return (
        <div className="main">
            <div className="question">
            <h4 onClick={handleToggle}>{question}</h4>
            {isOpen ? <img src="icon-minus.svg" /> : <img src="icon-plus.svg" /> }
            </div>
             {isOpen && <p>{answer}</p>}
        </div>

    )
}
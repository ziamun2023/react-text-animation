import React from 'react';

const Animated = (props) => {
    return (
        <div>
           
 <div className='box'><p className={`fade-in ${props.showText ? "visible" : ""}`}>{props.text}</p></div>


    <div className='input'></div>  <input className='input' type="text" onChange={props.handleInputChange} value={props.text} />
      <button onClick={props.handleButtonClick}>Show Text</button> 
        </div>
    );
};

export default Animated;
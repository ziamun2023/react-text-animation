import React from 'react';

const Static = (props) => {
    return (
       
          

<div  className='div'>
<div className='box'><p>{props.showit}</p> </div>

  
<div className='input' >
<input className='input' type="text" onChange={props.onchange} />



<button onClick={props.deleteall}> delete</button>
</div>

</div>


        
    );
};

export default Static;

import './App.css';
import { useState } from 'react';

import Animated from './componenet/Animated'
import Static from './componenet/Static';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1bb1e1b36mshd31180890488798p18a6f6jsn27e5431fe271',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

function App() {

  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
    setShowText(false);
  };

  const handleButtonClick = (event) => {
    setShowText(true);
   console.log(event)
    

  };



  
  const [textinput,settextinput]=useState("")

  const [showit,setShowit]=useState('')

  const onchange=(event)=>{
    

    setShowit(event.target.value)
    
    
  }
  const deleteall=()=>{
    setShowit("")
    
    

    
  }


  return (
    <div  className="App">

                 <Animated handleButtonClick={handleButtonClick} handleInputChange={handleInputChange} 
                  text={text} showText={showText}>

                 </Animated>


          
                 <Static deleteall={deleteall} onchange={onchange}  showit= 
                 {showit}></Static>
     

</div>
  
  );
}

export default App;




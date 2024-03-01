import React, { useState } from 'react';
import './light.css';
function LightDark(props) {

    const [theme,settheme] = useState('dark');
    const [change,setChanged] = useState('hello')
    function changeAquired(e){
       if(e.target.checked){
        settheme('light')
       }
       else{
           settheme('dark')
       }
    }
    function chnagedText(e){
        if(e.target.value = " "){
            setChanged('Value changes bro good bye!!!!')
        }
        else{
            setChanged('Hello again')
        }

    }

    return (
        <>
        <div className={`LightDark ${theme}`}>
        <h1>{change}</h1>
        <button onClick={chnagedText}>click me</button>
        <input type='checkbox' onChange={changeAquired}/>
      </div>
      </>
    );
}

export default LightDark;
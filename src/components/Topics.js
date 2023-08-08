import React from 'react'
import { useState } from 'react'

function Topics() {
    
    const[name, setName] = useState();
    const[count, setCount] = useState(0);
    const[isOn, setIson] = useState(false);
    const[backGroundColor, setBgColor] = useState('white');

    const changeColor = (color) => {
        setBgColor(color);
    }

  return (
    <>
        <div>
            <h1>State Handling- {name}</h1>
            <button onClick={() => setName("Sourav")}>State change button</button>
        </div>

        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>

        <div>
            <h1>Toggle is {isOn ? 'On': 'Off'}</h1>
            {/* {isOn ? 'On': 'Off'}: This is a conditional (ternary) operator. If isOn is true,
            it will render 'On', and if isOn is false, it will render 'Off'. */}
            <button onClick={() => setIson(!isOn)}>Toggle</button>
        </div>

        <div style={{background: backGroundColor}}>
            <h1>Hello</h1>
            <button onClick={() => changeColor('red')}>Red</button>
            <button onClick={() => changeColor('blue')}>blue</button>
            <button onClick={() => changeColor('yellow')}>Yellow</button>
            <button onClick={() => changeColor('green')}>green</button>
        </div>
    </>
  )
}

export default Topics

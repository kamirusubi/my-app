import C from "./choiceButton.js"
import { useState } from 'react';

export default function CheckBox({array}){
    let [arr, setArr] = useState(array.map((elem) => ({name: elem, state: false})))
    return <div className="column">
        {arr.map((elem, index) => (
        <button onClick={() => setArr([...arr.slice(0, index), Object.assign(arr[index], {"name" : elem.name,"state" : !elem.state}), ...arr.slice(index + 1)])} key={index}>
            <C text = {elem.name} isActive={elem.state}/>
        </button>    
        ))}
    </div>
}
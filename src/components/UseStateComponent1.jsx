import {useState} from 'react'

function UseStateComponent1(){
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);

    const increaseValue1 = () => setValue1(value1 + 1);
    const increaseValue2 = () => setValue2(value2 + 1);

    const decreaseValue1 = () => setValue1(value1 - 1);
    const decreaseValue2 = () => setValue2(value2 - 1);

    return (
        <div>
            <h3>Valor 1: {value1}</h3>
            <button onClick={decreaseValue1}>-</button>
            <button onClick={increaseValue1}>+</button>
            <h3>Valor 2: {value2}</h3>
            
            <button onClick={decreaseValue2}>-</button>
            <button onClick={increaseValue2}>+</button>
            <p>Resultado: {value1} * {value2} = {value1 * value2}</p>
        </div>
    )
}

export default UseStateComponent1
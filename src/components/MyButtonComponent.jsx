import {useState} from 'react'

function MyButtonComponent() {
    const [counter, setCounter] = useState(0);

    const addCounterOnCLick = () => setCounter(counter + 1);

    return (
        <button onClick={addCounterOnCLick}>Clicou {counter} vezes </button>
    )
}

export default MyButtonComponent
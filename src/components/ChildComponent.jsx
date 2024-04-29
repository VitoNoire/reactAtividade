// export default function ChildComponent;

function ChildComponent() {
    let count = 0
    const countEvent = () => {
        console.log(count +=1);
    }
    return (
        <>
        <div>
            <button onClick={countEvent}>Clicke se ousar</button>
            <p>{count}</p>
        </div>
        </>
    )   
}

 export default ChildComponent
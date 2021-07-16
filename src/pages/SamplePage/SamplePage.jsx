import React, { useEffect, useState } from 'react'

function SamplePage(){
    const [counter, setCounter] = useState(0)

    const handleButton = () =>{
        setCounter(counter+1)
    }
    
    useEffect(()=>{
        document.title = `You clicked ${counter} times`
    })

    return(
        <React.Fragment>
            <p>You have clicked {counter} times</p>
            <button className="btn btn-primary" onClick={handleButton}>+</button>
        </React.Fragment>
    )
}

export default SamplePage
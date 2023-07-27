import React, { useState } from "react";


const Component2 = ()=>{
    const [isLight, setLight] = useState(false)

    const handleClick = ()=>{
        setLight(!isLight)
    }

    return(
        <>
        <button onClick={handleClick}>
                    <img src={(isLight ? "https://cdn-icons-png.flaticon.com/512/7663/7663735.png":"https://cdn-icons-png.flaticon.com/512/6714/6714978.png")} alt="Icon"></img>
                </button>

            <div>
                <div style={isLight ? { color: 'black' } : { color: 'blueviolet' }}> 
                <h1>Component2</h1>
                </div>
                
            </div>
        </>
    )
}

export default Component2
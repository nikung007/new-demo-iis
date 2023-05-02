import React from 'react'

const Hello = () => {
    const clickToGO = async () => {
        const res = await fetch(`http://nmlocal.host/api/lhost/check`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        const data = await res.json()
        console.log("data", data);
    }
    return (
        <div>
            <button onClick={ clickToGO }>Click to Show</button>
        </div>
    )
}

export default Hello

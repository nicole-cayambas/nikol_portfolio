import React from 'react'
import Window from '../Window'

const Dialog = ({ title, message }) => {
    return (
        <div>
            <Window width="400px" height="200px" >
                <div className="p-[16px]">
                    <h3>{title}</h3>
                    <p>{message}</p>
                </div>
            </Window>
        </div>
        
    )
}

export default Dialog
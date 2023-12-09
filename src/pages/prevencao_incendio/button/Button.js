import React from 'react'
import './Button.css'

const YourComponent = () => {
    const handleClick = () => {
        console.log('Botão clicado!')
    }

    return (
        <div className="wrap">
            <button className="button" onClick={handleClick} style={{ position: 'absolute', bottom: '150px' }}>
                Converse com um engenheiro
            </button>
        </div>
    )
}

export default YourComponent

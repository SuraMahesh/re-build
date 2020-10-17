import React from 'react'
import "./ElectronicsCard.css";

function ElectronicsCard( {src, title, description, price } ) {
    return (
        <div className="card">
            <img src={src} />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
            
        </div>
    )
}

export default ElectronicsCard

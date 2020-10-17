import React from 'react';
import "./PropertyCard.css";

function ProperyCard( {src, title, description} ) {
    return (
        <div className="card">
            <img src={src} />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                
            </div>
            </div>
    )
}

export default ProperyCard

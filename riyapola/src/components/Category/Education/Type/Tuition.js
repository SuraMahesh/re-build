import React from 'react';
import "./Type.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function Tuition() {
    return (
        <div className="educationPage">
        <div className="educationPage__info">
        <Button
            variant="outlined">Price
        </Button>
        <Button
            variant="outlined">Location
        </Button>
        <Button
            variant="outlined">More filter
        </Button>
        </div>
        <SearchResults
            img="https://villasinsrilanka.com/media/cache/images/IMG_1443_EDOSypi/7d74575602394326aeda7b16082a47fe.jpg"
            location="Galle"
            title="Vila"
            description="Beautiful Villa near to Beach in Galle for sale with special offers"
            star={92.73}
            price="7,700,000"
        
        />
    </div>
    )
}

export default Tuition

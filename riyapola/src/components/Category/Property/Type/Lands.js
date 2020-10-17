import React from 'react';
import "./Type.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function Lands() {
    return (
        <div className="propertyPage">
        <div className="propertyPage__info">
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
            img="https://i.ytimg.com/vi/RmISPXl7bYY/maxresdefault.jpg"
            location="Nugegoda"
            title="Store Manager/Full Time"
            description="minimum 3 years of experience in a similar capacity with high level of communication skills.
            Prior experience in working for a retail store overseas, will be an added advantage."
            star={11.73}
            price="8,000,0000"
            

        />

    </div>
    )
}

export default Lands

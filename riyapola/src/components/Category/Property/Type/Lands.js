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
            img="https://www.lankapropertyweb.com/pics/356127/xthumb_424_356127_1596000488_0393.jpg.pagespeed.ic.E50NSxh-8y.jpg"
            location="Nugegoda"
            title="Land For Sale with Coconut field"
            description="contact us on 0789632510"
            star={90.73}
            price="98,000,0000"
            

        />
        <SearchResults
            img="https://cdn.audleytravel.com/1050/750/79/1333687-nuwara-eliya-tea-estate.webp"
            location="Nuwara Eliya"
            title="Tea Estate"
            description="pls contact us - 0779090000"
            star={80.73}
            price="75,000,0000"
            

        />
        <SearchResults
            img="https://www.researchgate.net/profile/Jusop_Shamshuddin/publication/221921465/figure/fig4/AS:305185902612487@1449773397203/A-well-managed-rubber-estate-in-Malaysia-Many-rubber-estates-in-the-country-are-located.png"
            location="Kegalle"
            title="Land with Rubber estate"
            description="Contact us - 076543454"
            star={90.73}
            price="98,000,0000"
            

        />
        

    </div>
    )
}

export default Lands

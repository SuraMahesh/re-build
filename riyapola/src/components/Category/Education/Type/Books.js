import React from 'react';
import "./Type.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function Books() {
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
            img="https://pcmbtoday.com/images/2019_learning-maths_cl7_9789389461695.jpg"
            location="Galle"
            title="Mathematics for grade 7"
            description="We have other books for reference other grades respectively"
            star={92.73}
            price="550 RS"
        
        />
         <SearchResults
            img="https://p1cdn4static.sharpschool.com/UserFiles/Servers/Server_20240639/Image/Alison%20Kaczmarczyk/6th%20science.jpeg"
            location="Colombo"
            title="Science Fiction Book"
            description="For grade 6"
            star={72.73}
            price="650 RS"
        
        />
         <SearchResults
            img="https://sambrannan.scusd.edu/sites/main/files/imagecache/lightbox/main-images/8thhist_0.jpg"
            location="Nugegoda"
            title="History book"
            description="for grade 8"
            star={80.73}
            price="970 RS"
        
        />
    </div>
    )
}

export default Books

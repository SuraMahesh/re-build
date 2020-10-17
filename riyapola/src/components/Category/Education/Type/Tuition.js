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
            img="https://www.uwinnipeg.ca/future-student/images/tuition-fees.jpg"
            location="Colombo"
            title="Business Studies for A level"
            description="Whole class"
            star={92.73}
            price="1200 RS"
        
        />
        <SearchResults
            img="https://jvjijith.files.wordpress.com/2016/02/from-home-tuitions-to-coaching-b-18d17a1751.jpg"
            location="Wennappuwa"
            title="English Tutions for kids"
            description="Primary Students"
            star={82.73}
            price="500 RS"
        
        />
        <SearchResults
            img="https://www.theweek.in/content/dam/week/magazine/the-week/business/images/88VidyaNext.jpg.image.470.274.jpg"
            location="Nugegoda"
            title="Tamil tution"
            description="Tamil Tution classes for Olevel students"
            star={50.73}
            price="750 RS"
        
        />
        <SearchResults
            img="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/07/02/Photos/coaching1-kGUD--621x414@LiveMint.jpg"
            location="Gampaha"
            title="Biology for Alevels"
            description="Whole class"
            star={92.73}
            price="1200 RS"
        
        />
    </div>
    )
}

export default Tuition

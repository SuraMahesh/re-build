import React from 'react';
import "./HandG.css";
import Banner from "./HGBanner"
import { Link } from "react-router-dom";
import Card from "./HGCard";

function HandG() {
    return (
        <div className="HG">
        <Banner />
        <div className="HG__section">
                <Link to="/village">
                <Card 
                src="https://allied-paper.co.uk/wp-content/uploads/2020/03/parttime-1024x512-1.jpg"
                title="Part Time Jobs"
                description="Workers are considered to be part-time if they commonly work fewer than 30 hours per week."
                 />
                </Link>
                <Link to="/mountaint">
                <Card 
                src="https://www.careeraddict.com/uploads/article/3819/user-1823160-2017-03-17-11-05-08.jpg"
                title="Full Time Jobs"
                description="Join togethr to do your best with us."
                />
                </Link>

            </div>
        
    </div>
    )
}

export default HandG

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
                src="https://i.pinimg.com/originals/c0/80/e1/c080e1556f0686f7bbfb6c13ffdcb9da.jpg"
                title="Village Model Houses"
                description="Houses, Villas and Most luxury village model houses are here. "
                 />
                </Link>
                <Link to="/mountaint">
                <Card 
                src="https://www.beautifullife.info/wp-content/uploads/2018/07/20/general.jpg"
                title="Mountain Side Houses with Garden"
                description="Houses, Bunglows and Beautiful Inn for your satisfaction from us"
                />
                </Link>

            </div>
        
    </div>
    )
}

export default HandG

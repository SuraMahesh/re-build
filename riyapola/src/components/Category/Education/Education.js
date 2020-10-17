import React from 'react';
import "./Education.css";
import { Link } from "react-router-dom";
import Banner from "./EBanner";
import Card from "./ECard";

function Education() {
    return (
        <div className="HG">
        <Banner />
        <div className="education__section">
                <Link to="/tuition">
                <Card 
                src="https://i.pinimg.com/originals/c0/80/e1/c080e1556f0686f7bbfb6c13ffdcb9da.jpg"
                title="Village Model Houses"
                description="Houses, Villas and Most luxury village model houses are here. "
                 />
                </Link>
                <Link to="/books">
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

export default Education

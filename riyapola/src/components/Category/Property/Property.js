import React from 'react';
import "./Property.css";
import { Link } from "react-router-dom";
import Banner from "./PBanner";
import Card from "./ProperyCard";

function Property() {
    return (
        <div className="vehicle">
            <Banner />
            <div className="property__section">
                    <Link to="/land">
                    <Card 
                    src="https://www.primelands.lk/resources/834/03.jpg"
                    title="Land Property"
                    description="We present you various types of land properties for sale in different areas. "
                     />
                    </Link>
                    <Link to="/commercial">
                    <Card
                    src="https://www.hill-abbott.co.uk/wp-content/uploads/2019/02/Grey-Commercial-Property-background.png"
                    title="Commercial Property"
                    description="Buildings, Hotels , Land "
                    />
                    </Link>
                </div>
            
        </div>
    )
}

export default Property

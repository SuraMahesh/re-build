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
                    src="https://www.toyota.lk/wp-content/uploads/2018/09/landing.jpg"
                    title="Cars"
                    description="Toyota, Nizzan, BMW, Audi"
                     />
                    </Link>
                    <Link to="/commercial">
                    <Card
                    src="https://storage.googleapis.com/ti-thebikeinsurer/grid-boxes/extra/top-10/main_1441277375.png"
                    title="Motorbikes"
                    description="Pulser, Honda, TVS, Discover"
                    />
                    </Link>
                </div>
            
        </div>
    )
}

export default Property

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
                src="https://www.gstatic.com/bfe/apps/website/img/h/51452684-notebook-1440.jpg"
                title="Tutions"
                description="Tution classes for Grade 6 -11 and for Alevel classes "
                 />
                </Link>
                <Link to="/books">
                <Card 
                src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
                title="Books"
                description="Books for students and teachers are available"
                />
                </Link>

            </div>
        
    </div>
    )
}

export default Education

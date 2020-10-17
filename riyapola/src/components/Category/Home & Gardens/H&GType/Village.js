import React from 'react';
import "./Type.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function Village() {
    return (
        <div className="HGPage">
        <div className="HGPage__info">
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
            img="https://villasinsrilanka.com/media/cache/images/IMG_1443_EDOSypi/7d74575602394326aeda7b16082a47fe.jpg"
            location="Galle"
            title="Vila"
            description="Beautiful Villa near to Beach in Galle for sale with special offers"
            star={92.73}
            price="7,700,000 RS"
        
        />
         <SearchResults
            img="https://cf.bstatic.com/images/hotel/max1280x900/222/222457187.jpg"
            location="Negombo"
            title="Homestay Green Grass Garden"
            description="For rent"
            star={77.77}
            price="9,900,000 RS"
        
        />
         <SearchResults
            img="https://colonialvillasinsrilanka.com/wp-content/uploads/2019/08/055Colonial-Villas-in-Sri-Lanka-Ivory-House.jpg"
            location="Habaraduwa"
            title="Green Villa"
            description="For sale"
            star={88.73}
            price="10,900,000 RS"
        
        />
         <SearchResults
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJUNYE3EjtMuCjkzutjKOsNCog83mta8PiUA&usqp=CAU"
            location="Kurunegala"
            title="Village villa"
            description="For sale"
            star={50.73}
            price="8,900,000 RS"
        
        />
         <SearchResults
            img="https://i6h9d8c7.stackpathcdn.com/wp-content/uploads/2020/08/SL609-11-554x360-c-center.jpeg"
            location="Hikkaduwa"
            title="Village Villa"
            description="For sale"
            star={45.73}
            price="11,900,000 RS"
        
        />
         <SearchResults
            img="https://www.southsrilankaproperty.com/wp-content/uploads/2015/06/paddy-hillside-house-1.jpg"
            location="Kaluthara"
            title="Village Villa "
            description="Village villa near to beautiful paddy field for sale"
            star={40.73}
            price="5,900,000 RS"
        
        />
         <SearchResults
            img="https://i.pinimg.com/originals/58/02/54/5802546776dfd940b7850bfbfd8c4137.jpg"
            location="Mathara"
            title="Garden within the house"
            description="For sale"
            star={39.90}
            price="3,500,000 RS"
        
        />
         <SearchResults
            img="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Fdcbbd4f4-5e9e-11ea-b0ab-339c2307bcd4?fit=scale-down&source=next&width=700"
            location="Colombo"
            title="Top end House"
            description="For Sale"
            star={50.00}
            price="20,900,000 RS"
        
        />
         <SearchResults
            img="https://lankarealestate.com/sale/wp-content/uploads/2020/02/new-build-villa-unawatuna-sri-lanka-for-sale-1_1170x870_acf_cropped.jpg"
            location="Chilaw"
            title="Village Villa "
            description="Village vila with modern architectural design for sale"
            star={90.60}
            price="10,900,000 RS"
        
        />
         <SearchResults
            img="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Fdcbbd4f4-5e9e-11ea-b0ab-339c2307bcd4?fit=scale-down&source=next&width=700"
            location="Negombo"
            title="Luxury House in Negombo"
            description="For sale"
            star={60.73}
            price="25,900,000 RS"
        
        />
    </div>
    )
}

export default Village

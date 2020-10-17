import React from 'react';
import "./Type.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function Commercial() {
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
            img="https://storage.googleapis.com/sambole-old/old-post/2018/03/1cd827ba3d34947ecbc0854484a906da_commercial-properties-1.jpg"
            location="Nugegoda"
            title="Commercial Property for rent"
            description="HIGHLEY COMMERCIAL AREA "
            star={70.73}
            price="65,000,0000"
            

        />
        <SearchResults
            img="https://www.lankapropertyweb.com/pics/336035/thumb_336035_1583158843_3932.jpg"
            location="Kadana"
            title="Property Sale"
            description="No Brokers pls contact us for 0778709201"
            star={11.73}
            price="65,000,0000"
            

        />
        <SearchResults
            img="https://i.ytimg.com/vi/Zt5xmXxDb44/hqdefault.jpg"
            location="Dummalasuriya"
            title="Chicken farm for sale"
            description="Having farm with home in large area"
            star={80.73}
            price="55,000,0000"
            

        />
        <SearchResults
            img="https://lh3.googleusercontent.com/proxy/h7ZXGytSQpP_6UctkvjLrghqlRsi3_e4lUeObJA1CTEfuuDxyrLt2td6YWrKLOk1CtMoK1spcBNheeAL2Qu9HopTdZTH1p-mAbfzZJiC-A"
            location="Negombo"
            title="Hotel for sale"
            description="Hotel with 1300 sqft now for sale pls contact us on 0712347800"
            star={11.73}
            price="67,000,0000"
            

        />
        <SearchResults
            img="https://lh3.googleusercontent.com/proxy/20UP9Lkk7EaSdy0HBeq7YIomoedBmVFwWHNC_QhtVJPTkzvm_7w5pxDU5agvoMZ_hR_NKXugK2AX7uTPo5j5NbycqC9N6-QfjHNJW2a7mPLzBWB3e4Oy5cI"
            location="Wennappuwa"
            title="Pharmacy Property"
            description="near to the Holy Rosary church our pharmacy for sale located and  pls contact us on 0784563281"
            star={11.73}
            price="8,000,0000"
            

        />
        <SearchResults
            img="https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2016/11/yimg_QVRp2L.jpg"
            location="Matale"
            title="restaurant for sale"
            description="Most beautiful place with natural look and pls contact us for futher  details on 0765436280"
            star={11.73}
            price="40,000,0000"
            

        />
        <SearchResults
            img="https://images.adsttc.com/media/images/5bce/594e/f197/cc4d/db00/006a/large_jpg/45210-preview_low_2605-2_45210_sc_v2com.jpg?1540249929"
            location="Colombo"
            title="Building for Sale"
            description="Financial field are most preferred area to used this building "
            star={11.73}
            price="75,000,0000"
            

        />
        <SearchResults
            img="https://www.lankapropertyweb.com/pics/346452/346452_1592109116_2528.jpeg"
            location="NNegombo"
            title="Warehouse for sale"
            description="contact us for futher information - 0765464730"
            star={90.73}
            price="70,000,0000"
            

        />
        <SearchResults
            img="https://images.adsttc.com/media/images/5bbe/b56d/f197/ccec/bc00/019f/newsletter/photo_by_Y.Okamura_21_.jpg?1539224935"
            location="Maharagama"
            title="Story Building for sale"
            description="This building has 3 floors with basement for vehicle parking"
            star={99.73}
            price="95,000,0000"
            

        />
        <SearchResults
            img="https://www.mycolomboproperties.lk/imgs/15670801680.jpg"
            location="Borella"
            title="Commercial Property for Sale"
            description="Contact us - 0709834210"
            star={89.73}
            price="78,000,0000"
            

        />

    </div>
    )
}

export default Commercial

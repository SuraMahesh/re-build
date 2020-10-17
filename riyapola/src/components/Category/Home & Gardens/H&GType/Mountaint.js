import React from 'react';
import "./Type.css";
import { Button } from '@material-ui/core';
import SearchResults from "../SearchResults";

function Mountant() {
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
            img="https://www.lankapropertyweb.com/pics/351767/xthumb_424_351767_1594107901_3656.jpeg.pagespeed.ic.6HzOMTqT3K.jpg"
            location="Nuwara Eliya"
            title="Bungalow"
            description="The largest cottage in Little England for sale"
            star={59.73} 
            price="30,900,000 RS"
            

        />
        <SearchResults
            img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/102180807.jpg?k=62d3aecdae6079308cc40cc0092da46c90b2ad1a64ea41baf19d260bd54221bd&o="
            location=" Bandarawela"
            title="Bunglow"
            description="Luxury Bunglow for sale"
            star={69.73}
            price="40,900,000"
            

        />
        <SearchResults
            img="https://images.flyinstatic.com/ebtranet-images/209247/149426119.jpg"
            location="Matale"
            title="Bunglow"
            description="Lake view cottage bunglow for sale"
            star={70.73}
            price="20,900,000 RS"
            

        />
        <SearchResults
            img="https://hhgolding.com/wp-content/uploads/2018/09/Netherleigh-19.jpg"
            location="Peradeniya"
            title="Bunglow"
            description="Netherleigh Bunglow for sale"
            star={89.73}
            price="10,900,000 RS"
            

        />
        <SearchResults
            img="https://ru.ozohotels.com/-/media/images/thumb-hotels/600x400/ozo/ozo-kandy-sri-lanka.jpg?h=400&iar=0&w=600&hash=8BCF5DAA339D857DA91B5C66DEB82299"
            location="Nuwara Eliya"
            title="bunglow"
            description="Albany Bunglow for sale"
            star={98.73}
            price="25,900,000 RS"
            

        />
        <SearchResults
            img="https://image.flyinstatic.com/f/500x330,q85/http://images.flyinstatic.com/ebtranet-images/209318/0.jpg"
            location="Matale"
            title="Bunglow"
            description="Rosdale bunglow for sale"
            star={66.73}
            price="15,900,000 RS"
            

        />
        <SearchResults
            img="https://lh3.googleusercontent.com/proxy/toy9hJtwillg4WYjRrfMY3wIWO8w7eb_Fsq06P1SfyexlDt78VppBm-mxcXWxC7kF5pV-Kb18l8qsI9laVWAOIrrV2SbPHS4NTZBa1Si5cuEcLsSUI68D_pJlMvgvL3LHxisyEbBmWR4RUdhpnFj1HMLq1poDP94iyuZAlrQd6OPSw"
            location="Kandy"
            title=" Bunglow"
            description="Full Funished Bunglow for sale"
            star={95.68}
            price="35,900,000 RS"
            

        />
        <SearchResults
            img="https://cf.bstatic.com/images/hotel/max1024x768/241/24175739.jpg"
            location="Nuwara Eliya"
            title="Home Inn"
            description="Hevenly Home Inn for sale"
            star={90.09}
            price="45,900,000 RS"
            

        />
        <SearchResults
            img="https://www.revealthecollection.com/stafford-bungalow/wp-content/uploads/sites/23/2020/01/header-mob-3.jpg"
            location="Bandarawela"
            title="Bunglow"
            description="Stafford Banglow for sale"
            star={68.73}
            price="50,900,000 RS"
            

        />
        <SearchResults
            img="https://lh3.googleusercontent.com/proxy/AdP1iaci-fO63jBYEX1vhKuqN6-imw-Ajv4xVXpwG5NYJA4SHPKY5fmkWyeX4Y_7hT7f02k4DYZRbUYHd_K1RtuCGDItwfgYUmDcYP1eELvLa9maE71POjMxMIxKTT5L2VGiAjqjH3DJmsqy_OyfcDCw_HqeVfkwTT3WPLKxcM8vQmm1XOElV-BcgTtb5I9jWie2Yw"
            location="Nuwara Eliya"
            title="Mount Lake Inn"
            description="Mount Lake Inn for sale"
            star={52.72}
            price="50,900,000 RS"
            

        />
    </div>
    )
}

export default Mountant

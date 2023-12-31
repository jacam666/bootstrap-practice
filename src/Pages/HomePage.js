import React from 'react';
import HomePageBanner from '../Images/CarouselfullRange.jpg'
import SncDescriptionImage from '../Images/13759 copy.png'
import AfterTrainImage from '../Images/CarouselAfterTrain.jpg'
import AfterTrainText from '../Images/13759 copy after train.png'
import B4ExtremeImage from '../Images/CarouselB4Extreme.jpg'
import B4ExtremeText from '../Images/13759 copy b4 train.png'
import ProductBanner from '../Images/homepage-snc-display-image2.jpg'
import StageRippedText from '../Images/13759 copy staged ripped.png'

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img
                        src={HomePageBanner}
                        alt="home page banner"
                        className="img-fluid"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <img
                        src={SncDescriptionImage}
                        alt="snc text"
                        className="img-fluid"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <img
                        src={AfterTrainImage}
                        alt="protein"
                        className="img-fluid"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <img
                        src={AfterTrainText}
                        alt="after train text"
                        className="img-fluid"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <img
                        src={B4ExtremeImage}
                        alt="b4 extreme"
                        className="img-fluid"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <img
                        src={B4ExtremeText}
                        alt="b4 train text"
                        className="img-fluid"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <img
                        src={ProductBanner}
                        alt="products"
                        className="img-fluid"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <img
                        src={StageRippedText}
                        alt="stage ripped text"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;

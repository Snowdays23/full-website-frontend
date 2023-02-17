import React, { Component } from 'react';
import bgMountains2 from '../../assets/img/mountains_illustration2_white.svg';
import Two117 from '../../assets/img/sponsorsLogo/currentSponsors/2117.png';
import Carezza from '../../assets/img/sponsorsLogo/currentSponsors/Carezza.png';
import Clipper from '../../assets/img/sponsorsLogo/currentSponsors/Clipper.png';
import Decathlon from '../../assets/img/sponsorsLogo/currentSponsors/Decathlon.png';
import Fischer from '../../assets/img/sponsorsLogo/currentSponsors/Fischer.png';
import FishermansFriend from '../../assets/img/sponsorsLogo/currentSponsors/FishermansFriend.png';
import Forst from '../../assets/img/sponsorsLogo/currentSponsors/Forst.png';
import Fuchs from '../../assets/img/sponsorsLogo/currentSponsors/Fuchs.png';
import Gixeh from '../../assets/img/sponsorsLogo/currentSponsors/Gixeh.png';
import Loaker from '../../assets/img/sponsorsLogo/currentSponsors/Loaker.png';
import Markas from '../../assets/img/sponsorsLogo/currentSponsors/Markas.png';
import Marlene from '../../assets/img/sponsorsLogo/currentSponsors/Marlene.png';
import Muchacho from '../../assets/img/sponsorsLogo/currentSponsors/Muchacho.png';
import OneWay from '../../assets/img/sponsorsLogo/currentSponsors/OneWay.png';
import Pompadour from '../../assets/img/sponsorsLogo/currentSponsors/Pompadour.png';
import Smith from '../../assets/img/sponsorsLogo/currentSponsors/Smith.png';
import Volksbank from '../../assets/img/sponsorsLogo/currentSponsors/Volksbank.png';
import Wuerth from '../../assets/img/sponsorsLogo/currentSponsors/Wuerth.png';

import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";
import "../../assets/css/styleBody4.css";
import img1Redbull from "../../assets/img/previousImg/sponsors/redbull.jpg";
import img2Marlene from "../../assets/img/previousImg/sponsors/marlene.jpg";
import img3Redbull from "../../assets/img/previousImg/sponsors/redbull1.jpg";
import img4Flixbus from "../../assets/img/previousImg/sponsors/flixbus.jpg";
import img5Alpenstoff from "../../assets/img/previousImg/sponsors/alpenstoff.jpg";
import img6Clipper from "../../assets/img/previousImg/sponsors/clipper.jpg";
import SponsorsRoll from './subcomponents/rolling-sponsors';
import ImagesCarousel from './subcomponents/images-carousel';
import Separator from '../subcomponents/separator';

export default class Body4 extends Component {


    render () {
        return (

            <div className='wrapper-outside-body overlay-1 relative offset-up-20 '>
                
                <div className='wrapper-outside-body relative  overlay-1 offset-down-0 mb-5'>

                <div className='d-xs-block d-lg-none'>
                        <Separator number={20} ></Separator>
                </div>


                    <div className='row justify-content-center' >

                        <div className='col-lg-6 col-10'> 

                            <h2 className='title font-josefin '>SPONSORS & PARTNERS</h2>
                            <h5 className='font-poppins normal-text'>we are working with brands like:</h5>

                        </div>

                        <Separator number={10} ></Separator>

                        <div className='col-lg-8 col-10 mt-3'>
                            <div className='my-4'>
                                <SponsorsRoll logos={[Two117, Carezza, Clipper, Decathlon, Fischer, FishermansFriend, Forst, Fuchs, Gixeh, Loaker, Markas, Marlene, Muchacho, OneWay, Pompadour, Smith, Volksbank, Wuerth]}/>
                            </div>
                        </div>
                    </div>

                </div>

                <img src={bgMountains2} className="absolute full-width offset-right-0 offset-up-15"  alt="Stylized mountains"/>    


                <div className='row justify-content-center mt-5 relative m-0'>
                    <div className='col-12'>
                        <div class="mt-5 p-0 w-100">
                            <ImagesCarousel images={[img1Redbull, img2Marlene, img3Redbull, img4Flixbus, img5Alpenstoff, img6Clipper]} intervalMs={4000}/>
                        </div>
                    </div>
                </div>


            </div>
            
        )
    }
}
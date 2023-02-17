import React, { Component } from 'react';
import bgMountains from '../../assets/img/mountains_illustration3.svg';
import instagram from '../../assets/img/socialsLogo/instagram.svg';
import facebook from '../../assets/img/socialsLogo/facebook.svg';
import youtube from '../../assets/img/socialsLogo/youtube.svg';
import tiktok from '../../assets/img/socialsLogo/tiktok.svg';
import linkedin from '../../assets/img/socialsLogo/linkedin.svg';
import bgMountains2 from '../../assets/img/mountains_illustration2.svg'; 
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/styleBody5.css";
import "../../assets/css/style.css";
import ButtonsTable from './subcomponents/buttons-table';
import Separator from '../subcomponents/separator';
import img1Colors from '../../assets/img/previousImg/general/colors.jpg';
import img2Skier from '../../assets/img/previousImg/general/skier.jpg';
import img3Snowparty from '../../assets/img/previousImg/general/snowparty.jpg';
import img4Buffet from '../../assets/img/previousImg/general/buffet.jpg';
import img5Twister from '../../assets/img/previousImg/general/twister.jpg';
import img6Pokal from '../../assets/img/previousImg/general/pokal.jpg';
import img7Yeti from '../../assets/img/previousImg/general/yeti.jpg';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";
import "../../assets/css/styleBody4.css";
import ImagesCarousel from './subcomponents/images-carousel';
import { Footer } from './subcomponents/footer';

export default class Body5 extends Component {
    
    render () {
        return (

            <div>

            

                <div id="wrapper-outside-body-5" className='wrapper-outside-body relative offset-up-20'>

                    <div className='wrapper-outside-body relative overlay-1 full-width'>

                        <div className='d-none d-lg-block'>
                            <div className='relative offset-up-0 light-blue-separator-xs'></div>
                        </div>

                        <div className='d-xs-block d-lg-none'>
                            <div className='relative offset-up-0 light-blue-separator-md'></div>
                        </div>

                        <img src={bgMountains} className = "relative offset-up-1"  alt="Stylized mountains"/>

                        <div className=' absolute full-width offset-down-5 offset-right-0 center ' >
                            
                            <div className='col-10 '>

                                <div className='d-xs-block d-lg-none'>
                                    <Separator number={10} ></Separator>
                                </div>


                                <h2 className='title font-josefin text-white '>MORE IMPRESSIONS</h2>
                                <h5 className='font-poppins normal-text text-white' >from the past years</h5>

                            </div>

                        </div>

                        <div class='row justify-content-center relative offset-up-10 m-0' >
                            <div class='col-12'>
                                <div class="">
                                    <ImagesCarousel images={[img1Colors, img2Skier, img3Snowparty, img4Buffet, img5Twister, img6Pokal, img7Yeti]} intervalMs={4000}/>
                                </div>
                            </div>

                        </div>
                        <Footer version="light_blue" />
                    </div>  


                </div>

                

                </div>

                

            
        )
    }
}
import React, { Component } from 'react';
import Separator from '../subcomponents/separator';
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";  
import "../../assets/css/other-pages-css/styleSustainability.css";
import SpiritImage from "../../assets/img/other-pages/sport/spiritImage.png";
import { Navbar } from '../homepage/subcomponents/navbar';
import { display } from '@mui/system';
import { Footer } from '../homepage/subcomponents/footer';
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



// const SponsorLogo = ({img, link = ""}) => {

// }

// const SponsorChessboard = ({sponsors}) => (

// )

const SponsorLogo = ({image, link}) => (
    <div className = "col-12 col-md-4 p-4" style={{width : "100%"}}>
        <a href={link} target="_blank" ><img  src={image} style={{width: "250px", height: "auto"}} alt="Icon" /></a>
    </div>
)

const SponsorSection = ({title, images, links}) => {
    return (
        <div className='row justify-content-center' style={{width : "80vw"}}  >

            <div>
                <h3 className='text-blue-light font-josefin h3' > {title} </h3>
            </div>

            <div className = 'row justify-content-center' style={{width : "80vw"}} >
                {
                    images.map((sponsor, index) => <SponsorLogo image = {sponsor} link = {links[index]} /> )
                }
            </div>

        </div>
    )
}

 
export const Sponsor = () => {

        return (

            <div className = "wrapper-outside  ">

                <Navbar pageNumberNow={1} />

                <Separator number = {10} />

                <div className='container' >

                    <div className='row justify-content-center' >
                        <div className='col-11 col-lg-12 justify-left-text'  >

                            <h2 className='text-blue-light font-josefin title' >SPONSOR</h2>

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="MAIN SPONSOR" 
                                images = {[Volksbank, Forst, Wuerth]}
                                links={["","",""]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="OFFICIAL SPONSOR" 
                                images = {[Two117, Clipper, Smith, Fischer, Decathlon, Gixeh]}
                                links={["","","","","",""]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="OFFICIAL PARTNER" 
                                images = {[Markas]}
                                links={["",""]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="MAIN PARTNER" 
                                images = {[Carezza]}
                                links={[""]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="SPONSORS" 
                                images = {[Pompadour, Marlene, Fuchs, FishermansFriend, Loaker, OneWay, Muchacho]}
                                links={["","","","","","",""]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="EXCLUSIVE BEVERAGE PARTNER" 
                                images = {[Carezza]}
                                links={[""]} />

                        </div>

                        <Separator number = {3} />


                    </div>

                </div>

                <Separator number = {5} />

                <Footer/>

            </div>
            
            
        )
}
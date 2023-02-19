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
import BeerBaller from '../../assets/img/sponsorsLogo/currentSponsors/beer_baller.png';
import EnterpriseSrl from '../../assets/img/sponsorsLogo/currentSponsors/enterprise_srl.png';
import RedBull from '../../assets/img/sponsorsLogo/currentSponsors/red_bull.png';
import StsSecurity from '../../assets/img/sponsorsLogo/currentSponsors/sts_security.png';



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
                                links={["https://volksbank.onboard.org/jobs/jm2PpqGk/form?show_logo=true&from_career_page=true",
                                "https://www.forst.it/",
                                "https://www.wuerth.it/lavoraconnoi/candidatura-spontanea/"]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="OFFICIAL SPONSOR" 
                                images = {[Two117, Clipper, Smith, Fischer, Decathlon, Gixeh]}
                                links={["https://2117.se/",
                                "https://www.clipperitalia.it/",
                                "https://www.smithoptics.com/",
                                "https://www.fischersports.com/",
                                "https://lavoraconnoi.decathlon-careers.it/it/annonces",
                                "https://www.gizeh-online.com/it/"]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="OFFICIAL PARTNER" 
                                images = {[Markas, StsSecurity]}
                                links={["https://www.markas.com/it/markas-impresa-multiservizi-1.html",
                                "https://www.sts-security.it/"]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="MAIN PARTNER" 
                                images = {[Carezza]}
                                links={["https://carezza.it/it"]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="SPONSORS" 
                                images = {[Pompadour, Marlene, Fuchs, FishermansFriend, BeerBaller, Loaker, RedBull, Muchacho]}
                                links={["https://www.pompadour.it/",
                                "https://www.marlene.it/de/der-apfel-aus-suedtirol.html",
                                "http://www.fuchs-cereals.com/de/information/index.asp",
                                "https://fishermansfriend.com/it-it",
                                "https://en.beerballer.com/",
                                "https://www.loacker.com/int/en/",
                                "https://www.redbull.com/it-it/",
                                "http://www.muchachocondom.com/"]} />

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <SponsorSection title="EXCLUSIVE BEVERAGE PARTNER" 
                                images = {[EnterpriseSrl]}
                                links={["http://enterprisesrl.it/"]} />

                        </div>

                        <Separator number = {3} />


                    </div>

                </div>

                <Separator number = {5} />

                <Footer/>

            </div>
            
            
        )
}
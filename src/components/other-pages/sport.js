import React, { Component } from 'react';
import Separator from '../subcomponents/separator';
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";  
import "../../assets/css/other-pages-css/styleSustainability.css";
import Header from '../homepage/header';
import SeparatorImage from "../../assets/img/other-pages/sustainability/separator.svg";
import BottleIcon from "../../assets/img/other-pages/sustainability/bottleIcon.svg";
import HandshakeIcon from "../../assets/img/other-pages/sustainability/handshakeIcon.svg";
import TruckIcon from "../../assets/img/other-pages/sustainability/truckIcon.svg";
import RecyclingIcon from "../../assets/img/other-pages/sustainability/recyclingIcon.svg";
import SpiritImage from "../../assets/img/other-pages/sport/spiritImage.png";
import MicIcon from "../../assets/img/other-pages/sustainability/micIcon.svg";
import HumanBalilla from "../../assets/img/other-pages/sport/humanBalilla.png";
import SnowVolley from "../../assets/img/other-pages/sport/snowVolley.png";
import SkiRace from "../../assets/img/other-pages/sport/skiRace.png";
import { Navbar } from '../homepage/subcomponents/navbar';
import MountainDivider from "../../assets/img/other-pages/sport/mountainDivider.svg"
import { display } from '@mui/system';
import { Footer } from '../homepage/subcomponents/footer';

const SpiritPart = () => (

    <>

    <Separator number = {3} />

    <div className='row justify-content-center' >

        <div className='col-11 col-lg-12' >

        <p className='text-blue-dark font-poppins mb-3' >
            As you can imagine, Snowdays isn’t just about sports. We are more than thrilled to see how much SPIRIT you will bring to Bozen. The <strong> SPIRIT CUP </strong> is the greatest competition which consists in showing the most united, original and party animal team.
        </p>
        <p className='text-blue-dark font-poppins mb-3' >
            At the basecamp and during the event you will have the chance to collect many points through activities and challenges. The <strong> SPIRIT CUP </strong> is the greatest competition which consists in showing the most united, original and party animal team. Always under the respect of the rules and the common coexistence! The competition will measure the spirit of each team through games, challenges and engagement. 
            For Snowdays 2023 we want you to show us your <strong> REAL SPIRIT </strong>. 
        </p>
        <p className='text-blue-dark font-poppins mb-3' >
            Once you have reached the ski slopes, in addition to the sporting competitions, you will be able to participate in many other competitions and races, which will be crucial in bringing home the Spirit Cup. Some of these activities include <strong> mascot race </strong> , <strong> tug-of-war </strong> , <strong> flunkyball </strong> and be ready to find out more at the event!
        </p>
        <p className='text-blue-dark font-poppins mb-3' >
            The creation of the Real Spirit is something that has as cornerstones the following: respect among each other, stealing other’s Uni items and personal items is something that won’t be tolerated. No matter how well you will be performing in all activities, if you are caught stealing or similar stuff you will be excluded from the Spirit Cup and related things.
        </p>

    </div>

    </div>

    <Separator number = {6} />

    <div className='container' >

        <img  src={SpiritImage} style={{width: "40vw", height: "auto"}} alt="Icon" />

    </div>   

    </>

)

const SportCard = ({image, title, description}) => (
    <div className='row justify-content-center'>

        <div className="col-12">
            <div className='d-none d-sm-block'>
                <img  src={image} style={{width: "17vw", height: "auto"}} className="mb-4" alt="SportImage" />
            </div>

            <div className='d-block d-sm-none'>
                <img  src={image} style={{width: "30vw", height: "auto"}} className="mb-4" alt="SportImage" />
            </div>
        </div>

        <div className='col-11 col-lg-12' >
            <h2 className='text-blue-dark font-josefin mb-4' > {title} </h2>
        </div>

        <div className='col-11 col-lg-12' >

            <p className='text-blue-dark font-poppins mb-4'> {description} </p>
        </div>

    </div>
)

const SportPart = () => (

    <>

    <Separator number = {3} />

    <div className='row justify-content-center' >

        <div className='col-11 col-lg-12' >

        <p className='text-blue-dark font-poppins mb-3' >
            Who says mountains are just about skiing?! Be ready to take part in our amazing sports competitons in the heart of the Dolomites
        </p>
        <p className='text-blue-dark font-poppins mb-3' >
            Snowdays, you have been missed! Finally, after a looong break, you will have the possibility to compete in different sports and try to win the prestigious Sports Cup! At the basecamp we prepared a wide range of activities you will love! We have selected 3 different sports competitions. 
        </p>

    </div>

    </div>

    <Separator number = {6} />

    <div className='container' >

        <div className='row'>

            <div className='col-12 d-block d-sm-none mb-5 '>
                <img  src={MountainDivider}  style={{width: "80%"}} alt="SportImage" />
            </div>

            <div className='col-12 col-sm-4'>

                <SportCard image={HumanBalilla} title="HUMAN BALILLA SOCCER" description="In teams of 6 players you will fight for Sport points for your University. But this is not a normal soccer match; you will be part of the human table soccer, calcetto or Tischfußball."/>
                
            </div>

            <div className='col-12 d-block d-sm-none mt-5 mb-5 '>
                <img  src={MountainDivider}  style={{width: "80%"}} alt="SportImage" />
            </div>

            <div className='col-12 col-sm-4'>

                <SportCard image={SnowVolley} title="SNOWVOLLEY" description="The best volleyball players of each university will compete in teams of 5 against each other on the snow volley fields. Be prepared to kiss the snow by diving for your points."/>
             
            </div>

            <div className='col-12 d-block d-sm-none mt-5 mb-5 '>
                <img  src={MountainDivider}  style={{width: "80%"}} alt="SportImage" />
            </div>

            <div className='col-12 col-sm-4'>

                <SportCard image={SkiRace} title="SKIRACE GIANT SLALOM" description="Ski Races will take place near the basecamp. There will be a male and a female competition. Time counts, the fastest wins the race."/>

            </div>

               

        </div>

    </div>   

    </>

)


export const Sport = () => {

    const [spirit, setSpirit] = React.useState(false);

        return (

            <div className = "wrapper-outside  ">

                <Navbar pageNumberNow={2} />

                <Separator number = {10} />

                <div className='container' >

                    <div className='row justify-content-center' >
                        <div className='col-11 col-lg-12' >

                            <h2 className='text-blue-light font-josefin title' > 
                                <span style = {{cursor: "pointer"}} onClick={() => setSpirit(false)}>
                                    {spirit === true ? <span className='text-grey-light'> SPORT </span> : <span> SPORT </span> }
                                </span>
                                | 
                                <span style = {{cursor: "pointer"}} onClick={() => setSpirit(true)}>
                                    {spirit === false? <span className='text-grey-light'> SPIRIT </span> : <span> SPIRIT </span> }
                                </span>
                            </h2>

                        </div>

                        {
                            spirit ? 
                            <SpiritPart /> :
                            <SportPart />
                        }

                    </div>

                </div>

                

                <Separator number = {5} />

                <Footer />

            </div>
            
            
    )
}

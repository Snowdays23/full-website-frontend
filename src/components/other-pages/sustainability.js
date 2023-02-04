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
import MicIcon from "../../assets/img/other-pages/sustainability/micIcon.svg";
import { Navbar } from '../homepage/subcomponents/navbar';
import { display } from '@mui/system';

const SustainabilityCell = ({icon, text}) => (

    <div className='row' style={{display: "flex", alignItems: "center"}} >

        <div className='col-5'>

            <img  src={icon} style={{width: "8vw", height: "auto"}} alt="Picture of mountains" />
            
        </div>

        <div className='col-7 justify-left-text'>

            <h4 className='text-blue-dark  font-poppins h4' > <strong> {text} </strong></h4>
            
        </div>

    </div>

)

const SustainabilityDoubleRow = ({icon1, icon2, text1, text2}) => (

    <>
        <div className='row justify-content-left mb-5' >

            <div className='col-8 col-md-12'>

                <img  src={SeparatorImage}  alt="Picture of mountains" />
                
            </div>

        </div>

        <div className='row justify-content-center mb-5' >

            <div className='col-5'>

                <SustainabilityCell icon={icon1} text={text1} />
                
            </div>

            <div className='col-1' />

            <div className='col-5'>

                <SustainabilityCell icon={icon2} text={text2} />
                
            </div>

        </div>
    </>

)

const SustainabilitySingleRow = ({icon, text}) => (

    <>
        <div className='row mb-5' >

            <div className='col-12'>

                <img  src={SeparatorImage}  alt="Picture of mountains" />
                
            </div>

        </div>

        <div className='row justify-content-center mb-5' >

            <div className='col-10'>

                <SustainabilityCell icon={icon} text={text} />
                
            </div>

        </div>
    </>

)
 
export default class Sustainability extends Component {
    render () {
        return (

            <div className = "wrapper-outside  ">

                <Navbar pageNumberNow={3} />

                <Separator number = {10} />

                <div className='container' >

                    <div className='row justify-content-center' >
                        <div className='col-11 col-md-12 justify-left-text' >

                            <h2 className='text-blue-light font-josefin title' >SUSTAINABILITY</h2>

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <div className='col-5 col-md-6 justify-left-text'>
                                <p className='font-poppins'>
                                    This year we want to take a more sustainable view of the whole event: after 20 years of Snowdays it is important to reflect on what has been, and what will become. It is our goal to ecologically improve our sports event. Such a large event can hardly achieve zero impact on the environment, nevertheless, nothing prohibits us from taking some steps toward a more sustainable event.
                                </p>
                            </div> 

                            <div className='col-5 col-md-6 justify-left-text'>
                                <p className='font-poppins'>
                                We rely on the transparency and support of our partners in agreeing with us on sustainable practices. We can improve a number of aspects to respect the Alpine ecosystem and decrease our impact on it. 
We are keen to use the media power of Snowdays to shed light on issues that are increasingly urgent to be addressed nowadays.
                                </p>
                            </div> 

                        </div>

                    </div>

                </div>

                <Separator number = {6} />

                <div className='container' >

                    <div className='row justify-content-center' >
                        <div className='col-12' >

                            <h4 className='text-blue-light font-josefin subtitle' >MAIN GOALS</h4>

                        </div>

                    </div>

                    <Separator number = {3} />

                    <SustainabilityDoubleRow icon1 = {BottleIcon} icon2 = {HandshakeIcon} text1 = {"reduce the use of plastic"} text2 = {"collaboration with local partners and institutions"}/>

                    <SustainabilityDoubleRow icon1 = {TruckIcon} icon2 = {RecyclingIcon} text1 = {"food from transparent sources"} text2 = {"careful waste disposal"}/>

                    <SustainabilitySingleRow icon = {MicIcon} text={"organizing talks in collaboration with organizations that deal with issues concerning sustainability and the preservation of the mountain ecosystem"} />

                </div>   

                <Separator number = {15} />

            </div>
            
            
        )
    }
}
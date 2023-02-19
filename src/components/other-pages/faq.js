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
import { Footer } from '../homepage/subcomponents/footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { FemaleSharp } from '@mui/icons-material';

const SubParagraph = ({title, content}) => (
    <>

        <p className='text-blue-dark font-poppins font-weight-bold font-italic normal-small-text'>
            {title}
        </p>
        <p className='font-poppins text-blue-dark'>
            {content}
        </p>

    </>
)

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const CompleteParagraph = ({mainTitle, titles, contents}) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const visibility = windowDimensions.width < 992 ? false : true;

    const [visibleContent, setVisibleContent] = useState(visibility);

    const result = titles.map((title, index) => (
        <SubParagraph title = {title} content = {contents[index]} />
    ))
    
    return( 
        <>
            <div >
                <h3 className='text-blue-light font-josefin subtitle' style={{display:"inline-block"}} > {mainTitle}</h3>
                <span className='text-blue-light font-josefin' style = {{cursor: "pointer"}} onClick={() => setVisibleContent(!visibleContent)}> {
                    !visibleContent ? 
                    <KeyboardArrowUpIcon style= {{fontSize : "2em"}} />
                    : 
                    <KeyboardArrowDownIcon style= {{fontSize : "2em"}}/>
                }  </span>
            </div>
            { visibleContent ? 
            result : <></>} 
        </>
    )

}
 
export default class FAQ extends Component {
    render () {
        return (

            <div className = "wrapper-outside  ">

                <Navbar pageNumberNow={4} />

                <Separator number = {10} />

                <div className='container' >

                    <div className='row justify-content-center' >
                        <div className='col-11 col-lg-12 justify-left-text' >

                            <h2 className='text-blue-light font-josefin title' >FAQ</h2>

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <div className='col-10 col-lg-6 justify-left-text ' style={{width: "80vw"}}>
                                <CompleteParagraph mainTitle={"GENERAL"} 
                                    titles={["Where will Snowdays23 take place?",
                                            "When will Snowdays23 take place?",
                                            "What does the event program/schedule look like?",
                                            "What is being done to make the event as sustainable as possible?"]} 
                                    contents={["Snowdays23 will take place in the Autonomous Province of Bolzano - South Tyrol. The “base” of the event and all accommodation will be in the city of Bozen-Bolzano. During the day, there will be bus transfers to one of the selected ski areas in the region, exactly which ski area will be announced. In the evening, there will be transfers to the selected club/ party venues. ",
                                                "Snowdays23 will take place from the 23rd until the 26th of February, 2023. ",
                                                `Day one: check-in of external universities and arrival at their hosts (unibz students who host the participants for the duration of the event). In the evening there is dinner, the event's opening ceremony, and the first party. 
                                                Day two: breakfast at the university and immediately afterwards departure for the ski location. There there will be activities at the basecamp such as: sports competitions, live music, entertainment, and similar. In the evening there will be dinner and the second party (at a different location than the ski resort). 
                                                Day three: breakfast at the university again and departure for the ski location. At the end of the day there will be a closing ceremony and the awarding of various prizes based on the results of the sports competitions. Finally, there will be the event's closing party.
                                                `,
                                                "Sustainability is a very important element to the 2023 edition of Snowdays. As these activities have inherently negative environmental consequences, we are doing everything in our power to be as environmentally-friendly as possible, when possible. For example, our Catering team is aiming to source all food from local providers, and the Sponsor team is aiming to work with companies that have strong values regarding sustainability. Each team is doing its part in making choices that will help make Snowdays23 a bit more green. "
                                                ]} 
                                />
                                <CompleteParagraph mainTitle={"PARTICIPANTS"} 
                                    titles={["How do I apply to participate?",
                                            "Who is the event for?",
                                            "What are the business opportunities?"]} 
                                    contents={["Snowdays23 is an invite-only event. External universities will receive an official invitation by email indicating the amount of participants allotted as well as many other necessary information. Ticket sales to unibz students are open, students should follow the link that they received to their student email address, and the unibz alumni association has communicated how to apply. ",
                                                "The event is for business students from universities all over Europe. ",
                                            "At Snowdays, there will be unique opportunities to network and connect with local and international companies. Since the participants represent a highly visible target group, brands from various sectors can benefit from the connections made at the event. Some brands will set up stands that offer interactive games to welcome the participants and to help them get to know the company better, whereas others will have the chance to give a small presentation about the company and its career opportunities. "]} 
                                />
                                <CompleteParagraph mainTitle={"TICKETS"} 
                                    titles={["What is included in the ticket price?",
                                            "Are refunds or name changes possible in case I cannot attend the event?",
                                            "Is there any additional merchandise available?"]} 
                                    contents={["Included in the ticket price is 2 days of skiing, entry to all 3 of the parties, breakfast and lunch, assorted gadgets, discounts on rentals, and the best weekend of your life!",
                                                "Yes, refunds will only happen if there is a name change. Name changes are permitted until the 6th of February. There is a €20 fee for name changes made after the 6th of February.",
                                            "Yes! We are proud to introduce merchandise for the first time in this edition of Snowdays. The merchandise store will be available at unibz starting from the 6th of February. There will also be the opportunity to buy it directly at the event."]} 
                                />
                            </div> 

                            <div className='col-10  col-lg-6 justify-left-text'>
                                <CompleteParagraph mainTitle={"ACTIVITIES"} 
                                        titles={["Is it true I am not allowed to have any alcohol while on the slopes?",
                                                "Is there something to do other than skiing?",
                                                "I have special dietary requirements; can these be accommodated?"]} 
                                        contents={["Yes, this is true. By Italian law, skiing and snowboarding are equated to driving, therefore it is forbidden to have more than 0,5 grams/liter of alcohol in the blood. This is according to Italian Legislative Decree 40/2021. The penalty for having between 0,5 and 0,8 grams/liter of alcohol in the blood is punished by severe penalties and high fines, and if it is above 0,8 grams/liter, then it becomes a crime. ",
                                                    "Yes, of course! There will be a base camp set up on the slopes that will offer other activities including competitive sports, spirit competitions, music, and other non-competitive activities. ",
                                                    "Yes, with proper advance notice, we will have meals available to accommodate certain dietary restrictions. Please indicate this in the enrollment form."
                                                    ]} 
                                    />
                                <CompleteParagraph mainTitle={"TEAM/HELPERS"} 
                                    titles={["Who organizes the event?",
                                            "I’m from unibz and I want to help organize the event, where do I apply?"]} 
                                    contents={["Snowdays is organized by a group of 32 people, split into 9 different teams to organize different aspects of the event. It is entirely composed of students, who all share a common passion to create an unforgettable event for all participants and other actors. ",
                                                "We will make a call for helpers shortly! Such a huge event requires lots of helpers, and we will be relying on you, of course reward included!"
                                            ]} 
                                />
                                <CompleteParagraph mainTitle={"PREPARATION"} 
                                    titles={["Do I need to have my own gear?",
                                            "What should I bring with me?",
                                            "What is the accommodation?",
                                            "How do I get to the event?"]} 
                                    contents={["Nope! If you don’t have your own skiing/snowboarding equipment, we will arrange rentals for you.",
                                                "We will send a survival guide closer to the event, but in general: equipment (if you have it); skiing clothes; proper shoes; clothes to match the themed parties; sleeping mat and sleeping bag; toiletries; towel; sleeping clothes; socks; underwear; wallet; documents- passport, residence card, vaccination certificate; and any necessary medications. ",
                                                "External participants will be hosted by unibz students. These students are welcoming you to their home, therefore it is expected that you treat them and their space with respect. There is also the chance that a number of students will be accommodated in gyms, where there is proper space and facilities to host a large number of participants. More information about the arrangements will be communicated before the event. ",
                                                "Each university is responsible for arranging their own transportation to the event. The meeting point will be in Bozen-Bolzano, more detailed instructions for arrival and check-in will be shared closer to the event"
                                            ]} 
                                />
                            </div> 

                        </div>

                    </div>

                </div>

                <Separator number = {5} />

                <Footer/>

            </div>
            
            
        )
    }
}
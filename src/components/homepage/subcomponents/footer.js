
import FooterPayoff from "../../../assets/img/footer/footerBandPayoff.svg";
import FooterBottom from "../../../assets/img/footer/bottomFooter.svg";
import FooterLogo from "../../../assets/img/footer/footerLogo.svg";
import InstagramLogo from "../../../assets/img/socialsLogo/instagram.svg";
import FacebookLogo from "../../../assets/img/socialsLogo/facebook.svg";
import TiktokLogo from "../../../assets/img/socialsLogo/tiktok.svg";
import YoutubeLogo from "../../../assets/img/socialsLogo/youtube.svg";
import LinkedinLogo from  "../../../assets/img/socialsLogo/linkedin.svg";


const SocialButton = ({img, link}) => (
    <a href={link} target="_blank"> <img src = {img} style={{width : "2vw", height: "auto"}}/> </a>
)

const FooterInfo = () => (
    <div style = {{width: "100vw", height: "auto", zIndex: 1, position: "relative"}}>
        
        <div style = {{position : "absolute", width: "100vw"}} className="offset-down-3 full-width" >

            <div className=" " style={{display: "flex", alignItems: "center", height : "10vw", width: "100vw"}}>

                <div className = "row justify-content-center" style={{display: "flex", alignItems: "center", width: "100vw"}}>

                    <div className = "col-4" style={{paddingLeft: 40}} >
                        <div className="row" style={{display: "flex", alignItems: "center", marginLeft : 10}}>

                            <div className="col-2">
                                <img src={FooterLogo} style = {{width : "5vw", height: "auto"}} />

                            </div>

                            <div className="col-10">
                                <div className = "row justify-content-center">
                                    <p className="font-poppins text-white">
                                        © Copyright 2022 Snowdays. All Rights Reserved
                                    </p>
                                    <p className="font-poppins text-white">
                                        <span>Terms & Conditions</span> <span>Privacy Policy</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-2"></div>

                    <div className = "col-5" style={{paddingLeft: 40}}>

                        <div className="row justify-content-center" style={{marginLeft : 10, marginRight : 10}} >

                            <div className="col-5">

                                <h1 className = "font-poppint text-white fw-bold small-text">CONTACT US</h1>
                                <p className = "font-poppint text-white fw-bold " >
                                        info@snowdays.it
                                </p>

                            </div>

                            <div className="col-7" >

                                <h1 className = "font-poppint text-white fw-bold small-text">FOLLOW US</h1>
                                <p className = "font-poppint text-white fw-bold " >
                                        {/* {
                                            social = [{img : InstagramLogo, link : "https://www.instagram.com/snowdays.bolzano/"}];

                                            social.map((soc) => (<SocialButton img = {soc.img} link = {soc.link} />));
                                        } */}
                                        <SocialButton img = {InstagramLogo} link = {"https://www.instagram.com/snowdays.bolzano/"} />
                                        <SocialButton img = {FacebookLogo} link = {"https://www.facebook.com/Snowdays.Bolzano/"} />
                                        <SocialButton img = {LinkedinLogo} link = {"https://www.linkedin.com/company/snowdays"} />
                                        <SocialButton img = {TiktokLogo} link = { "https://www.tiktok.com/@snowdays.bz"} />
                                        <SocialButton img = {YoutubeLogo} link = {"https://www.youtube.com/channel/UCthdDzE2fTo47z26YIDDf-g"} />

                                </p>

                            </div>
                        </div>
                        
                    </div>



                </div>


            </div>

        </div>
        <img src={FooterBottom} style = {{width: "100vw", height: "auto", zIndex: -1, position: "relative"}} />

    </div>
)

export const Footer = () => (
    <div>
        <img src={FooterPayoff} style = {{width: "100vw", height: "auto", position: "relative"}} className = "offset-down-3" />
        <FooterInfo />
    </div>
)
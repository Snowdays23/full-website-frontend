
import FooterPayoff from "../../../assets/img/footer/footerBandPayoff.svg";
import FooterPayoff2 from "../../../assets/img/footer/footerBandPayoffBlue.svg";
import FooterBottom from "../../../assets/img/footer/bottomFooter.svg";
import FooterBottomCell from "../../../assets/img/footer/bottomFooterCell.svg";
import FooterLogo from "../../../assets/img/footer/footerLogo.svg";
import InstagramLogo from "../../../assets/img/socialsLogo/instagram.svg";
import FacebookLogo from "../../../assets/img/socialsLogo/facebook.svg";
import TiktokLogo from "../../../assets/img/socialsLogo/tiktok.svg";
import YoutubeLogo from "../../../assets/img/socialsLogo/youtube.svg";
import LinkedinLogo from  "../../../assets/img/socialsLogo/linkedin.svg";
import TermsAndCondition from "../../../assets/docs/TermsAndConditions.pdf";
import PrivacyPolicy from "../../../assets/docs/PrivacyPolicy.pdf";
import FooterSeparator from "../../../assets/img/footer/footerSeparator.svg";


const SocialButton = ({img, link, size}) => (
    
    <a href={link} target="_blank"> <img src = {img} style={{width : `${size}vw`, height: "auto"}}/> </a>
)

const FooterCell = () => (
    <div style = {{position : "absolute", width: "100vw"}} className="offset-down-3 full-width" >

            <div className=" " >

                <div className = "row justify-content-start pt-4" >

                    <div className = "col-12" style={{paddingLeft: 0}}>

                        <div className="row justify-content-start" style={{marginLeft : 10, marginRight : 10}} >

                            <div className="col-7" >

                                <h1 className = "font-josefin text-white fw-bold  small-text">FOLLOW US</h1>
                                <p className = "font-poppins text-white fw-bold " >

                                        <SocialButton size={7} img = {InstagramLogo} link = {"https://www.instagram.com/snowdays.bolzano/"} />
                                        <SocialButton size={7} img = {FacebookLogo} link = {"https://www.facebook.com/Snowdays.Bolzano/"} />
                                        <SocialButton size={7} img = {LinkedinLogo} link = {"https://www.linkedin.com/company/snowdays"} />
                                        <SocialButton size={7} img = {TiktokLogo} link = { "https://www.tiktok.com/@snowdays.bz"} />
                                        <SocialButton size={7} img = {YoutubeLogo} link = {"https://www.youtube.com/channel/UCthdDzE2fTo47z26YIDDf-g"} />

                                </p>

                            </div>

                            <div className="col-5">

                                <h1 className = "font-josefin text-white fw-bold small-text">CONTACT US</h1>
                                <p className = "font-poppins text-white fw-bold small-text" >
                                        info@snowdays.it
                                </p>

                            </div>

                            
                        </div>

                    </div>

                    <div className="row justify-content-center  mb-3">
                        <img src = {FooterSeparator} style={{width: "70%"}} />  
                    </div>

                    <div className = "col-12" style={{paddingLeft: 0}}>

                        <div className="row justify-content-start mb-3" style={{marginLeft : 10, marginRight : 10}} >

                            <div className="col-3" >

                                <img src={FooterLogo} style = {{width : "10vw", height: "auto"}} />

                            </div>

                            <div className="col-9">
                            </div>

                            
                        </div>

                        

                        <div className="row justify-content-start" style={{marginLeft : 10, marginRight : 10}} >

                            <div className="col-11" >

                                <p className="font-poppins text-white small-text">
                                    © Copyright 2022 Snowdays. All Rights Reserved
                                </p>

                            </div>

                            <div className="col-1">
                            </div>

                            
                        </div>

                        <div className="row justify-content-start" style={{marginLeft : 10, marginRight : 10}} >

                            <div className="col-9" >

                                <p className="font-poppins text-white small-text">
                                    <a href={TermsAndCondition} target="_blank" className="text-white "> <u>Terms & Conditions</u></a> &nbsp; &nbsp; <a href={PrivacyPolicy} target="_blank" className="text-white"><u>Privacy Policy</u></a>
                                </p>

                            </div>

                            <div className="col-3">
                            </div>


                        </div>

                        

                    </div>

                </div>


            </div>

        </div>
)

const FooterPC = () => (
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
                                    <p className="font-poppins text-white small-small-text">
                                        © Copyright 2022 Snowdays. All Rights Reserved
                                    </p>
                                    <p className="font-poppins text-white small-small-text">
                                        <a href={TermsAndCondition} target="_blank" className="text-white "> <u>Terms & Conditions</u></a> &nbsp; &nbsp; <a href={PrivacyPolicy} target="_blank" className="text-white"><u>Privacy Policy</u></a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-2"></div>

                    <div className = "col-5" style={{paddingLeft: 40}}>

                        <div className="row justify-content-center" style={{marginLeft : 10, marginRight : 10}} >

                            <div className="col-5">

                                <h1 className = "font-josefin text-white fw-bold small-small-text">CONTACT US</h1>
                                <p className = "font-poppins text-white fw-bold small-small-text" >
                                        info@snowdays.it
                                </p>

                            </div>

                            <div className="col-7" >

                                <h1 className = "font-josefin text-white fw-bold  small-small-text">FOLLOW US</h1>
                                <p className = "font-poppins text-white fw-bold " >

                                        <SocialButton img = {InstagramLogo} size={2} link = {"https://www.instagram.com/snowdays.bolzano/"} />
                                        <SocialButton img = {FacebookLogo} size={2} link = {"https://www.facebook.com/Snowdays.Bolzano/"} />
                                        <SocialButton img = {LinkedinLogo} size={2} link = {"https://www.linkedin.com/company/snowdays"} />
                                        <SocialButton img = {TiktokLogo} size={2} link = { "https://www.tiktok.com/@snowdays.bz"} />
                                        <SocialButton img = {YoutubeLogo} size={2} link = {"https://www.youtube.com/channel/UCthdDzE2fTo47z26YIDDf-g"} />

                                </p>

                            </div>
                        </div>
                        
                    </div>



                </div>


            </div>

        </div>
)

const FooterInfo = () => (
    <div style = {{width: "100vw", height: "auto", zIndex: 1, position: "relative"}}>
        
        <div className="d-none d-md-block">
            <FooterPC />
        </div>

        <div className="d-block d-md-none">
            <FooterCell />
        </div>
        
        <div className="d-none d-md-block">
            <img src={FooterBottom} style = {{width: "100vw", height: "auto", zIndex: -1, position: "relative"}} />
        </div>
        <div className="d-block d-md-none">
            <img src={FooterBottomCell} style = {{width: "100vw", height: "auto", zIndex: -1, position: "relative"}} />
        </div>

    </div>
)

export const Footer = ({version}) => (
    <div>
        {
            version === "light_blue" ?
            <img src={FooterPayoff2} style = {{width: "100vw", height: "auto", position: "relative"}} className = "offset-down-3" />
            : 
            <img src={FooterPayoff} style = {{width: "100vw", height: "auto", position: "relative"}} className = "offset-down-3" />
        }
        <FooterInfo />
    </div>
)
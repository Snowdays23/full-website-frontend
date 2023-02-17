import React, { Component } from 'react';
import bgMountains from '../../assets/img/mountains_illustration2.svg';
import LogosTable from './subcomponents/logos-table';
// import Bocconi from '../../assets/img/participantsLogo/Bocconi.png';
// import ESB from '../../assets/img/participantsLogo/ESB.png';
// import FS from '../../assets/img/participantsLogo/Frankfurt_School.png';
// import Maastricht from '../../assets/img/participantsLogo/Maastricht_University.png';
// import NOVA from '../../assets/img/participantsLogo/NOVA.png';
// import TUM from '../../assets/img/participantsLogo/TUM.png';
// import UNITN from '../../assets/img/participantsLogo/UNITN.png';
// import WHU from '../../assets/img/participantsLogo/WHU.png';
import ZU from '../../assets/img/participantsLogo/current/image.png';
import WHU from '../../assets/img/participantsLogo/current/WHU_Logo_RGB_White_Screen.png';
import Unitn from '../../assets/img/participantsLogo/current/UNITN_Logo.png';
import Unibz from '../../assets/img/participantsLogo/current/LOGO_UNIBZ_logo white.png';
import TUM from '../../assets/img/participantsLogo/current/TUM_Logo_weiá.png';
import NovaSBE from '../../assets/img/participantsLogo/current/Nova_Logo.png';
import Nak from '../../assets/img/participantsLogo/current/Nordakademie_Logo.png';
import Maastricht from '../../assets/img/participantsLogo/current/UM_University_Mastricht_Logo.png';
import LMU from '../../assets/img/participantsLogo/current/LMU_Logo.png';
import HSBA from '../../assets/img/participantsLogo/current/HSBA_Logo.png';
import FS from '../../assets/img/participantsLogo/current/Frankfurt_School_Logo.png';
import ESB from '../../assets/img/participantsLogo/current/ESB_Logo.png';
import EBS from '../../assets/img/participantsLogo/current/EBS_University_White_ZF.png';
import Alumni from '../../assets/img/participantsLogo/current/Alumni_Bauzanensis_Logo.png';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";
import "../../assets/css/styleBody3.css";
import Separator from '../subcomponents/separator';
export default class Body3 extends Component {


    render () {
        return (

            <div className = "wrapper-outside-body-blue relative offset-up-20">
                <img src={bgMountains} className='relative offset-up-15'  alt="Stylized mountains"/>

                <div className=' absolute  overlay-1 offset-up-0 offset-right-0 full-width wrapper-outside-body-blue pb-15'>

                    <div className='d-xs-block d-lg-none'>
                            <Separator number={15} ></Separator>
                    </div>


                    <div className='row justify-content-center'>

                        <div className='col-lg-6 col-10'>

                            <h2 className='h2 font-josefin title text-white'>PARTICIPANTS</h2>
                            <h5 className='font-poppins normal-text text-white'>participating Business Schools & Universities from this edition</h5>

                        </div>

                    </div>

                    <Separator number={6} />

                    <div className='row justify-content-center'>

                        <div className='col-10 mt-5'>
                                    <LogosTable logos = {[ZU, WHU, Unitn, Unibz, TUM, NovaSBE, Nak, Maastricht, LMU, HSBA, FS, ESB, EBS, Alumni]}></LogosTable>

                        </div>

                    </div>

                    {/* <Separator number={16} /> */}
     

                </div>

                <Separator number={25} />
{/* 
                <div className='d-block d-sm-none'>

                </div> */}

                <div className='relative blue-separator-sm'></div>

                <div className= "d-xs-block d-lg-none ">
                    <Separator number={30} />
                    <div className='relative blue-separator-md'></div>
                </div>
                

            </div>
            
        )
    }
}
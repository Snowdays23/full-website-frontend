import logo from '../logo.svg';
import '../App.css';
import Header from './header'
import Body1 from './body1'
import Body2 from './body2'
import Body3 from './body3'
import Body4 from './body4';
import Body5 from './body5';
import Separator from './subcomponents/separator';
import bg from "../assets/img/real-mountains.png";
import bgWEB from '../assets/img/real-mountainsWEB.png';
import Snowfall from 'react-snowfall';
import {useState, getWindowSize, useEffect} from 'react';
import { FormPage } from './other-pages/formPage';

export const HomePage = () => {

  return (
    <div>
      <div className = " wrapper-parallex ">
          <div  className="wrapper-mountains">
            <div className='d-none d-lg-block'>
              <img className='wrapper-mountains-img' src={bgWEB}  alt="Picture of mountains" />
            </div>
            <div className='d-xs-block d-lg-none'>
              <img className='wrapper-mountains-img' src={bg}  alt="Picture of mountains" />
            </div>  
            <div className="d-xs-block d-lg-none">
              <Snowfall  snowflakeCount={80}/>
            </div>
            <div className="d-none d-lg-block">
              <Snowfall  snowflakeCount={160}/>
            </div>
          </div>
      </div>
      <Header></Header>
      <Body1></Body1>
      <Body2></Body2>
      <Body3></Body3>
      <Body4></Body4>
      <Body5></Body5>
    </div>
  );
}


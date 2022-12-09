import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Body1 from './components/body1'
import Body2 from './components/body2'
import Body3 from './components/body3'
import Body4 from './components/body4';
import Body5 from './components/body5';
import Separator from './components/subcomponents/separator';
import bg from "./assets/img/real-mountains.png";
import bgWEB from './assets/img/real-mountainsWEB.png';
import Snowfall from 'react-snowfall';
import {useState, getWindowSize, useEffect} from 'react';
import { FormPage } from './components/other-pages/formPage';
import {HomePage} from './components/homePage';
import { Route, Routes } from "react-router-dom";
import { Home } from '@mui/icons-material';
import { Form } from 'react-router-dom/dist';

export default function App ()  {

  return (
      <div  className="App"> 


        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/externals/form" element={<FormPage/>}/>
        </Routes>
            
      </div>
    )
}


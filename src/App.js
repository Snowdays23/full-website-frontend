
import './App.css';
import { FormPage } from './components/formPage';
import {HomePage} from './components/homePage';
import { Route, Routes } from "react-router-dom";
import { SuccessCheckoutPage } from './components/successCheckoutPage';
import { UnsuccessCheckoutPage } from './components/unsuccessCheckoutPage';
import { NotFoundPage } from './components/notFoundPage';
import { InternalFormPage } from './components/internalFormPage';
import { GeneralErrorPage } from './components/generalErrorPage';
import { MaintanancePage } from './components/maintainancePage';
import { AlumniFormPage } from './components/alumniFormPage';
import { PartyForm } from './components/partyForm';
import Sustainability from './components/other-pages/sustainability';

export default function App ()  {

  return (
      <div  className="App"> 


        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/externals/form" element={<FormPage/>}/>
          <Route path="/internals/form" element={<InternalFormPage/>}/>
          <Route path="/alumni/form" element={<AlumniFormPage/>}/>
          {/* <Route path="/party/form" element={<PartyForm/>}/> */}
          <Route path="/success-checkout" element={<SuccessCheckoutPage/>}/>
          <Route path="/unsuccess-checkout" element={<UnsuccessCheckoutPage/>}/>
          <Route path="/error" element={<GeneralErrorPage/>}/>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/sustainability" element={<Sustainability />} />
        </Routes>
            
      </div>
    )
}


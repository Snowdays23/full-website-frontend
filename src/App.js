
import './App.css';
import { FormPage } from './components/formPage';
import {HomePage} from './components/homePage';
import { Route, Routes } from "react-router-dom";
import { SuccessCheckoutPage } from './components/successCheckoutPage';
import { UnsuccessCheckoutPage } from './components/unsuccessCheckoutPage';
import { NotFoundPage } from './components/notFoundPage';
import { InternalFormPage } from './components/internalFormPage';

export default function App ()  {

  return (
      <div  className="App"> 


        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/externals/form" element={<FormPage/>}/>
          <Route path="/internals/form" element={<InternalFormPage/>}/>
          <Route path="/success-checkout" element={<SuccessCheckoutPage/>}/>
          <Route path="/unsuccess-checkout" element={<UnsuccessCheckoutPage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
            
      </div>
    )
}


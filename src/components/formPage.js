import * as React from 'react';
import Separator from './subcomponents/separator';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";  
import "../assets/css/other-pages-css/styleFormPage.css";
import Snowfall from 'react-snowfall';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormPageSport } from './formpage/formPageSport';
import { FormPageCatering } from './formpage/formPageCatering';
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import { FormPageGeneral } from './formpage/formPageGeneral';
import PrivacyPolicy from '../assets/docs/terms__cond.pdf';
import PaymentPolicy from '../assets/docs/PaymentPolicy.pdf';
import TermsAndConditions from '../assets/docs/TermsAndConditions.pdf';
import { Checkbox } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const FormPage = () => {

    const theme = createTheme({
        components: {
          MuiTextField: {
            styleOverrides: {
              root: ({ ownerState }) => ({
                ...(ownerState.variant === 'filled' &&
                  ownerState.color === 'primary' && {
                    backgroundColor: '#fff'
                  }),
              }),
            },
          },
        },
    });

      
    const [readPrivacy, setReadPrivacy] = React.useState(false);
    const [readTerms, setReadTerms] = React.useState(false);
    const [readPayment, setReadPayment] = React.useState(false);

    const [openPrivacy, setOpenPrivacy] = React.useState(false);
    const [openTerms, setOpenTerms] = React.useState(false);
    const [openPayment, setOpenPayment] = React.useState(false);

    const [filledGeneral, setFilledGeneral] = React.useState(false);
    const [filledSport, setFilledSport] = React.useState(false);

    const [generalData, setGeneralData] = React.useState({});
    const [sportData, setSportData] = React.useState({});
    const [cateringData, setCateringData] = React.useState({});
      
    const [filled, setFilled] = React.useState(false);

    const [error, setError] = React.useState();
    const [confirm, setConfirm] = React.useState(false);


    const submitForm = async evt => {

        return await (await fetch("/api/participants", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...generalData,
                    ...sportData,
                    ...cateringData,
                    policies: {
                        privacy: openPrivacy && readPrivacy,
                        terms: openTerms && readTerms,
                        payment: openPayment && readPayment
                    }
                })
            }));

    };
      
    React.useEffect(() => {
        if(readPrivacy && readTerms && readPayment && filledGeneral && filledSport)
            setFilled(true);
        else
            setFilled(false);

    }, [readPrivacy, readTerms, readPayment, filledGeneral, filledSport]);
    
    
    return (

        <div className = "wrapper-outside  ">
            
            <div className='absolute overlay-1' style={{width: "100vw", minHeight: "100vh", height: "auto"}} >

                <div className='d-xs-block d-lg-none'>
                    <Snowfall  snowflakeCount={80}/>    
                </div>

                <div className='d-none d-lg-block'>
                    <Snowfall  snowflakeCount={180}/>   
                </div>
                

                <div className='row justify-content-center'>

                    <div className='col-12 mt-5'>
                        <img src={logoSD23}  id = "main-logo" className='white-shadow-stronger'  alt="Snowdays23 logo: blue snowflake with writing: SNOWDAYS"/>
                    </div>

                </div>

                <Separator number={8} ></Separator>

                <div className='row justify-content-center'>

                    <div className='col-10 '>
                        <h2 className='text-black font-josefin subtitle'>READY TO JOIN US?</h2>
                    </div>

                    <div className="w-100"></div>

                    <div className='col-10'>
                        <h2 className='text-black font-josefin subtitle'>fill in your details</h2>
                    </div>

                    <Separator number={3} ></Separator>
                    <div className="w-100"></div>
                    

                    {error ? <div className='col-11 col-lg-8' style={{textAlign: "left"}}>
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle> {error} — <strong>check it out!</strong>
                        </Alert>
                    </div> : <br/>}

                    

                    <Separator number={3} ></Separator>
                    <div className="w-100"></div>
                    
                    {confirm  && !error ? <div className='col-11 col-lg-8' style={{textAlign: "left"}}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            The form has been submitted successfully! <strong>You will soon receive an email</strong>
                        </Alert>
                    </div> : 
                    <ThemeProvider theme={theme} >

                        <div className='col-11 col-lg-8 '>
                            
                            <div id='form' className='p-1 pb-5 mb-5'>
                                <Separator number={4} ></Separator>
                                
                                <FormPageGeneral setFilledGeneral={setFilledGeneral} setGeneralData={setGeneralData}/>

                                <Separator number={5} ></Separator>

                                <FormPageSport setFilledSport={setFilledSport} setSportData={setSportData}/>

                                <Separator number={5} ></Separator>

                                <FormPageCatering setCateringData={setCateringData}/>

                                <div className='d-xs-block d-lg-none'>
                                    <Separator number={5} ></Separator>
                                </div>

                                <Separator number={7} ></Separator>

                                <div className="row justify-content-center">

                                    <div className='col-11 col-lg-10' >
                                        <label className='small-text text-white font-poppins'> Open the following documents in order to accept them.</label>
                                    </div>

                                    <div className='w-100 mt-2'></div>

                                    <div className='col-11 col-lg-10' style={{position: "relative", right: 0 }}>
                                        <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10, paddingLeft: 2, paddingRight: 2}}>
                                            {openPrivacy ? 
                                            <label> I have read and I accept the <a href={PrivacyPolicy} target="_blank"> Privacy Policy</a> * <Checkbox checked={readPrivacy} onClick={() => {setReadPrivacy(!readPrivacy)}} /> </label>
                                            :
                                            <label> I have read and I accept the <a href={PrivacyPolicy} target="_blank" onClick={() => {setOpenPrivacy(true)}} > Privacy Policy</a> * <Checkbox disabled checked={false}/> </label>
                                            }
                                        </div>
                                    </div>

                                    <div className='w-100 mt-2'></div>

                                    <div className='col-11 col-lg-10' style={{position: "relative", right: 0 }}>
                                        <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10, paddingLeft: 2, paddingRight: 2}}>
                                        {openTerms ? 
                                            <label> I have read and I accept the <a href={TermsAndConditions} target="_blank"> Terms & Conditions</a> * <Checkbox checked={readTerms} onClick={() => {setReadTerms(!readTerms)}} /> </label>
                                            :
                                            <label> I have read and I accept the <a href={TermsAndConditions} target="_blank" onClick={() => {setOpenTerms(true)}}> Terms & Conditions</a> * <Checkbox disabled checked={false} /> </label>
                                            }
                                        </div>
                                    </div>

                                    <div className='w-100 mt-2'></div>

                                    <div className='col-11 col-lg-10' style={{position: "relative", right: 0 }}>
                                        <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10, paddingLeft: 2, paddingRight: 2}}>
                                            {openPayment ? 
                                            <label> I have read and I accept the <a href={PaymentPolicy} target="_blank"> Payment Policy</a> * <Checkbox checked={readPayment} onClick={() => {setReadPayment(!readPayment)}} /> </label>
                                            :
                                            <label> I have read and I accept the <a href={PaymentPolicy} target="_blank" onClick={() => {setOpenPayment(true)}}> Payment Policy</a> * <Checkbox disabled checked={false} /> </label>
                                            }
                                        </div>
                                    </div>

                                </div>

                                <Separator number={5} ></Separator>

                                <div className="row justify-content-center">

                                    <div className='col-12 col-sm-7 col-lg-5' style={{position: "relative", justifyContent: "center"}} >
                                    {filled ?
                                    <Button 
                                    style={{
                                        borderRadius: 30,
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        padding: "20px 45px 20px 45px"
                                    }}
                                    size="large"
                                    variant="contained"
                                    onClick={() => {
                                        submitForm().then(res => {
                                            if (res.status === 201) {
                                                setConfirm(true);
                                                setError();
                                            } else {
                                                setConfirm(false);
                                                res.json().then(json => {
                                                    const non_field = json.non_field_errors;
                                                    setError("\n".join([...Object.entries(json).flatMap(field => {
                                                        const fname = field[0];
                                                        const errors = field[1];
                                                        if (fname ===  "non_field_errors") {
                                                            return [];
                                                        }
                                                        return errors.map(e => `${fname}: ${e}`);
                                                    }), ...non_field]));
                                                });
                                            }
                                        }).catch(err => {
                                            setError("Your request could not be fulfilled. Please retry, or contact us if you need.");
                                            setConfirm(false);
                                        });
                                    }}>Submit <Send fontSize={"inherit"} style={{marginLeft: 5}}/></Button>  
                                    :
                                    <Button 
                                    disabled
                                    style={{
                                        borderRadius: 30,
                                        backgroundColor: "#fff",
                                        color: "#a9a9a9",
                                        padding: "20px 45px 20px 45px"
                                    }}
                                    size="large"
                                    variant="contained">Submit <Send fontSize={"inherit"} style={{marginLeft: 5}}/></Button>  
                                    }           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ThemeProvider>}

                    <Separator number={8} ></Separator>

                    

                </div>

            </div>

            

            
            

        </div>
        
        
    );
    
}
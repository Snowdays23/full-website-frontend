import * as React from 'react';
import Separator from './subcomponents/separator';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";  
import "../assets/css/other-pages-css/styleFormPage.css";
import Snowfall from 'react-snowfall';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import { FormPageGeneral } from './party-form/formPageGeneral';
import PrivacyPolicy from '../assets/docs/PrivacyPolicy.pdf';
import PaymentPolicy from '../assets/docs/PartyPaymentPolicy.pdf';
import TermsAndConditions from '../assets/docs/PartyTermsAndCondition.pdf';
import { Checkbox } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const PartyForm = () => {

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

    const [generalData, setGeneralData] = React.useState({});
      
    const [filled, setFilled] = React.useState(false);

    const [errors, setErrors] = React.useState([]);
    const [confirm, setConfirm] = React.useState(false);


    const submitForm = async evt => {

        return await fetch("/api/partybeasts", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...generalData,
                    policies: {
                        privacy: openPrivacy && readPrivacy,
                        terms: openTerms && readTerms,
                        payment: openPayment && readPayment
                    }
                })
            });

    };
      
    React.useEffect(() => {
        if(readPrivacy && readTerms && readPayment && filledGeneral )
            setFilled(true);
        else
            setFilled(false);

    }, [readPrivacy, readTerms, readPayment, filledGeneral]);
    
    
    return (

        <div className = "wrapper-outside">
            
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
                        <h2 className='text-black font-josefin subtitle'>READY FOR THE PARTY?</h2>
                    </div>

                    <div className="w-100"></div>

                    <div className='col-10'>
                        <h2 className='text-black font-josefin subtitle'>fill in your details</h2>
                    </div>

                    <Separator number={3} ></Separator>
                    <div className="w-100"></div>
                    

                    {errors.length > 0 ? <div className='col-11 col-lg-8' style={{textAlign: "left"}}>
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle> {errors.map(err => <div>&bull;&nbsp;{err}</div>)} — <strong>check it out!</strong>
                        </Alert>
                    </div> : <br/>}

                    

                    <Separator number={3} ></Separator>
                    <div className="w-100"></div>
                    
                    {confirm  && errors.length == 0 ? <div className='col-11 col-lg-8' style={{textAlign: "left"}}>
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

                                {/* <Separator number={5} ></Separator>

                                <div className='d-xs-block d-lg-none'>
                                    <Separator number={5} ></Separator>
                                </div> */}

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

                                <Separator number={2} ></Separator>
                                <div className='row justify-content-center'>
                                    <div className='col-11 col-lg-10'>
                                    <Alert severity="warning"><strong>IMPORTANT!</strong> After submitting you need to pay in the next <strong> 24 HOURS! </strong> Otherwise you'll need to fill the form again. </Alert>
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
                                                setErrors([]);
                                            } else {
                                                setConfirm(false);
                                                res.json().then(json => {
                                                    setErrors(Object.values(json).flatMap(f => f));
                                                });
                                                document.body.scrollTo(0, 0);
                                            }
                                        }).catch(err => {
                                            setErrors(["Your request could not be fulfilled. Please retry, or contact us if you need."]);
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

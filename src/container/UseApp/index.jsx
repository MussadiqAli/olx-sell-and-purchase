import React from 'react';
import '../UseApp/style.css';
import Img from '../images/phone-app.png'
import GoolePlay from '../images/google play.png'
import AppStore from '../images/app store.png'



class UseApp extends React.Component{
    render(){
        return(
            <div>
               <div className="useApp">
                    
                        <div className="row">
                            <div className="useA col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4">
                                <img src={Img} alt=""/>
                            </div>
                            <div className="useA col-12 col-sm-6 col-md-3 col-lg-3 col-xl-4">
                                <h2>TRY THE OLX APP</h2>
                                <p>Buy, sell and find just about anything using the app on your mobile.</p>
                            </div>
                            <div className="useA useC col-12 col-sm-6 col-md-3 col-lg-4 col-xl-4">
                                <h6>GET YOUR APP TODAY</h6>
                                <img className='imgs' src={GoolePlay} alt=""/>
                                <img className='imgs' src={AppStore} alt=""/>
                            </div>
                        </div>
                    
                </div>

            </div>
        );
    }
}





export default UseApp;
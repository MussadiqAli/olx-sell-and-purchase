import React from 'react';
import '../Footer/sytle.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import Googleplay from '../images/google play.png'
import AppStore from '../images/app store.png'



class Footer extends React.Component {
    render() {
        return (
            <div className='foo'>
                


                <div className='main'>
                    <div className="row footer">
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col">
                            <p className="head">POPULA CATOGARIES</p>
                            <p className="content">Cars</p>
                            <p className="content">Flats for Rent</p>
                            <p className="content">Jobs</p>
                            <p className="content">Mobile Phones</p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col">
                            <p className="head">TRENDING SEARCHES</p>
                            <p className="content">Bikes</p>
                            <p className="content">Watches for Rent</p>
                            <p className="content">Books</p>
                            <p className="content">Dogs</p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 col">
                            <p className="head">ABOUT US</p>
                            <p className="content">About OLX Group</p>
                            <p className="content">OLX Blog</p>
                            <p className="content">Contact us</p>
                            <p className="content">OLX for Businesses</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col">
                            <p className="head">OLX</p>
                            <p className="content">Help</p>
                            <p className="content">Site Map</p>
                            <p className="content">Legal and Privacy information</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col">
                            <p className="head">FOLLOW US</p>
                            <p className="content"> <FacebookIcon /> <TwitterIcon /> <PlayCircleOutlineIcon /> <InstagramIcon /> </p>
                            <img src={Googleplay} className='icon' alt="" />
                            <img src={AppStore} className='icon' alt="" />
                        </div>
                    </div>
                </div>

                <div className="copywrite">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <h6 className='lefthead'>Other Countries </h6>
                                <p className='leftCon'> India - South Africa - Indonesia</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                <p className='rightCon float-right'>. © 2006-2020 OLX</p>
                                <h6 className='rightHead float-right'>Free Classifieds in Pakistan</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Footer;
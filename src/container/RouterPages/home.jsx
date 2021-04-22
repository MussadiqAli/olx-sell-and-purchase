import React from 'react';
import Seach from '../header/SearchBar'
import Nav from '../header/navbar'
import Slider from '../header/Slider'
import UseApp from '../UseApp/index'
import Footer from '../Footer/footer'
import Content from '../Content/Content'

import Img1 from '../images/product/img1.jpg'
import Img2 from '../images/product/img2.jpg'
import Img3 from '../images/product/img3.jpg'
import Img4 from '../images/product/img4.jpg'
import Img5 from '../images/product/img5.jpg'
import Img6 from '../images/product/img6.jpg'
import Img7 from '../images/product/img7.jpg'
import Img8 from '../images/product/img8.jpg'
import Img9 from '../images/product/img9.jpg'
import Img10 from '../images/product/img10.jpg'
import Img11 from '../images/product/img11.jpg'


class Home extends React.Component {
  render() {
    return (
      <div>

        <Seach />
        <Nav />
        <Slider />
          <div style={{padding: '10px',margin: '20px',borderRadius: '10px', backgroundColor: "#d9d9d9"}}>
            <h3>Availible Products</h3>
            <div className="row" >
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img1} rs="130"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img2} rs="500"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img3} rs="150"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img4} rs="3000"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img5} rs="1550"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img6} rs="6500"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img7} rs="980"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img8} rs="1100"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img9} rs="2000"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img10} rs="850"/></div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{marginTop: '10px', marginBottom:'10px'}}><Content src={Img11} rs="750"/></div>
                       
              
            </div>
          </div>
       
        
        <UseApp />
        <Footer />


      </div>
    )
  }
}

export default Home;
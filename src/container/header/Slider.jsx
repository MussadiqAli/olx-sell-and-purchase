import React from 'react';
import './style.css';
import Img from '../images/slide.jpg'



class Slider extends React.Component{
    render(){
        return(
            <div>
               <img src={Img} className='slid' alt=""/>
            </div>
        );
    }
}





export default Slider;
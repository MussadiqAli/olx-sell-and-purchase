import React from 'react';
import './style.css';
import { Link} from "react-router-dom";
import Logo from '../images/olx_logo.png'



class Search extends React.Component{
    render(){
        return(
            <div>
                <div className='searchSection'>
                    <img src={Logo} alt="" className="logo"/>
                    
                    <input type="search" name="" placeholder='Search Location' className='locationSearch'/>
                    <input type="text" name="" placeholder="Find Cars Mobile Phones and more..." id="" className='productSearch'/>
                    <button className= 'logoBtn'>Login</button>
                    <button className='SellBtn'><Link to='/sell'>+ SELL</Link> </button>
                    
                    
                </div>
            </div>
        );
    }
}





export default Search;


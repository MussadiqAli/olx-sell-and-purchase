import React from 'react';
import './style.css';

class Nav extends React.Component {
    render() {
        return (
            <div className='mainNav'>
                <div className="row mdiv">
                    <div className='col-3 col-lg-2 col-md-2 col-sm-3 catagories'>
                        ALL CATEGORIES &raquo;
                    </div>
                    <div className="col-8 col-lg-9 col-md-9 col-sm-8 nav">
                        <p>Mobile Phones</p>
                        <p>Cars</p>
                        <p>Motorcycles</p>
                        <p>Houses</p>
                        <p>TV-Video-Audio</p>
                        <p>Tablets</p>
                        <p>Land & Plots</p>
                    </div>
                </div>
            </div>
        );
    }
}





export default Nav;
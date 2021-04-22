import React from 'react';
import './style.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h5 className="navbar-brand">ALL CATEGORIES</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Mobile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Motorcycles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Houses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV-Video-Audio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tablets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Land & Plots</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            // <div className='mainNav'>
            //     <div className="row mdiv">
            //         <div className='col-4 col-lg-2 col-md-3 col-sm-4 catagories'>
            //             ALL CATEGORIES &raquo;
            //         </div>
            //         <div className="col-7 col-lg-9 col-md-8 col-sm-7 nav">
            //             <p>Mobile Phones</p>
            //             <p>Cars</p>
            //             <p>Motorcycles</p>
            //             <p>Houses</p>
            //             <p>TV-Video-Audio</p>
            //             <p>Tablets</p>
            //             <p>Land & Plots</p>
            //         </div>
            //     </div>
            // </div>
        );
    }
}





export default Nav;
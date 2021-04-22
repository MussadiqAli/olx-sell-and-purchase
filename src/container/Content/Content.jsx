import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
        
            <div className="card" style={{ minWidth: '18rem', alignItems:'center'}}>
                <img src={this.props.src} className="card-img-top" style={{width: '15rem', marginTop: '5px'}} />
                <div className="card-body">
                    <h5 className="card-title">RS: {this.props.rs}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                    <p style={{fontSize: '12px'}}>Location</p>
                </div>
            </div>
        );
    }
}


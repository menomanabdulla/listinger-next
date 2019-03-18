import React,{ Component } from 'react';
import { connect } from 'react-redux';

class FullWidthMap extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(value){
        this.props.filter(value);
    }
    render(){
        return(
            <div className="absolute-container">
                <div className="city-listing-block">
                    <div className="title">
                        <h4>In Your City</h4>
                    </div>
                    <ul>
                        <li className="city-listing active" onClick={(e) => this.handleClick('restaurants')}>
                            <i className="la la-cutlery"></i>
                            <h5>Restaurants</h5>
                        </li>
                        <li className="city-listing" onClick={(e) => this.handleClick('bar')}>
                            <i className="la la-beer"></i>
                            <h5>Cafe & Bar</h5>
                        </li>
                        <li className="city-listing" onClick={(e) => this.handleClick('spa')}>
                            <i className="la la-female"></i>
                            <h5>Spa & Beauty</h5>
                        </li>
                        <li className="city-listing" onClick={(e) => this.handleClick('hotel')}>
                            <i className="la la-hotel"></i>
                            <h5>Hotel</h5>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = ( dispatch ) =>{
    return{
        filter: (value) =>{
            dispatch({type: value});
        }
    }
}

export default connect(null, mapDispatchToProps)(FullWidthMap)


 import React from 'react';
 import '../../style/card.css';
 
 const cardStyle =  {
    borderWidth: '1px',
    borderColor: '#eeeeee'
};

class Card extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }

    }

    render() {
        return (
            <React.Fragment>
                   <li style={this.cardStyle} className={`face card-${this.props.idx} ${ this.props.card.isUpsidedown ? 'isUpsidedown' : '' }`} key={this.props.card.name}>
            <h1 id="cardTitle">{this.props.card.name}</h1>
            <img id="cardImg">{this.props.card.cardImg}</img>
            {/* <span id="cardDesc">props.cardDesc</span> */}
            {this.props.children}
    
            
        </li>
            </React.Fragment>
         
        );
    }
    
    
}

export default Card;
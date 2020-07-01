

 import React from 'react';
 import '../../styles/card.css';
 

class Card extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }
//

    render() {
        const cardStyle =  {
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'

        };

        return (
            <React.Fragment>
                   <li style={cardStyle} className={`face card-${this.props.idx} ${ this.props.card.isUpsidedown ? 'isUpsidedown' : '' }`} key={this.props.card.name}>
            {/* <h1 id="cardTitle"></h1> */}
            {/* <img id="cardImg" src={this.props.img}></img> */}
            {/* <span id="cardDesc">props.cardDesc</span> */}
            {this.props.children}
    
            
        </li>
            </React.Fragment>
         
        );
    }
    
    
}

export default Card;
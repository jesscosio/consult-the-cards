
import {cards} from "../../data/cards.json";
import Card from "../../components/cards/Card";
import React from "react";
import '../../style/celtic-cross.css'


const NUMCARDS = 10;
const NUMDECK = 78;

/** will return a random integer between 1 and 78 (number of tarot cards) */
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(NUMDECK));
}

function getRandomCards(that) {
    let cardList = [];
    const cardsArr = Array.from(cards);

    const significatorCard = cardsArr.find((elem) => elem.name === that.refs.significatorCard.value); // sets the first card in the drawn card list to the selected significator card
    cardList.push(significatorCard);

    while(cardList.length < NUMCARDS) {
        const index = getRandomInt();
        const cardToAdd = cardsArr[index];
        // only add to card list if we haven't drawn the card yet
        if(! cardList.find((someCard)=> someCard === cardToAdd)) {
            // add boolean to determine if drawn flipped
            cardToAdd.isUpsidedown = that.getCardPosition();
            // add unique card to list drawn cards
            cardList.push(cardToAdd);
        }
        
    }
    return cardList;
}
function assignAllCards() {
    return Array.from(cards);
}
const buttonStyle = {
    display: "block",
    margin: "10px 0"
}
const listOfCards = {
    padding: "0",
    position: "relative",
    height: "100vh"
  }

class CelticCross extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          drawnCards: [],
          allCards:[],
          flipIndex: 0,
        };
    }

    componentDidMount() {
        const allCards = assignAllCards(); // initializes all cards
        
        this.setState({allCards: allCards});
    }
    componentDidUpdate() {
        // display card on update of flip index; may have to change this if updates more than necessary
        if(document.getElementsByClassName('card-'+ this.state.flipIndex)[0]) {
            (document.getElementsByClassName('card-'+ this.state.flipIndex))[0].style.display = "inherit";
        }  
    }

    flipCard() {
        if(this.state.flipIndex == 0) {
            const drawnCards = getRandomCards(this);
            this.setState({drawnCards: drawnCards});   
        }
        // sets counter in order to draw the next card
        this.setState({flipIndex: this.state.flipIndex + 1});
    }

    getCardPosition() {
        // returns random bool
        return Math.random() >= 0.5;
    }
  
    render() {
        
      return (
        <div>
            <span id="significator-desc" className="step">Select the Significator of the person or thing about whom or which the inquiry is made.  
            It is the card which, in the reader's judgment or experience, 
            is the most representative, and is not, therefore, 
            of necessity the Magician or High Priestess mentioned in the official divinatory meanings.</span>
                
            
                <select ref="significatorCard" id="card-list" style={{ margin: "0 10px"}}>
                    {this.state.allCards.map((card,index) => (
                        <option value={card.name} key={card.name}>{card.name}</option>
                    ))}
                </select>
                
            
            <button style={buttonStyle} onClick={()=>this.flipCard()}>draw next</button>
            <ul style={listOfCards}>
                {this.state.drawnCards.map((card,index) => (
                    <Card card={card} className={`face card-${index+1}`} idx={index+1} key={card.name}>
                        {/* <span>{card.name}</span>
                        <span className="cardNumLabel">{index + 1}</span> */}
                    </Card>
                ))}
            </ul>
    </div>     
      );
    }
  }

  export default CelticCross;
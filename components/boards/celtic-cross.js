
import {cards} from "../../data/cards";
import Card from "../../components/cards/Card";


const NUMCARDS = 10;
const NUMDECK = 78;

/** will return a random integer between 1 and 78 (number of tarot cards) */
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(NUMDECK));
}

function getRandomCards(that) {
    let cardList = [];
    const cardsArr = Array.from(cards);

    const significatorCard = cardsArr.find((elem) => elem.name === that.refs.significatorCard.value);
    cardList.push(significatorCard);

    while(cardList.length < NUMCARDS) {
        const index = getRandomInt();
        const cardToAdd = cardsArr[index];
        if(! cardList.find((someCard)=> someCard === cardToAdd)) {
            cardList.push(cardToAdd);
        }
        
    }
    return cardList;
}
function assignAllCards() {
    return Array.from(cards);
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
        const allCards = assignAllCards();
        
    
        // this.setState({cards: drawnCards});   
        this.setState({allCards: allCards});
    }
    componentDidUpdate() {
        if(document.getElementsByClassName('card-'+ this.state.flipIndex)[0]) {
            (document.getElementsByClassName('card-'+ this.state.flipIndex))[0].style.display = "inherit";
        }  
    }

    flipCard() {
        if(this.state.flipIndex == 0) {
            const drawnCards = getRandomCards(this);
            this.setState({drawnCards: drawnCards});   
        }
        // draws the next card
        this.setState({flipIndex: this.state.flipIndex + 1});
          
    }
    setFirstCard(event) {
        event.preventDefault();
        console.log(event);
    }
  
    render() {
        
      return (
        <div>
            
            <span id="significator-desc" className="step">Select the Significator of the person or thing about whom or which the inquiry is made.  
            It is the card which, in the reader's judgment or experience, 
            is the most representative, and is not, therefore, 
            of necessity the Magician or High Priestess mentioned in the official divinatory meanings.</span>
                
            
                <select ref="significatorCard" id="card-list">
                    {this.state.allCards.map((card,index) => (
                        <option value={card.name} key={card.name}>{card.name}</option>
                    ))}
                </select>
                
            
            <button onClick={()=>this.flipCard()}>draw next</button>
            <ul>
                {this.state.drawnCards.map((card,index) => (
                    <Card card={card} className={`face card-${index+1}`} idx={index+1} key={card.name}>
                        {/* <span>{card.name}</span>
                        <span className="cardNumLabel">{index + 1}</span> */}
                    </Card>
                ))}
            </ul>
            <style jsx>{`


        button {
            display: block;
            margin: 10px 0;
        }             
        #significator-desc {
        }
        #card-list {
           margin: 0 10px;
        }

        ul {
          padding: 0;
          position: relative;
          height: 100vh;
        }

        .flipped {
            display: inherit;
        }

        .face {
          background: maroon;
          display: none;
          padding: 5px;
          margin: auto;
          height: 130px;
          width: 90px;
          list-style:none;
          text-align: center;
          z-index:1;
        }

        .face:hover {
            z-index: 2;
        }

        
      `}</style>
         </div>
         
      );
    }
  }

  export default CelticCross;
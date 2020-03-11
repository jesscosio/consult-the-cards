
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
                    <li className={`face card-${index+1}`} key={card.name}>
                        <span>{card.name}</span>
                        <span className="cardNumLabel">{index + 1}</span>
                    </li>
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

        .card-1 {
            position: absolute;
            top: 200px;
            left: 150px;
        }

        .card-2 {
            float: left;
            position: absolute;
            transform: rotate(90deg);
            top: 205px;
            left: 150px;
        }

        .card-3 {
            position: absolute;
            top: 0;
            left: 150px;
        }

        .card-4 {
            position: absolute;
            top: 400px;
            left: 150px;
        }

        .card-5{
            position: absolute;
            top: 200px;
            left: 300px;
        }

        .card-6 {
            position: absolute;
            top: 200px;
            left: 0;
        }
        .card-7 {
            position: absolute;
            bottom: 40px;
            right: 0;
        }
        .card-8 {
            position: absolute;
            right: 0;
            bottom: 200px;
        }
        .card-9 {
            position: absolute;
            top: 160px;
            right: 0;
        }
        .card-10 {
            position: absolute;
            top: 0;
            right: 0;
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

        .cardNumLabel {
            display: block;
            margin: 5px;
            font-weight:bold;

        }
      `}</style>
         </div>
         
      );
    }
  }

  export default CelticCross;
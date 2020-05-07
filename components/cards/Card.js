



const Card =  (props) => {

    const cardStyle = {
        borderWidth: '1px',
        borderColor: '#eeeeee'
    }

    
    return (
        <li style={cardStyle} className={`face card-${props.idx}`} key={props.card.name}>
        <h1 id="cardTitle">{props.card.name}</h1>
        {/* <img id="cardImg">props.cardImg</img> */}
        {/* <span id="cardDesc">props.cardDesc</span> */}
        {props.children}

        <style jsx>{`

        /* cardTitle */
        h1 { 
            font-size: 1.5em;
            margin: 0 auto;
            overflow: hidden;
        }

        h1:hover {
            overflow: visible;
        }

        .cardNumLabel {
            display: block;
            margin: 5px;
            font-weight:bold;

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

        `}</style>
    </li>
    );
    
}

export default Card;




const Card =  (props) => {

    const cardStyle = {
        borderWidth: '1px',
        borderColor: '#eeeeee'
    }

    
    return (
        <div style={cardStyle}>
        <h1 id="cardTitle"></h1>
        <img id="cardImg"></img>
        <span id="cardDesc"></span>
        {props.children}
    </div>
    );
    
}

export default Card;
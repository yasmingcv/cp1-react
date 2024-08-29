/* eslint-disable react/prop-types */
import './card.css';

const Card = (props) => {
    return (
        <div className="card" style={{ backgroundColor: props.background }}>
            <div className="card-header">
                <h3>{props.number}</h3>
                <img src={props.icon} alt="Ícone do card" />
            </div>
            <div className="card-text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Card

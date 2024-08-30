import { imageCard } from "../../assets/icons"
import "./cards-planos.css"

const Cards = (props) => {
    return (
                <div className="card-1">
                    <div className={`card-1-header ${props.color}`}>
                        <h1>{props.titulo}</h1>
                    </div>
                    <div className="card-1-body">
                        <div className="card-p">
                            <div className="card-p-1">
                                <p>{props.card1usuarios}</p>
                            </div>
                            <div className={`${props.card1}`}>
                                <p>{props.quantidadeVideos1}<strong>R$</strong><strong className="strong-1">{props.preco1}</strong></p>
                            </div>
                            <div className={`${props.usuario2}`}>
                                <p>{props.card2usuarios}</p>
                            </div>
                            <div className={`${props.card3}`}>
                                <p>{props.quantidadeVideos2} <strong>R$</strong><strong className="strong-1">{props.preco2}</strong></p>
                            </div>
                            <div className={`${props.card4}`}>
                                <img src={imageCard} alt="" />
                            </div>
                            
                        </div>
                        <div className="card-button">
                            <button className={`card-button ${props.color}`}>{props.botao}</button>
                        </div>
                    </div>

                </div>
    )
}

export default Cards
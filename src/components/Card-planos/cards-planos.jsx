import "./cards-planos.css"

const Cards = (props) => {
    return (
        <div className="cards-container">
            <div className="header-titulo">
                <h1>Planos</h1>
            </div>
            <div className="cards-planos">
                <div className="card-1">
                    <div className="card-1-header">
                        <h1>{props.titulo}</h1>
                    </div>
                    <div className="card-1-body">
                        <div className="card-p">
                            <div className="card-p-1">
                                <p>1 Usuário</p>
                            </div>
                            <div className="card-p-2">
                                <p>10 Vídeos <strong>R$</strong><strong className="strong-1">15</strong></p>
                            </div>
                        </div>
                        <div className="card-button">
                            <button>Cadastrar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Cards
import { img_saved, img_video } from '../../assets/icons'
import Button from '../../components/Button/Button'
import './sobre.css'
import Cards from '../../components/Card-planos/cards-planos.jsx'


const Sobre = () => {
    return (
        <section>
            <section id='sobre'>
                <div className='container-text'>
                    <h1>Bem-vindo à revolução dos vídeos!</h1>
                    <p>Somos uma startup com o objetivo de facilitar <br /> a produção de conteúdo em larga escala com <br /> qualidade profissional, capaz de atingir uma <br /> audiência de milhões de seguidores.</p>
                    <Button text="Baixe o App" />
                </div>
                <div className='container-img'>
                    <img className='img_number01' src={img_video} alt="Video Mensagem" />
                    <img className='img_number02' src={img_saved} alt="Imagem de Saved" />
                </div>
            </section>
            <section className='cards'>
                <div className="cards-container">
                    <div className="header-titulo">
                        <h1>Planos</h1>
                    </div>
                    <div className="cards-planos">
                        <Cards titulo="Individual"  color="Roxo" card3="card-False" usuario2="usuario-False" card1usuarios="1 Usuário" quantidadeVideos1="10 vídeos" preco1="15" card4="image-False" card1="card-p-2" botao="Cadastrar"/>
                        <Cards titulo="Profissional - Times" color="Branco" card3="card-True" usuario2="usuario-True" card1usuarios="1 - 10 Usuários" card2usuarios="+10 Usuários" quantidadeVideos1="Vídeos ilimitados" preco1="40" quantidadeVideos2="Vídeos ilimitados" preco2="20" card4="image-False" card1="card-p-2" botao="Cadastrar"/>
                        <Cards titulo="Corporativo" color="Branco" card3="card-False" usuario2="usuario-False" card4="image-True" card1="card-p2-False" botao="Entre em contato"/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Sobre
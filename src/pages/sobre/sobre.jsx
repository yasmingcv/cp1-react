import { img_saved, img_video } from '../../assets/icons'
import Button from '../../components/Button/Button'
import './sobre.css'


const Sobre = () => {
    return (
        <section id='sobre'>
            <div className='container-text'>
                <h1>Bem-vindo à revolução dos vídeos!</h1>
                <p>Somos uma startup com o objetivo de facilitar <br /> a produção de conteúdo em larga escala com <br /> qualidade profissional, capaz de atingir uma <br /> audiência de milhões de seguidores.</p>
                <Button text="Baixe o App"/>
            </div>
            <div className='container-img'>
                <img className='img_number01' src={img_video} alt="Video Mensagem"/>
                <img className='img_number02' src={img_saved} alt="Imagem de Saved" />
            </div>
        </section>
    )
}

export default Sobre
import './sobre.css'


const Sobre = () => {
    return (
        <section id='sobre'>
            <div className='container-text'>
                <h1>Bem-vindo à revolução dos vídeos!</h1>
                <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                <button>Baixe o app</button>
            </div>
            <div className='container-img'>
                <img src="../../assets/icons/img_video_msg.png" alt="Video Mensagem" />
                <img src="../../assets/icons/img_saved_1.png" alt="Imagem de Saved" />
            </div>
        </section>
    )
}

export default Sobre
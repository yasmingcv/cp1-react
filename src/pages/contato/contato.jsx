import './contato.css'
import {discord, instagram, twitter} from "../../assets/icons"

const Contato = () => {
  return (
      <section id="contato">
        <article className="redes-sociais">
          <h1>Dúvidas e <br /> suporte, entre <br /> em contato:</h1>
          <ul className="ul-contato">
            <li><img src={twitter} alt="twitter logo" /></li>
            <li><img src={instagram} alt="instagram logo" /></li>
            <li><img src={discord} alt="discord logo" /></li>
          </ul>
        </article>
        <article className="form-contato">
          <form className="form">
            <div className="form-input">
              <label htmlFor="nome">Nome:</label>
              <input name="nome" type="text" />
            </div>
            <div className="form-input">
              <label htmlFor="email">E-mail:</label>
              <input name="email" type="text" />
            </div>
            <div className="form-input mensagem-input">
              <label htmlFor="mensagem">Mensagem:</label>
              <input name="mensagem" type="text" />
            </div>
          </form>
          <button className="button-form-contato">Enviar</button>
        </article>
      </section>
  )
}

export default Contato
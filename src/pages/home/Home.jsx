import { imghome } from "../../assets/icons";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./home.css";
import { tiktok, instagram2, facebook, youtube } from "../../assets/icons";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="container-text">
          <h3>Crie seus vídeos online</h3>
          <p>
            Transforme suas ideias em filmes memoráveis: onde a criatividade
            encontra a simplicidade.
          </p>
          <Button></Button>
        </div>
        <img src={imghome} alt="Imgem" />
      </div>
      <div className="home-cards">
        <Card
          number="01"
          icon={youtube}
          title="Youtube"
          description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
          background="#F1C2B0"
        />
        <Card
          number="02"
          icon={tiktok}
          title="TikTok"
          description="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
          background="#F9EB98"
        />
        <Card
          number="03"
          icon={facebook}
          title="Facebook"
          description="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
          background="#C0D9DD"
        />
        <Card
          number="04"
          icon={instagram2}
          title="Instagram"
          description="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
          background="#6975E8"
        />
      </div>
    </div>
  );
};

export default Home;

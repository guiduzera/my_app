import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineWhatsApp
            onClick={() =>
              handleRedirect(
                'https://api.whatsapp.com/send?phone=5584994407369&text=Fala%20Guilherme%2C%20estou%20interessado%2Fa%20no%20seu%20trabalho%20bora%20conversar%3F%3F'
              )
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/guiduzera')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/guilhermeedu/')
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;

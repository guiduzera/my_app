/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/perfilGithub.jpeg';

export default function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="my pic" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>me chamo Guilherme</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//My apresentation</span>
            <span className="infos">Infos</span> {'\u007B'}
            <div>
              Name:{' '}
              <span
                className="payload
              "
              >
                Guilherme
              </span>
            </div>
            <div>
              Age:{' '}
              <span
                className="payload
              "
              >
                18
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

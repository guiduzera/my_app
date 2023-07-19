/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

export default function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image src="/my-profile.jpg" alt="hero" width={400} height={400} />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Guilherme</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">// My presentation</span>
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
                19
              </span>
            </div>
            <div>
              Stack:{' '}
              <span
                className="payload
              "
              >
                FullStack
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="infos">Desire</span> {'\u007B'}
            <div>
              Job:{' '}
              <span
                className="payload
              "
              >
                True
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

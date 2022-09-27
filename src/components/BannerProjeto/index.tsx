import { Container } from './styles';

interface PropsBanner {
  title: string;
  type: string;
  imgLink: string;
}

function BannerProjeto({ title, type, imgLink }: PropsBanner) {
  return (
    <Container imgUrl={imgLink}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default BannerProjeto;

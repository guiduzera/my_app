/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Container } from './styles';

interface PropsItem {
  title: string;
  type: string;
  imgLink: string;
  path: string;
}

function ProjetoComponent({ title, type, imgLink, path }: PropsItem) {
  return (
    <Container imgUrl={imgLink}>
      <Link href={`/projetos/${path}`} legacyBehavior>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoComponent;

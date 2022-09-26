/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

export default function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos projetos" />
      <section>
        <ProjetoItem
          title="projeto 1"
          description="Webdite"
          imgUrl="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="/projetos/projeto1"
        />
        <ProjetoItem
          title="projeto 1"
          description="Webdite"
          imgUrl="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="/projetos/projeto1"
        />
        <ProjetoItem
          title="projeto 1"
          description="Webdite"
          imgUrl="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="/projetos/projeto1"
        />
        <ProjetoItem
          title="projeto 1"
          description="Website"
          imgUrl="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="/projetos/projeto1"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

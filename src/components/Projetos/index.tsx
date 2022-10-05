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
          title="TFC"
          description="app fullstack"
          imgUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/54813091"
          path="/projetos/TFC"
        />
        <ProjetoItem
          title="Trybesmith"
          description="backend"
          imgUrl="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="/projetos/trybesmith"
        />
        <ProjetoItem
          title="Recipe App"
          description="frontend website"
          imgUrl="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="/projetos/recipe-app"
        />
        <ProjetoItem
          title="blogsAPI"
          description="backend"
          imgUrl="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="/projetos/blogsAPI"
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

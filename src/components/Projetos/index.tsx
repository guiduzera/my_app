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
          description="App fullstack"
          imgUrl="/TFC.png"
          path="/projetos/TFC"
        />
        <ProjetoItem
          title="Trybesmith"
          description="App backend"
          imgUrl="/trybesmith.jpg"
          path="/projetos/trybesmith"
        />
        <ProjetoItem
          title="Bank simulator"
          description="App fullstack"
          imgUrl="/TFC.png"
          path="/projetos/bank-simulator"
        />
        <ProjetoItem
          title="car_shop"
          description="App backend"
          imgUrl="car_shop.png"
          path="/projetos/car_shop"
        />
      </section>
      <button type="button">
        <Link href="/projetos" legacyBehavior>
          <a>ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

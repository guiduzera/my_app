import { SiTypescript, SiNodedotjs, SiReact, SiGit } from 'react-icons/si';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Meus conhecimentos" />
      <section>
        <ConhecimentoItem title="TypeScript" icon={<SiTypescript />} />
        <ConhecimentoItem title="Node.js" icon={<SiNodedotjs />} />
        <ConhecimentoItem title="React" icon={<SiReact />} />
        <ConhecimentoItem title="Git" icon={<SiGit />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;

import {
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiGit,
  SiJavascript,
  SiPython,
  SiMysql,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiExpress
} from 'react-icons/si';
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
        <ConhecimentoItem title="Express" icon={<SiExpress />} />
        <ConhecimentoItem title="Git" icon={<SiGit />} />
        <ConhecimentoItem title="JavaScript" icon={<SiJavascript />} />
        <ConhecimentoItem title="Python" icon={<SiPython />} />
        <ConhecimentoItem title="MySQL" icon={<SiMysql />} />
        <ConhecimentoItem title="Docker" icon={<SiDocker />} />
        <ConhecimentoItem title="PostgreSQL" icon={<SiPostgresql />} />
        <ConhecimentoItem title="MongoDB" icon={<SiMongodb />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;

import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienciaItem';
import { Container } from './styles';

export default function Experience() {
  return (
    <Container>
      <SectionTitle
        title="08 meses de experiência"
        description="Onde trabalhei..."
      />
      <section>
        <ExperienceItem
          title="ASAS Group"
          subtitle="Assistente de T.I"
          logo="/asas_portugues.svg"
          link="https://asasinsurance.com/"
        />
        <ExperienceItem
          title="Trybe"
          subtitle="Analista de sistemas"
          logo="/logo-negative-green.svg"
          link="https://www.betrybe.com/"
        />
      </section>
    </Container>
  );
}

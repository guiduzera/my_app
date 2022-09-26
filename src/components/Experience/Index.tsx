import SectionTitle from '../../SectionTitle';
import ExperienceItem from './ExperienciaItem';
import { Container } from './styles';

export default function Experience() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de esperiencia" />
      <section>
        <ExperienceItem
          title="certificado"
          subtitle="instituicao"
          description="link"
        />
        <ExperienceItem
          title="certificado"
          subtitle="instituicao"
          description="link"
        />
        <ExperienceItem
          title="certificado"
          subtitle="instituicao"
          description="link"
        />
        <ExperienceItem
          title="certificado"
          subtitle="instituicao"
          description="link"
        />
        <ExperienceItem
          title="certificado"
          subtitle="instituicao"
          description="link"
        />
      </section>
    </Container>
  );
}

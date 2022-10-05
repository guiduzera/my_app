import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienciaItem';
import { Container } from './styles';

export default function Experience() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de estudo" />
      <section>
        <ExperienceItem
          title="certificado"
          subtitle="Formação Iniciante em Programação"
          description="Alura"
          link="https://cursos.alura.com.br/degree/certificate/4321130b-9e20-4a36-a04c-4ba29bd815d8"
        />
        <ExperienceItem
          title="certificado"
          subtitle="certificado de Módulo - Front-End"
          description="Trybe"
          link="https://api.accredible.com/v1/auth/invite?code=d6d8e708a17aad21c8de&credential_id=bff5b00b-607f-492b-bc9a-94a08abe0aa3&url=https%3A%2F%2Fwww.credential.net%2Fbff5b00b-607f-492b-bc9a-94a08abe0aa3&ident=f0f20c5a9a115f90ece7d424c94296b19f6f945d"
        />
        <ExperienceItem
          title="certificado"
          subtitle="certificado digital para Módulo de Fundamentos do Desenvolvimento Web."
          description="Trybe"
          link="https://api.accredible.com/v1/auth/invite?code=d271cbb5bca6377ebea1&credential_id=9d9ec572-b6f1-47cb-88e2-d93888323af8&url=https%3A%2F%2Fwww.credential.net%2F9d9ec572-b6f1-47cb-88e2-d93888323af8&ident=f0f20c5a9a115f90ece7d424c94296b19f6f945d"
        />
      </section>
    </Container>
  );
}

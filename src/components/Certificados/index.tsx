import SectionTitle from '../SectionTitle';
import CertificadoItem from './CertificadoItem';
import { Container } from './styles';

export default function Certificados() {
  return (
    <Container>
      <SectionTitle title="Meus certificados" description="01 ano de estudo" />
      <section>
        <CertificadoItem
          id="alura"
          photo="/certificado alura.png"
          title="iniciante em programação"
          link="https://cursos.alura.com.br/degree/certificate/4321130b-9e20-4a36-a04c-4ba29bd815d8"
        />
        <CertificadoItem
          photo="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69622699"
          title="Web fundamentals"
          link="https://www.credential.net/embed/9905b777-c30d-4804-b632-a4b889582ebf"
        />
        <CertificadoItem
          photo="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69622425"
          title="Front-end development"
          link="https://www.credential.net/embed/44950102-c9aa-4c69-bf29-7f20431dc8c9"
        />
        <CertificadoItem
          photo="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69622958"
          title="back-end development"
          link="https://www.credential.net/embed/169a1501-de9e-4862-b006-db912750d897"
        />
        <CertificadoItem
          photo="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/69622152"
          title="computer science"
          link="https://www.credential.net/embed/8e7f992d-7c40-4125-88af-931f98ef9fe1"
        />
        <CertificadoItem
          photo="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/70389192"
          title="Web development"
          link="https://www.credential.net/embed/51f6d322-9b46-4547-a25c-816b578c54d2"
        />
      </section>
    </Container>
  );
}

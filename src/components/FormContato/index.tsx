import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import Form from './Form';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve ou fale diretamete comigo pelo whatsapp
            localizado no rodapé.
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from './styles';

export default function DownloadButton() {
  return (
    <Button data-aos="fade-up">
      <button type="button">
        <a href="/Curriculo.pdf" download="Currículo_Guilherme.pdf">
          Baixe meu currículo aqui!
        </a>
      </button>
    </Button>
  );
}

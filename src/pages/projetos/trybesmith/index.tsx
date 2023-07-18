/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { AiOutlineGithub } from 'react-icons/ai';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { DetailsProjects } from '../../../styles/ProjetoStyles';

export default function index() {
  return (
    <DetailsProjects>
      <Head>
        <title>Projetos | Guiduzera</title>
        <meta
          name="description"
          content="Aqui falo sobre um projeto de maneira focalizada! Se quiser ver ele ativo clique em ver projeto Online, basta clicar nele!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui falo sobre um projeto de maneira focalizada! Se quiser ver ele ativo clique em ver projeto Online, basta clicar nele!"
        />
      </Head>
      <Header />
      <BannerProjeto
        title="trybeSmith"
        imgLink="/trybesmith.jpg"
        type="App BackEnd"
      />
      <main>
        <p>
          Projeto node.Js com express e Typescript para criação de uma API, com
          CRUDS destinados para a administração de uma loja de artigos
          medievais. Projeto realizado com paradigma de orientação a objetos
          (POO) e containeralizado com docker possuindo algumas variaveis de
          ambientes necessarias para o funcionamento do banco de dados e na
          autenticação feita por JWT.
        </p>
        <button type="button">
          <a
            href="https://github.com/guiduzera/Trybesmith"
            target="_blank"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            rel="noreferrer"
          >
            Ver código <AiOutlineGithub />
          </a>
        </button>
      </main>
    </DetailsProjects>
  );
}

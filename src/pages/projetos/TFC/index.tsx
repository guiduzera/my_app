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
      <BannerProjeto title="TFC" imgLink="/TFC.png" type="App FullStack" />
      <main>
        <p>
          TFC é um projeto fullstack desenvolvido por mim com o intuito de
          gerenciar a tabela do campeonato brasileiro de futebol fictício. Nele
          é utilizado tecnologias como React, NodeJS, Express, MySQL, sequelize,
          Docker, entre outras permitindo que o usuário possa cadastrar, editar,
          excluir e fitrar de várias formas os dados da tabela. também conta com
          testes de integração.
        </p>
        <button type="button">
          <a
            href="https://github.com/guiduzera/TFC"
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

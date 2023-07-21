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
        title="bank-simulator"
        imgLink="/BankLogin.png"
        type="App fullstack"
      />
      <main>
        <p>
          aplicação web fullstack, cujo objetivo seja possibilitar que usuários
          consigam criar suas contas e realizar transferências internas entre si
          simulando a movimentação de um banco.
        </p>
        <button type="button">
          <a
            href="https://github.com/guiduzera/Bank-Simulator"
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

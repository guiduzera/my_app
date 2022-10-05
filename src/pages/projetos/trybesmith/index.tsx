/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
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
        imgLink="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
        type="App BackEnd"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          quaerat aut, sed sapiente libero asperiores doloremque saepe unde
          eveniet expedita dolorem facilis minima, maxime rerum veritatis porro
          inventore, magnam quas.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </DetailsProjects>
  );
}

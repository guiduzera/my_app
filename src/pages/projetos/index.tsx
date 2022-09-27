import Head from 'next/head';
import Header from '../../components/Header';
import ProjetoComponent from '../../components/ProjetoComponent';
import { ProjetoContainer } from '../../styles/ProjetoStyles';

export default function index() {
  return (
    <ProjetoContainer>
      <Head>
        <title>Projetos | Guiduzera</title>
        <meta
          name="description"
          content="Aqui apresento alguns projetos desenvolvidos por mim! Se quiser saber mais sobre algum projeto, basta clicar nele!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui apresento alguns projetos desenvolvidos por mim! Se quiser saber mais sobre algum projeto, basta clicar nele!"
        />
      </Head>
      <Header />
      <main
        className="container"
        style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}
      >
        <ProjetoComponent
          title="porjeto 1"
          type="tipo 1"
          imgLink="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="protect01"
        />
        <ProjetoComponent
          title="porjeto 1"
          type="tipo 1"
          imgLink="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="protect01"
        />
        <ProjetoComponent
          title="porjeto 1"
          type="tipo 1"
          imgLink="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="protect01"
        />
        <ProjetoComponent
          title="porjeto 1"
          type="tipo 1"
          imgLink="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png"
          path="protect01"
        />
      </main>
    </ProjetoContainer>
  );
}

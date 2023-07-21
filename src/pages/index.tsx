import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experience from '../components/Experience/Index';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Rodape/Footer';
import 'aos/dist/aos.css';
import Certificados from '../components/Certificados';
import DownloadButton from '../components/DownloadBotton';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Home | Guiduzera</title>
        <meta
          name="description"
          content="Sou um desenvolvedor FullStack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor FullStack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header />
      <main className="container">
        <HomeHero />
        <Certificados />
        <Experience />
        <Projetos />
        <Conhecimentos />
        <FormContato />
        <DownloadButton />
        <Footer />
      </main>
    </HomeContainer>
  );
}

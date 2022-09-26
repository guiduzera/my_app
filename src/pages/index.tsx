import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experience from '../components/Experience/Index';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/conhecimentos';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experience />
        <Projetos />
        <Conhecimentos />
      </main>
    </HomeContainer>
  );
}

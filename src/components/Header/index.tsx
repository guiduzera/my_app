import LinkHeader from './LinkHeader';
import { Container } from './styles';

const Header = () => (
  <Container>
    <ul>
      <LinkHeader title="Home" path="/" />
      <LinkHeader title="Projetos" path="/projetos" />
    </ul>
  </Container>
);

export default Header;

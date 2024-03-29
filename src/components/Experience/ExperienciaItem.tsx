import Link from 'next/link';
import { ContainerItem } from './styles';

interface ItemProps {
  title: string;
  subtitle: string;
  logo: string;
  link: string;
}

export default function ExperienceItem({
  title,
  logo,
  subtitle,
  link
}: ItemProps) {
  return (
    <ContainerItem data-aos="fade-up">
      <Link href={link} target="blank">
        <div className="company">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <img src={logo} alt="logo" />
        </div>
      </Link>
    </ContainerItem>
  );
}

import Link from 'next/link';
import { ContainerItem } from './styles';

interface ItemProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export default function ExperienceItem({
  title,
  description,
  subtitle,
  link
}: ItemProps) {
  return (
    <ContainerItem data-aos="fade-up">
      <Link href={link}>
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <p>{subtitle}</p>
        </div>
      </Link>
    </ContainerItem>
  );
}

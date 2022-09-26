import { ContainerItem } from './styles';

interface ItemProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ExperienceItem({
  title,
  description,
  subtitle
}: ItemProps) {
  return (
    <ContainerItem>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{subtitle}</p>
      </div>
    </ContainerItem>
  );
}

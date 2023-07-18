/* eslint-disable react/require-default-props */
import Link from 'next/link';
import { ContainerItem } from './styles';

interface ItemProps {
  title: string;
  link: string;
  photo: string;
  id?: string;
}

export default function CertificadoItem({ title, link, photo, id }: ItemProps) {
  return (
    <ContainerItem data-aos="fade-up">
      <Link href={link} target="blank">
        <div className="certify">
          <h2>{title}</h2>
          <img id={id} src={photo} alt="certify" />
        </div>
      </Link>
    </ContainerItem>
  );
}

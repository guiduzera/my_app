/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';

interface ProjetoProps {
  title: string;
  description: string;
  imgUrl: string;
  path: string;
}

export default function ProjetoItem({
  imgUrl,
  title,
  description,
  path
}: ProjetoProps) {
  return (
    <ProjetoContainer imgUrl={imgUrl} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>- {description}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={path} legacyBehavior>
          <a>
            saiba mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}

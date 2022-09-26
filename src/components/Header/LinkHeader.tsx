/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
}

export default function LinkHeader({ title, path }: Props) {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <LinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </LinkContainer>
  );
}

import { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';

interface ConhecimentoItemProps {
  title: string;
  icon: ReactNode;
}

function ConhecimentoItem({ title, icon }: ConhecimentoItemProps) {
  return (
    <ConhecimentoContainer>
      <p>{title}</p>
      {icon}
    </ConhecimentoContainer>
  );
}

export default ConhecimentoItem;

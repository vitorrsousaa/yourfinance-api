import Arrow from '../../assets/icons/arrow.svg';

import { BaseHeader } from './Header.styles';

export interface HeaderViewProps {
  name: string | undefined;
}

export function HeaderView({ name }: HeaderViewProps) {
  return (
    <BaseHeader>
      <h1>
        Bem vindo(a) de volta, <span>{name}</span>
      </h1>
      <div className="containerAvatar">
        <img src="https://picsum.photos/200/300" alt="ImageAvatar" />
        <h4>{name}</h4>
        <img src={Arrow} alt="Arrow" />
      </div>
    </BaseHeader>
  );
}

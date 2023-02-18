import Arrow from '../../assets/icons/arrow.svg';

import { BaseHeader } from './Header.styles';

export function HeaderView() {
  return (
    <BaseHeader>
      <h1>
        Bem vindo(a) de volta, <span>Natalia Nunes</span>
      </h1>
      <div className="containerAvatar">
        <img src="https://picsum.photos/200/300" alt="ImageAvatar" />
        <h4>Natalia Nunes</h4>
        <img src={Arrow} alt="Arrow" />
      </div>
    </BaseHeader>
  );
}

import { BaseHeader } from './Header.styles';

export interface HeaderViewProps {
  name: string | undefined;
  page: string;
}

export function HeaderView({ name, page }: HeaderViewProps) {
  return (
    <BaseHeader>
      <header className="header-overview">
        <h1>{page}</h1>
        <small>
          Olá, <strong>{name}.</strong> Comece a controlar suas finanças.
        </small>
      </header>
    </BaseHeader>
  );
}

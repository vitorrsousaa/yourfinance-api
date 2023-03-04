import { BaseHeader } from './Header.styles';

export interface HeaderViewProps {
  name: string | undefined;
  page: string;
  subtitle?: string;
}

export function HeaderView(props: HeaderViewProps) {
  const { name, page, subtitle } = props;
  return (
    <BaseHeader>
      <header className="header-overview">
        <h1>{page}</h1>
        <small>
          Olá, <strong>{name}.</strong> {subtitle}
        </small>
      </header>
    </BaseHeader>
  );
}

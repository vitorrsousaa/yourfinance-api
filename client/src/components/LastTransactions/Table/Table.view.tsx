import { StyledTable } from './Table.styles';

export function TableView() {
  return (
    <StyledTable>
      <div className="header-table">
        <strong>Modalidade</strong>
        <strong>Descrição</strong>
        <strong>Valor</strong>
        <strong>Data</strong>
        <strong>Tipo</strong>
      </div>
      <div>
        <small>Trabalho</small>
        <small>Role com a morena</small>
        <small>R$ 1200,00</small>
        <small>01/02/2023</small>
        <small>Fixo</small>
      </div>
      <div>
        <small>Gastos pessoais</small>
        <small>Role com a morena</small>
        <small>R$ 90,00</small>
        <small>01/01/2023</small>
        <small>Variável</small>
      </div>
    </StyledTable>
  );
}

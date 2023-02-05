export default interface Transaction {
  _id?: string;
  __v?: 0;
  user?: string;
  modality:
    | {
        _id: string;
        name: string;
        icon: string;
        __v: number;
      }
    | string;
  description: string;
  amount: number;
  category: 'Despesas' | 'Receitas';
  type: 'Fixo' | 'Variável';
  createdAt: string;
}

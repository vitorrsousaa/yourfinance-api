export type TransactionCreateRequestDTO = {
  name: string;
  categoryId: string;
  modalityId: string;
  type: string;
  userId: string;
  amount: number;
  date: Date;
  informationFixedId?: string;
}

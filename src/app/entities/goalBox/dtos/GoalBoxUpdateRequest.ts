export type GoalBoxCreatUpdateRequestDTO = {
  id: string;
  balance: number;
  amountTransaction: number;
  modeTransaction: 'LESS' | 'MORE';
}

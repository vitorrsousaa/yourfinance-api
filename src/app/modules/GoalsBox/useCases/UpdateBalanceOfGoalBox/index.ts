import { THistoriGoalBox, TTimeGoalBox } from '../../../../entities/goalBox/TGoalBox';
import AppError from '../../../../error';
import GoalBoxRepository from '../../repositories/implementatios/GoalBoxRepository';
import { TReturnGoalBox } from '../@types';

export default async function UpdateBalanceOfGoalBox(
  userId: string,
  goalBoxId: string,
  balanceValue: number,
  modeSum: 'LESS' | 'MORE'
): Promise<TReturnGoalBox> {
  const findBalance = await GoalBoxRepository.findUniqueGoalBox(goalBoxId);
  if (!findBalance) throw new AppError('Não conseguimos achar está meta!', 404);
  if (findBalance.userId !== userId) throw new AppError('Ouve algum erro!', 400);

  let newValueBalance = 0;
  if (modeSum === 'LESS') {
    newValueBalance = findBalance.balance - balanceValue;
  } else if (modeSum === 'MORE') {
    newValueBalance = findBalance.balance + balanceValue;
  }

  const updateBalanceOfGoal = await GoalBoxRepository
    .updateBalanceOfGoalBox(goalBoxId, newValueBalance, balanceValue, modeSum);
  if (!updateBalanceOfGoal) throw new AppError('Ouve algum erro ao fazer a mudança no valor juntado da meta!');

  const { goalName, goalCost, goalTime, balance, id, historicTransactions } = updateBalanceOfGoal;

  return {
    goalName,
    goalCost,
    goalTime: {
      initialDate: (goalTime as TTimeGoalBox).initialDate,
      endDate: (goalTime as TTimeGoalBox).endDate,
      endMonths: new Date((goalTime as TTimeGoalBox).endDate).getMonth() - new Date().getMonth()
    },
    balance,
    payOff: goalCost - balance,
    id,
    historicTransactions: (historicTransactions as THistoriGoalBox[])
  };
}

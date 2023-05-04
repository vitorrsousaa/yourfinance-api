import { THistoriGoalBox, TTimeGoalBox } from '../../../../entities/goalBox/TGoalBox';
import AppError from '../../../../error';
import GoalBoxRepository from '../../repositories/implementatios/GoalBoxRepository';
import { TReturnGoalBox } from '../@types';

export default async function FindUniqueGoalBox(
  userId: string,
  goalBoxId: string
): Promise<TReturnGoalBox> {
  const findGoal = await GoalBoxRepository.findUniqueGoalBox(goalBoxId);
  if (!findGoal) throw new AppError('Não foi possível achar está meta!', 404);
  if (findGoal.userId !== userId) throw new AppError('Ocorreu um erro!');

  const {
    id,
    balance,
    goalCost,
    goalName,
    goalTime,
    historicTransactions,
  } = findGoal;

  const time = {
    initialDate: (goalTime as TTimeGoalBox).initialDate,
    endDate: (goalTime as TTimeGoalBox).endDate,
    endMonths: new Date((goalTime as TTimeGoalBox).endDate).getMonth() - new Date().getMonth()
  };

  return {
    id,
    balance,
    goalCost,
    goalName,
    goalTime: time,
    historicTransactions: (historicTransactions as THistoriGoalBox[]),
    payOff: goalCost - balance
  };
}

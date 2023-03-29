import AppError from '../../../../error';
import GoalBoxRepository from '../../repositories/implementatios/GoalBoxRepository';
import { TReturnGoalBox } from '../@types';

export default async function FindUniqueGoalBox(
  userId: string,
  goalBoxId: string
): Promise<TReturnGoalBox> {
  const findGoal = await GoalBoxRepository.findUniqueGoalBox(goalBoxId);
  if (!findGoal) throw new AppError('Não foi possível achar está meta!', 404);
  if (String(findGoal.user) !== userId) throw new AppError('Ocorreu um erro!');

  const {
    _id,
    balance,
    goalCost,
    goalName,
    goalTime,
    historicTransaction,
  } = findGoal;

  const time = {
    initialDate: goalTime.initialDate,
    endDate: goalTime.endDate,
    endMonths: goalTime.endDate.getMonth() - new Date().getMonth()
  };

  return {
    _id,
    balance,
    goalCost,
    goalName,
    goalTime: time,
    historicTransaction,
    payOff: goalCost - balance
  };
}

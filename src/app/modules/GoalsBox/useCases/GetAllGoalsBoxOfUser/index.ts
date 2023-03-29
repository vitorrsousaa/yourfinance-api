import AppError from '../../../../error';
import GoalBoxRepository from '../../repositories/implementatios/GoalBoxRepository';
import { TReturnGoalBox } from '../@types';

export default async function GetAllGoalsBoxOfUser(
  userId: string
): Promise<TReturnGoalBox[]> {
  const findGoalsOfUser = await GoalBoxRepository.getAllGoalsBoxOfUser(userId);
  if (!findGoalsOfUser) throw new AppError('Voce ainda não tem nenhuma meta registrada!', 404);

  const calculateBalanceOfGoal = findGoalsOfUser.map(({
    goalName,
    goalCost,
    balance,
    goalTime,
    _id,
    historicTransaction
  }) => ({
    goalName,
    goalCost,
    balance,
    goalTime: {
      initialDate: goalTime.initialDate,
      endDate: goalTime.endDate,
      endMonths: goalTime.endDate.getMonth() - new Date().getMonth()
    },
    payOff: goalCost - balance,
    _id,
    historicTransaction
  }));

  return calculateBalanceOfGoal;
}

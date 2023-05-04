import { THistoriGoalBox, TTimeGoalBox } from '../../../../entities/goalBox/TGoalBox';
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
    id,
    historicTransactions
  }) => ({
    goalName,
    goalCost,
    balance,
    goalTime: {
      initialDate: (goalTime as unknown as TTimeGoalBox).initialDate,
      endDate: (goalTime as TTimeGoalBox).endDate,
      endMonths: new Date((goalTime as TTimeGoalBox).endDate).getMonth() - new Date().getMonth()
    },
    payOff: goalCost - balance,
    id,
    historicTransactions: (historicTransactions as THistoriGoalBox[])
  }));

  return calculateBalanceOfGoal;
}

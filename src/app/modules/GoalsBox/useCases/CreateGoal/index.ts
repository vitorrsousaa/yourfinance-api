import { TGoalBox } from '../../../../entities/goalBox/TGoalBox';
import AppError from '../../../../error';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import GoalBoxRepository from '../../repositories/implementatios/GoalBoxRepository';

export default async function CreateGoal(
  goalName: string,
  goalCost: number,
  goalTime: {
    initialDate: Date,
    endDate: Date,
  },
  initialValue: number,
  user: string,
): Promise<TGoalBox> {
  const findUser = await UserRepository.findById(user);
  if (!findUser) throw new AppError('Ouve algum error ao buscar suas informações!', 404);

  const createGoal = await GoalBoxRepository.registerGoal(
    goalName,
    goalCost,
    goalTime,
    initialValue,
    user,
  );

  return createGoal;
}

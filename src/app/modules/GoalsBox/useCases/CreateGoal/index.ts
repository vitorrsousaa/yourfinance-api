import AppError from '../../../../error';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import { TGoalBox } from '../../model';
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

  const historic: TGoalBox['historicTransaction'] = [{
    date: new Date(),
    amount: initialValue,
    modeTransaction: initialValue <= 1 ? 'LESS' : 'MORE'
  }];

  const optionalHistoric = initialValue === 0 ? [] : historic;

  const createGoal = await GoalBoxRepository.registerGoal(
    goalName,
    goalCost,
    goalTime,
    initialValue,
    user,
    optionalHistoric
  );

  return createGoal;
}

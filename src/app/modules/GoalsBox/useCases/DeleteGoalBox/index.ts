import GoalBoxRepository from '../../repositories/implementatios/GoalBoxRepository';

export default async function DeleteGoalBox(goalBoxId: string): Promise<unknown> {
  return GoalBoxRepository.deleteGoalBox(goalBoxId);
}

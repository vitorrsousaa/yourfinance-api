import GoalBoxRepository from '../../repositories/implementatios/GoalBoxRepository';

export default async function DeleteGoalBox(goalBoxId: string): Promise<void | null> {
  return GoalBoxRepository.deleteGoalBox(goalBoxId);
}

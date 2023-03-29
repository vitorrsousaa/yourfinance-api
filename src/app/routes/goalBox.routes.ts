import { Router } from 'express';

import GoalBoxController from '../modules/GoalsBox/controller';

const goalBoxRoutes = Router();

goalBoxRoutes.post('/', GoalBoxController.registerGoal);
goalBoxRoutes.get('/', GoalBoxController.getAllGoalsBoxOfUser);
goalBoxRoutes.get('/findUnique/:goalBoxId', GoalBoxController.findUniqueGoalBox);
goalBoxRoutes.patch('/:goalBoxId', GoalBoxController.updateBalanceOfGoal);
goalBoxRoutes.delete('/:goalBoxId', GoalBoxController.deleteGoalBox);

export default goalBoxRoutes;

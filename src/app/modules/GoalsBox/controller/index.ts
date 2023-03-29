import { Request, Response } from 'express';
import CreateGoal from '../useCases/CreateGoal';
import DeleteGoalBox from '../useCases/DeleteGoalBox';
import FindUniqueGoal from '../useCases/FindUniqueGoalBox';
import GetAllGoalsBoxOfUser from '../useCases/GetAllGoalsBoxOfUser';
import UpdateBalanceOfGoal from '../useCases/UpdateBalanceOfGoalBox';

class GoalBoxController {
  async registerGoal(request: Request, response: Response) {
    const {
      goalName, goalCost, goalTime, initialValue,
    } = request.body;

    const create = await CreateGoal(
      goalName,
      goalCost,
      goalTime,
      initialValue,
      request.user.id,
    );

    return response.status(201).json(create);
  }

  async getAllGoalsBoxOfUser(request: Request, response: Response) {
    const get = await GetAllGoalsBoxOfUser(request.user.id);

    return response.status(200).json(get);
  }

  async updateBalanceOfGoal(request: Request, response: Response) {
    const { goalBoxId } = request.params;
    const { balanceValue, modeSum } = request.body;
    const find = await UpdateBalanceOfGoal(request.user.id, goalBoxId, balanceValue, modeSum);

    return response.status(200).json(find);
  }

  async findUniqueGoalBox(request: Request, response: Response) {
    const { goalBoxId } = request.params;
    const find = await FindUniqueGoal(request.user.id, goalBoxId);

    return response.status(200).json(find);
  }

  async deleteGoalBox(request: Request, response: Response) {
    const { goalBoxId } = request.params;
    await DeleteGoalBox(goalBoxId);

    return response.sendStatus(204);
  }
}

export default new GoalBoxController();

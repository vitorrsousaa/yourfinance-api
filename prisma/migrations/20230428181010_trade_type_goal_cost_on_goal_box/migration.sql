/*
  Warnings:

  - Changed the type of `goalCost` on the `GoalBox` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "GoalBox" DROP COLUMN "goalCost",
ADD COLUMN     "goalCost" INTEGER NOT NULL;

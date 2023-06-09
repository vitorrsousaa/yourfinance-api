/*
  Warnings:

  - You are about to drop the column `feedbackCategoryId` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the `FeedbackCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_feedbackCategoryId_fkey";

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "feedbackCategoryId";

-- DropTable
DROP TABLE "FeedbackCategory";

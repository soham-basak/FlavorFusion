/*
  Warnings:

  - You are about to drop the column `options` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "options",
ADD COLUMN     "oprions" JSONB[];

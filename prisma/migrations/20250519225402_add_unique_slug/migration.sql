/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Restaurant_slug_idx";

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_slug_key" ON "Restaurant"("slug");

/*
  Warnings:

  - You are about to alter the column `imageid` on the `jobs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `Int`.

*/
-- AlterTable
ALTER TABLE `jobs` MODIFY `imageid` INTEGER NOT NULL;

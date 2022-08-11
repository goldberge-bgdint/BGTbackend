/*
  Warnings:

  - You are about to drop the column `sallary` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `shift` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `timing` on the `jobs` table. All the data in the column will be lost.
  - You are about to alter the column `type` on the `jobs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(50)`.
  - Added the required column `address` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageid` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nature` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacancies` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jobs` DROP COLUMN `sallary`,
    DROP COLUMN `shift`,
    DROP COLUMN `timing`,
    ADD COLUMN `address` VARCHAR(300) NOT NULL,
    ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `department` VARCHAR(200) NOT NULL,
    ADD COLUMN `imageid` VARCHAR(2000) NOT NULL,
    ADD COLUMN `nature` VARCHAR(50) NOT NULL,
    ADD COLUMN `post_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `status` VARCHAR(50) NOT NULL,
    ADD COLUMN `update_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `vacancies` INTEGER NOT NULL,
    MODIFY `description` VARCHAR(6000) NOT NULL,
    MODIFY `type` VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE `media_file` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80) NOT NULL,
    `path` VARCHAR(300) NOT NULL,
    `type` VARCHAR(80) NOT NULL,
    `active` VARCHAR(80) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `media_file_ID_key`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

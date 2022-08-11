-- CreateTable
CREATE TABLE `jobs` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NOT NULL,
    `description` VARCHAR(2000) NOT NULL,
    `shift` VARCHAR(200) NOT NULL,
    `type` VARCHAR(200) NOT NULL,
    `timing` VARCHAR(200) NOT NULL,
    `sallary` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `jobs_ID_key`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

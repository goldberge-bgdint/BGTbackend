-- CreateTable
CREATE TABLE `blogposts` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `postheading` VARCHAR(2000) NOT NULL,
    `postmessage` VARCHAR(2000) NOT NULL,

    UNIQUE INDEX `ID_UNIQUE`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

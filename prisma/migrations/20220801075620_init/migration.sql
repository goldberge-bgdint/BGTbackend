-- CreateTable
CREATE TABLE `contact` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(80) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `message` VARCHAR(1000) NOT NULL,
    `status` VARCHAR(200) NOT NULL DEFAULT 'pending',
    `create_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `contact_ID_key`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

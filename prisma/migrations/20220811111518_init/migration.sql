-- CreateTable
CREATE TABLE `job_applicant` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `job_id` INTEGER NOT NULL,
    `name` VARCHAR(300) NOT NULL,
    `email` VARCHAR(400) NOT NULL,
    `number` INTEGER NOT NULL,
    `coverletter` VARCHAR(4000) NOT NULL,
    `mediafiles_resume_id` INTEGER NOT NULL,
    `status` VARCHAR(200) NOT NULL DEFAULT 'pending',
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `job_applicant_ID_key`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

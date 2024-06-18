/*
  Warnings:

  - Added the required column `isPasswordVerified` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordRecoveryToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verificationToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verify` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isPasswordVerified" BOOLEAN NOT NULL,
ADD COLUMN     "passwordRecoveryToken" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL,
ADD COLUMN     "verificationToken" TEXT NOT NULL,
ADD COLUMN     "verify" BOOLEAN NOT NULL;

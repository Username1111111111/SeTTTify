/*
  Warnings:

  - Made the column `createdAt` on table `Collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Like` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Tag` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Topic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Topic" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET NOT NULL;

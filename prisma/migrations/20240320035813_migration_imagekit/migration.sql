-- AlterTable
ALTER TABLE "team_members" ADD COLUMN     "pending" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "profileImageId" TEXT;

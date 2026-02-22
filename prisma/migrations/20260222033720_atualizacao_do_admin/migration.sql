-- CreateEnum
CREATE TYPE "RegraAdmin" AS ENUM ('admin', 'consumer');

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "regra" "RegraAdmin" NOT NULL DEFAULT 'consumer';

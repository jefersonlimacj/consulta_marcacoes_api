-- AlterTable
ALTER TABLE "participacao" ADD COLUMN     "presenca" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "status_feira" SET DEFAULT 'PENDENTE';

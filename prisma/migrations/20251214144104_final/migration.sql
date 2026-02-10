/*
  Warnings:

  - The values [REALIZADO] on the enum `ExameStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `medicoId` on the `marcacoes` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `marcacoes` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExameStatus_new" AS ENUM ('AGUARDANDO', 'MARCADO', 'CANCELADO');
ALTER TABLE "public"."marcacoes" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "marcacoes" ALTER COLUMN "status" TYPE "ExameStatus_new" USING ("status"::text::"ExameStatus_new");
ALTER TYPE "ExameStatus" RENAME TO "ExameStatus_old";
ALTER TYPE "ExameStatus_new" RENAME TO "ExameStatus";
DROP TYPE "public"."ExameStatus_old";
ALTER TABLE "marcacoes" ALTER COLUMN "status" SET DEFAULT 'MARCADO';
COMMIT;

-- DropForeignKey
ALTER TABLE "marcacoes" DROP CONSTRAINT "marcacoes_medicoId_fkey";

-- AlterTable
ALTER TABLE "marcacoes" DROP COLUMN "medicoId",
DROP COLUMN "tipo",
ADD COLUMN     "lider_id" BIGINT,
ADD COLUMN     "medico_id" BIGINT,
ADD COLUMN     "retorno" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tipo_exame" TEXT,
ALTER COLUMN "data_marcada" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" ADD COLUMN     "telefone_s" TEXT;

-- AddForeignKey
ALTER TABLE "marcacoes" ADD CONSTRAINT "marcacoes_lider_id_fkey" FOREIGN KEY ("lider_id") REFERENCES "lider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marcacoes" ADD CONSTRAINT "marcacoes_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "medico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

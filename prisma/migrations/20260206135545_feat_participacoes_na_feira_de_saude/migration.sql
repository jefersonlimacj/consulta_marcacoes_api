-- CreateEnum
CREATE TYPE "StatusFeira" AS ENUM ('AGUARDANDO', 'PENDENTE', 'CONFIRMADA', 'CANCELADA', 'CONCLUIDO');

-- AlterTable
ALTER TABLE "marcacoes" ALTER COLUMN "status" SET DEFAULT 'AGUARDANDO';

-- CreateTable
CREATE TABLE "participacao" (
    "id" BIGSERIAL NOT NULL,
    "paciente_id" BIGINT NOT NULL,
    "lider_id" BIGINT NOT NULL,
    "status_feira" "StatusFeira" NOT NULL DEFAULT 'AGUARDANDO',
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cardiologista" BOOLEAN NOT NULL DEFAULT false,
    "ginecologista" BOOLEAN NOT NULL DEFAULT false,
    "ortopedista" BOOLEAN NOT NULL DEFAULT false,
    "urologista" BOOLEAN NOT NULL DEFAULT false,
    "oftalmologista" BOOLEAN NOT NULL DEFAULT false,
    "odonto" BOOLEAN NOT NULL DEFAULT false,
    "usg" BOOLEAN NOT NULL DEFAULT false,
    "mamografia" BOOLEAN NOT NULL DEFAULT false,
    "eletrocardiograma" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "participacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "participacao" ADD CONSTRAINT "participacao_lider_id_fkey" FOREIGN KEY ("lider_id") REFERENCES "lider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participacao" ADD CONSTRAINT "participacao_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

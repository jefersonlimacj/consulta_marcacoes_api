-- CreateEnum
CREATE TYPE "ExameStatus" AS ENUM ('MARCADO', 'REALIZADO', 'CANCELADO');

-- CreateTable
CREATE TABLE "usuario" (
    "id" BIGSERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lider" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "lider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3),
    "telefone" TEXT,
    "n_sus" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidades" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "especialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medico" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "crm" TEXT NOT NULL,

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marcacoes" (
    "id" BIGSERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "data_marcada" TIMESTAMP(3) NOT NULL,
    "data_atendimento" TIMESTAMP(3),
    "status" "ExameStatus" NOT NULL DEFAULT 'MARCADO',
    "observacoes" VARCHAR(255),
    "paciente_id" BIGINT NOT NULL,
    "especialidade_id" BIGINT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "medicoId" BIGINT,

    CONSTRAINT "marcacoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "pacientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "especialidades_nome_key" ON "especialidades"("nome");

-- AddForeignKey
ALTER TABLE "marcacoes" ADD CONSTRAINT "marcacoes_especialidade_id_fkey" FOREIGN KEY ("especialidade_id") REFERENCES "especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marcacoes" ADD CONSTRAINT "marcacoes_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marcacoes" ADD CONSTRAINT "marcacoes_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

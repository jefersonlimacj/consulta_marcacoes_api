/*
  Warnings:

  - A unique constraint covering the columns `[paciente_id]` on the table `participacao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "participacao_paciente_id_key" ON "participacao"("paciente_id");

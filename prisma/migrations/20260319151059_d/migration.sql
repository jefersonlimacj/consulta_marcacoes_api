/*
  Warnings:

  - You are about to drop the column `cardiologistaP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `clinicoP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `eletrocardiogramaP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `ginecologistaP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `mamografiaP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `odontoP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `oftalmologistaP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `ortopedistaP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `preventivoP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `raioxP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `urologistaP` on the `participacao` table. All the data in the column will be lost.
  - You are about to drop the column `usgP` on the `participacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "participacao" DROP COLUMN "cardiologistaP",
DROP COLUMN "clinicoP",
DROP COLUMN "eletrocardiogramaP",
DROP COLUMN "ginecologistaP",
DROP COLUMN "mamografiaP",
DROP COLUMN "odontoP",
DROP COLUMN "oftalmologistaP",
DROP COLUMN "ortopedistaP",
DROP COLUMN "preventivoP",
DROP COLUMN "raioxP",
DROP COLUMN "urologistaP",
DROP COLUMN "usgP",
ADD COLUMN     "cardiologista_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "clinico_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "eletrocardiograma_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ginecologista_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mamografia_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "odonto_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "oftalmologista_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ortopedista_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "preventivo_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "raiox_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "urologista_p" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "usg_p" BOOLEAN NOT NULL DEFAULT false;

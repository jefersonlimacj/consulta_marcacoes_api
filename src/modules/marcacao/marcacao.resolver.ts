import { prisma } from "../../prisma";
import { ExameStatus, Marcacao } from "@prisma/client";

export const marcacaoResolvers = {
  Query: {
    marcacoes: async () => {
      return await prisma.marcacao.findMany();
    },
    marcacao: async (_: any, args: { id: number }) => {
      return await prisma.marcacao.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Marcacao: {
    id: (parent: Marcacao) => String(parent.id),
    paciente: async (parent: Marcacao) => {
      return parent.pacienteId
        ? await prisma.paciente.findUnique({
            where: { id: parent.pacienteId },
          })
        : null;
    },
    especialidade: async (parent: Marcacao) => {
      return parent.especialidadeId
        ? await prisma.especialidade.findUnique({
            where: { id: parent.especialidadeId },
          })
        : null;
    },
    lider: async (parent: Marcacao) => {
      return parent.liderId
        ? await prisma.lider.findFirst({
            where: { id: parent.liderId },
          })
        : null;
    },
    medico: async (parent: Marcacao) => {
      return parent.medicoId
        ? prisma.medico.findFirst({
            where: {
              id: parent.medicoId,
            },
          })
        : null;
    },
  },
  Mutation: {
    criarMarcacao: async (
      _: any,
      {
        input,
      }: {
        input: {
          pacienteId: number;
          especialidadeId: number;
          tipoExame: string;
          dataAtendimento: Date;
          liderId: number;
          dataMarcada: Date;
          medicoId?: number;
          status: ExameStatus;
          observacoes?: string;
          retorno?: boolean;
        };
      }
    ) => {
      const novaMarcacao = await prisma.marcacao.create({
        data: {
          pacienteId: input.pacienteId,
          especialidadeId: input.especialidadeId,
          tipoExame: input.tipoExame,
          dataAtendimento: input.dataAtendimento,
          liderId: input.liderId,
          dataMarcada: input.dataMarcada,
          medicoId: input.medicoId || null,
          status: input.status,
          observacoes: input.observacoes || null,
          retorno: input.retorno,
        },
        include: {
          paciente: true,
          especialidade: true,
          lider: true,
          medico: true,
        },
      });
      return novaMarcacao;
    },
    atualizarMarcacao: async (
      _: any,
      {
        id,
        input,
      }: {
        id: number;
        input: {
          pacienteId: number;
          especialidadeId: number;
          tipoExame: string;
          dataAtendimento: Date;
          liderId: number;
          dataMarcada: Date;
          medicoId?: number;
          status: ExameStatus;
          observacoes?: string;
          retorno: boolean;
        };
      }
    ) => {
      const marcacaoAtualizada = await prisma.marcacao.update({
        where: {
          id,
        },
        data: {
          pacienteId: input.pacienteId,
          especialidadeId: input.especialidadeId,
          tipoExame: input.tipoExame,
          dataAtendimento: input.dataAtendimento,
          liderId: input.liderId,
          dataMarcada: input.dataMarcada,
          medicoId: input.medicoId || null,
          status: input.status,
          observacoes: input.observacoes || null,
        },
      });
      return marcacaoAtualizada;
    },

    deletarMarcacao: async (_: any, { id }: { id: number }) => {
      await prisma.marcacao.delete({
        where: {
          id: id,
        },
      });
      return true;
    },
  },
};

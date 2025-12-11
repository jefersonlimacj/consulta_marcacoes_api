import { prisma } from "../../prisma";
import { Medico } from "@prisma/client";

export const medicoResolver = {
  Query: {
    medicos: async () => {
      return await prisma.medico.findMany();
    },
    medico: async (_: any, args: { id: number }) => {
      return await prisma.medico.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Medico: {
    id: (parent: Medico) => String(parent.id),
  },
  Mutation: {
    criarMedico: async (
      _: any,
      {
        input,
      }: {
        input: {
          nome: string;
          crm: string;
        };
      }
    ) => {
      const novoMedico = await prisma.medico.create({
        data: {
          nome: input.nome,
          crm: input.crm,
        },
      });
      return novoMedico;
    },

    atualizarMedico: async (
      _: any,
      { id, input }: { id: number; input: { nome: string; crm: string } }
    ) => {
      const medicoAtualizado = await prisma.medico.update({
        where: {
          id,
        },
        data: {
          nome: input.nome,
          crm: input.crm,
        },
      });
      return medicoAtualizado;
    },

    deletarMedico: async (_: any, args: { id: number }) => {
      await prisma.medico.delete({
        where: {
          id: args.id,
        },
      });
      return true;
    },
  },
};

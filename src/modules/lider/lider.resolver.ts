import { prisma } from "../../prisma";
import { Lider } from "../../generated/prisma/client";

export const liderResolvers = {
  Query: {
    lideres: async () => {
      return await prisma.lider.findMany();
    },
    lider: async (_: any, args: { id: number }) => {
      return await prisma.lider.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Lider: {
    id: (parent: Lider) => String(parent.id),
  },
  Mutation: {
    criarLider: async (
      _: any,
      {
        input,
      }: {
        input: {
          nome: string;
          telefone: string;
        };
      }
    ) => {
      const novoLider = await prisma.lider.create({
        data: {
          nome: input.nome,
          telefone: input.telefone,
        },
      });
      return novoLider;
    },
    atualizarLider: async (
      _: any,
      {
        id,
        input,
      }: {
        id: number;
        input: {
          nome: string;
          telefone: string;
        };
      }
    ) => {
      const liderAtualizado = await prisma.lider.update({
        where: {
          id: id,
        },
        data: {
          nome: input.nome,
          telefone: input.telefone,
        },
      });
      return liderAtualizado;
    },

    deletarLider: async (_: any, { id }: { id: number }) => {
      await prisma.lider.delete({
        where: {
          id: id,
        },
      });
      return true;
    },
  },
};

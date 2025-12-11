import { prisma } from "../../prisma";
import { Especialidade } from "../../generated/client";

export const especialidadeResolver = {
  Query: {
    especialidades: async () => {
      return await prisma.especialidade.findMany();
    },
    especialidade: async (_: any, args: { id: number }) => {
      return await prisma.especialidade.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Especialidade: {
    id: (parent: Especialidade) => String(parent.id),
  },
  Mutation: {
    criarEspecialidade: async (
      _: any,
      { input }: { input: { nome: string } }
    ) => {
      const novaEspecialidade = await prisma.especialidade.create({
        data: {
          nome: input.nome,
        },
      });
      return novaEspecialidade;
    },

    atualizarEspecialidade: async (
      _: any,
      { id, input }: { id: number; input: { nome: string } }
    ) => {
      const especialidadeAtualizada = await prisma.especialidade.update({
        where: {
          id,
        },
        data: {
          nome: input.nome,
        },
      });
      return especialidadeAtualizada;
    },
    deletarEspecialidade: async (_: any, args: { id: number }) => {
      await prisma.especialidade.delete({
        where: {
          id: args.id,
        },
      });
      return true;
    },
  },
};

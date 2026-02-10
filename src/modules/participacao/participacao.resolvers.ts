import { prisma } from "../../prisma";

export const participacaoResolvers = {
  Query: {
    participacoes: async () => {
      return await prisma.participacao.findMany({
        include: { paciente: true, lider: true },
      });
    },
    participacao: async (_: any, args: { id: number }) => {
      return await prisma.participacao.findUnique({
        where: { id: args.id },
        include: { paciente: true, lider: true },
      });
    },
  },
  Participacao: {
    id: (parent: any) => String(parent.id),
    paciente: async (parent: any) => {
      return parent.pacienteId
        ? await prisma.paciente.findUnique({
            where: { id: parent.pacienteId },
          })
        : null;
    },
    lider: async (parent: any) => {
      return parent.liderId
        ? await prisma.lider.findUnique({
            where: { id: parent.liderId },
          })
        : null;
    },
  },
  Mutation: {
    criarParticipacao: async (parent: any, { input }: any) => {
      const existing = await prisma.participacao.findUnique({
        where: { pacienteId: parseInt(input.pacienteId) },
      });

      if (existing) {
        throw new Error("Já existe uma participação para este paciente.");
      }

      const novaParticipacao = await prisma.participacao.create({
        data: {
          ...input,
        },
        include: {
          paciente: true,
          lider: true,
        },
      });

      return {
        ...novaParticipacao,
        id: String(novaParticipacao.id),
      };
    },
    atualizarParticipacao: async (_: any, args: any) => {
      return await prisma.participacao.update({
        where: { id: args.id },
        data: args.input,
        include: { paciente: true, lider: true },
      });
    },
    deletarParticipacao: async (_: any, args: any) => {
      await prisma.participacao.delete({
        where: { id: args.id },
      });
      return true;
    },
  },
};

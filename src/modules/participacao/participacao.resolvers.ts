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
      // 1. Converter IDs para BigInt para a busca e para a criação
      const pId = BigInt(input.pacienteId);
      const lId = BigInt(input.liderId);

      const existing = await prisma.participacao.findUnique({
        where: { pacienteId: pId },
      });

      if (existing) {
        throw new Error("Já existe uma participação para este paciente.");
      }

      // 2. Separar os IDs do restante do input para tratar a conexão
      const { pacienteId, liderId, ...rest } = input;

      const novaParticipacao = await prisma.participacao.create({
        data: {
          ...rest,
          // Tratando os campos que no Model são Boolean, mas no input podem vir null
          // (Opcional: Garante que null vire false como no seu Model)
          cardiologistaP: rest.cardiologistaP ?? false,
          // ... fazer para os outros se necessário

          // Conectando as relações corretamente
          paciente: {
            connect: { id: pId },
          },
          lider: {
            connect: { id: lId },
          },
        },
        include: {
          paciente: true,
          lider: true,
        },
      });

      // 3. Retornar convertendo BigInt para String (GraphQL não aceita BigInt nativo)
      return {
        ...novaParticipacao,
        id: String(novaParticipacao.id),
        pacienteId: String(novaParticipacao.pacienteId),
        liderId: String(novaParticipacao.liderId),
        criadoEm: novaParticipacao.criadoEm.toISOString(),
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

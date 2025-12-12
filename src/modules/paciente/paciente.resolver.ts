import { prisma } from "../../prisma";
import { Paciente } from "@prisma/client";

export const pacienteResolver = {
  Query: {
    pacientes: async () => {
      return await prisma.paciente.findMany();
    },
    paciente: async (_: any, args: { id: number }) => {
      return await prisma.paciente.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Paciente: {
    id: (parent: Paciente) => String(parent.id),
  },
  Mutation: {
    criarPaciente: async (
      _: any,
      {
        input,
      }: {
        input: {
          nome: string;
          cpf: string;
          dataNascimento: Date;
          telefone: string;
          telefoneS: string;
          nSus: string;
        };
      }
    ) => {
      const novoPaciente = await prisma.paciente.create({
        data: {
          nome: input.nome,
          cpf: input.cpf,
          dataNascimento: input.dataNascimento,
          telefone: input.telefone,
          telefoneS: input.telefoneS,
          nSus: input.nSus,
        },
      });
      return novoPaciente;
    },

    atualizarPaciente: async (
      _: any,
      {
        id,
        input,
      }: {
        id: number;
        input: {
          nome: string;
          cpf: string;
          dataNascimento: Date;
          telefone: string;
          telefoneS: string;
          nSus: string;
        };
      }
    ) => {
      const pacienteAtualizado = await prisma.paciente.update({
        where: {
          id,
        },
        data: {
          nome: input.nome,
          cpf: input.cpf,
          dataNascimento: input.dataNascimento,
          telefone: input.telefone,
          telefoneS: input.telefoneS,
          nSus: input.nSus,
        },
      });
      return pacienteAtualizado;
    },

    deletarPaciente: async (_: any, data: { id: number }) => {
      await prisma.paciente.delete({
        where: {
          id: data.id,
        },
      });
      return true;
    },
  },
};

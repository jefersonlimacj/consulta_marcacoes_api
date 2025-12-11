import { prisma } from "../../prisma";
import { Usuario } from "../../generated/client";

export const usuarioResolver = {
  Query: {
    usuarios: async () => {
      return await prisma.usuario.findMany();
    },
  },

  Usuario: {
    id: (parent: Usuario) => String(parent.id),
  },

  Mutation: {
    criarUsuario: async (
      _: any,
      { input }: { input: { username: string; password: string } }
    ) => {
      const novoUsuario = await prisma.usuario.create({
        data: {
          username: input.username,
          password: input.password,
        },
      });
      return novoUsuario;
    },

    login: async (
      _: any,
      { input }: { input: { username: string; password: string } }
    ) => {
      const usuario = await prisma.usuario.findUnique({
        where: {
          username: input.username,
        },
      });

      if (!usuario) {
        throw new Error("Usuário não encontrado");
      }

      if (usuario.password !== input.password) {
        throw new Error("Senha incorreta");
      }

      return usuario;
    },

    atualizarUsuario: async (
      _: any,
      {
        id,
        input,
      }: { id: number; input: { username: string; password: string } }
    ) => {
      const usuarioAtualizado = await prisma.usuario.update({
        where: {
          id
        },
        data: {
          username: input.username,
          password: input.password,
        },
      });
      return usuarioAtualizado;
    },

    deletarUsuario: async (_: any, data: { id: number }) => {
      await prisma.usuario.delete({
        where: {
          id: data.id,
        },
      });
      return true;
    },
  },
};

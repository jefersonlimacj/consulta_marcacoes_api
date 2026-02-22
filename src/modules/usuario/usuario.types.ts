import gql from "graphql-tag";

export const usuarioTypeDefs = gql`
  type Usuario {
    id: ID!
    username: String!
    password: String!
    regra: RegraAdmin
  }
  type Query {
    usuarios: [Usuario!]!
    usuario(id: ID!): Usuario
  }

  input UsuarioInput {
    username: String!
    password: String!
    regra: RegraAdmin
  }

  enum RegraAdmin {
    admin
    consumer
  }

  type Mutation {
    criarUsuario(input: UsuarioInput!): Usuario!
    atualizarUsuario(id: ID!, input: UsuarioInput): Usuario
    deletarUsuario(id: ID!): Boolean!
    login(input: UsuarioInput!): Usuario!
  }
`;

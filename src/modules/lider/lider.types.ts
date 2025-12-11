import gql from "graphql-tag";

export const liderTypeDefs = gql`
  type Lider {
    id: ID!
    nome: String!
    telefone: String!
  }

  type Query {
    lideres: [Lider!]!
    lider(id: ID!): Lider
  }

  input LiderInput {
    nome: String!
    telefone: String!
  }

  type Mutation {
    criarLider(input: LiderInput!): Lider!
    atualizarLider(id: ID!, input: LiderInput!): Lider
    deletarLider(id: ID!): Boolean!
  }
`;

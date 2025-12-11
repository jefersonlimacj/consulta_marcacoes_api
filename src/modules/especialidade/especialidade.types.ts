import gql from "graphql-tag";

export const especialidadeTypeDefs = gql`
  type Especialidade {
    id: ID!
    nome: String!
    exames: [Marcacao!]!
  }

  type Query {
    especialidades: [Especialidade!]!
    especialidade(id: ID!): Especialidade
  }

  input EspecialidadeInput {
    nome: String!
  }

  type Mutation {
    criarEspecialidade(input: EspecialidadeInput!): Especialidade!
    atualizarEspecialidade(id: ID!, input: EspecialidadeInput!): Especialidade
    deletarEspecialidade(id: ID!): Boolean!
  }
`;

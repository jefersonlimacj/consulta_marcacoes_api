import gql from "graphql-tag";

export const medicoTypeDefs = gql`
  type Medico {
    id: ID!
    nome: String!
    crm: String!
    exames: [Marcacao!]!
  }

  type Query {
    medicos: [Medico!]!
    medico(id: ID!): Medico
  }

  input MedicoInput {
    nome: String!
    crm: String!
  }
  type Mutation {
    criarMedico(input: MedicoInput!): Medico!
    atualizarMedico(id: ID!, input: MedicoInput!): Medico
    deletarMedico(id: ID!): Boolean!
  }
`;

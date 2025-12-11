import gql from "graphql-tag"

export const pacienteTypeDefs = gql`
    type Paciente {
        id: ID!
        nome: String!
        cpf: String!
        dataNascimento: DateTime!
        telefone: String!
        nSus: String!
        exames: [Marcacao!]!
    }

    type Query {
        pacientes: [Paciente!]!
        paciente(id: ID!): Paciente
    }

    input PacienteInput {
        nome: String
        cpf: String
        dataNascimento: DateTime
        telefone: String
        nSus: String
    }

    type Mutation {
        criarPaciente(input: PacienteInput!): Paciente!
        atualizarPaciente(id: ID!, input: PacienteInput!): Paciente
        deletarPaciente(id: ID!): Boolean!
    }
`;
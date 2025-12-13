import gql from "graphql-tag";

export const marcacaoTypeDefs = gql`
  type Marcacao {
    id: ID!
    paciente: Paciente
    pacienteId: ID
    especialidade: Especialidade
    especialidadeId: ID
    tipoExame: String
    dataAtendimento: DateTime
    lider: Lider
    liderId: ID
    dataMarcada: DateTime
    observacoes: String
    medico: Medico
    medicoId: ID
    status: ExameStatus
    retorno: Boolean
  }
  enum ExameStatus {
    AGUARDANDO
    MARCADO
    CANCELADO
  }

  type Query {
    marcacoes: [Marcacao!]!
    marcacao(id: ID!): Marcacao
  }

  input MarcacaoInput {
    pacienteId: ID!
    especialidadeId: ID!
    tipoExame: String
    dataAtendimento: DateTime!
    liderId: ID
    dataMarcada: DateTime
    medicoId: ID
    status: ExameStatus!
    observacoes: String
    retorno: Boolean
  }

  input MarcacaoInputUpdate {
    pacienteId: ID
    especialidadeId: ID
    tipoExame: String
    dataAtendimento: DateTime
    liderId: ID
    dataMarcada: DateTime
    medicoId: ID
    status: ExameStatus
    observacoes: String
    retorno: Boolean
  }

  type Mutation {
    criarMarcacao(input: MarcacaoInput): Marcacao
    atualizarMarcacao(id: ID!, input: MarcacaoInputUpdate!): Marcacao
    deletarMarcacao(id: ID!): Boolean!
  }
`;

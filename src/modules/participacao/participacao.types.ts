import gql from "graphql-tag";

export const participacaoTypes = gql`
  type Participacao {
    id: ID!
    pacienteId: ID!
    paciente: Paciente
    liderId: ID!
    lider: Lider
    statusFeira: StatusFeira
    presenca: Boolean
    criadoEm: String!
    cardiologista: Boolean
    ginecologista: Boolean
    ortopedista: Boolean
    urologista: Boolean
    oftalmologista: Boolean
    odonto: Boolean
    usg: Boolean
    mamografia: Boolean
    eletrocardiograma: Boolean
  }

  enum StatusFeira {
    AGUARDANDO
    PENDENTE
    CONFIRMADA
    CANCELADA
    CONCLUIDO
  }

  type Query {
    participacoes: [Participacao!]!
    participacao(id: ID!): Participacao
  }

  input ParticipacaoInput {
    pacienteId: ID!
    liderId: ID!
    statusFeira: StatusFeira
    presenca: Boolean
    cardiologista: Boolean
    ginecologista: Boolean
    ortopedista: Boolean
    urologista: Boolean
    oftalmologista: Boolean
    odonto: Boolean
    usg: Boolean
    mamografia: Boolean
    eletrocardiograma: Boolean
  }

  input ParticipacaoInputUpdate {
    pacienteId: ID
    liderId: ID
    statusFeira: StatusFeira
    presenca: Boolean
    cardiologista: Boolean
    ginecologista: Boolean
    ortopedista: Boolean
    urologista: Boolean
    oftalmologista: Boolean
    odonto: Boolean
    usg: Boolean
    mamografia: Boolean
    eletrocardiograma: Boolean
  }

  type Mutation {
    criarParticipacao(input: ParticipacaoInput): Participacao
    atualizarParticipacao(
      id: ID!
      input: ParticipacaoInputUpdate!
    ): Participacao
    deletarParticipacao(id: ID!): Boolean!
  }
`;

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
    cardiologistaP: Boolean
    ginecologista: Boolean
    ginecologistaP: Boolean
    ortopedista: Boolean
    ortopedistaP: Boolean
    urologista: Boolean
    urologistaP: Boolean
    oftalmologista: Boolean
    oftalmologistaP: Boolean
    odonto: Boolean
    odontoP: Boolean
    usg: Boolean
    usgP: Boolean
    mamografia: Boolean
    mamografiaP: Boolean
    eletrocardiograma: Boolean
    eletrocardiogramaP: Boolean
    clinico: Boolean
    clinicoP: Boolean
    preventivo: Boolean
    preventivoP: Boolean
    raiox: Boolean
    raioxP: Boolean
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
    cardiologistaP: Boolean
    ginecologista: Boolean
    ginecologistaP: Boolean
    ortopedista: Boolean
    ortopedistaP: Boolean
    urologista: Boolean
    urologistaP: Boolean
    oftalmologista: Boolean
    oftalmologistaP: Boolean
    odonto: Boolean
    odontoP: Boolean
    usg: Boolean
    usgP: Boolean
    mamografia: Boolean
    mamografiaP: Boolean
    eletrocardiograma: Boolean
    eletrocardiogramaP: Boolean
    clinico: Boolean
    clinicoP: Boolean
    preventivo: Boolean
    preventivoP: Boolean
    raiox: Boolean
    raioxP: Boolean
  }

  input ParticipacaoInputUpdate {
    pacienteId: ID
    liderId: ID
    statusFeira: StatusFeira
    presenca: Boolean
    cardiologista: Boolean
    cardiologistaP: Boolean
    ginecologista: Boolean
    ginecologistaP: Boolean
    ortopedista: Boolean
    ortopedistaP: Boolean
    urologista: Boolean
    urologistaP: Boolean
    oftalmologista: Boolean
    oftalmologistaP: Boolean
    odonto: Boolean
    odontoP: Boolean
    usg: Boolean
    usgP: Boolean
    mamografia: Boolean
    mamografiaP: Boolean
    eletrocardiograma: Boolean
    eletrocardiogramaP: Boolean
    clinico: Boolean
    clinicoP: Boolean
    preventivo: Boolean
    preventivoP: Boolean
    raiox: Boolean
    raioxP: Boolean
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

import { mergeTypeDefs } from "@graphql-tools/merge";

import { usuarioTypeDefs } from "../modules/usuario/usuario.types";
import { liderTypeDefs } from "../modules/lider/lider.types";
import { especialidadeTypeDefs } from "../modules/especialidade/especialidade.types";
import { marcacaoTypeDefs } from "../modules/marcacao/marcacao.types";
import { pacienteTypeDefs } from "../modules/paciente/paciente.types";
import { medicoTypeDefs } from "../modules/medico/medico.types";
import gql from "graphql-tag";

const baseTypeDefs = gql`
  scalar DateTime
`;
const typeDefsArray = [
  baseTypeDefs,
  usuarioTypeDefs,
  liderTypeDefs,
  especialidadeTypeDefs,
  marcacaoTypeDefs,
  pacienteTypeDefs,
  medicoTypeDefs,
];

export const typeDefs = mergeTypeDefs(typeDefsArray);

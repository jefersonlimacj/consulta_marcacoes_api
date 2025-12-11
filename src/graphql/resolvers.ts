import { mergeResolvers } from "@graphql-tools/merge";

import { usuarioResolver } from "../modules/usuario/usuario.reseolver";
import { pacienteResolver } from "../modules/paciente/paciente.resolver";
import { medicoResolver } from "../modules/medico/medico.resolver";
import { especialidadeResolver } from "../modules/especialidade/especialidade.resolver";
import { liderResolvers } from "../modules/lider/lider.resolver";
import { marcacaoResolvers } from "../modules/marcacao/marcacao.resolver";

export const resolvers = mergeResolvers([
  usuarioResolver,
  pacienteResolver,
  medicoResolver,
  especialidadeResolver,
  liderResolvers,
  marcacaoResolvers
]);

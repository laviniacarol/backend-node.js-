import type { GetRequest } from "../dtos/get.request.ts";
import IdadeHelper from "./idade.helper.ts";

export default class BemVindoHelper {
    static criarMensagem(input: GetRequest): string {
        let mensagem = "Boas vindas ";
        if (input.nome) {
            mensagem += input.nome + ", ";
        } else {
            mensagem = mensagem + "visitante" + ", "
        }

        if(input.idade) {
             const ehAdulto = IdadeHelper.ehAdulto(parseInt(input.idade))
           
             if (ehAdulto) {
                mensagem = mensagem + " você é maior de idade"
             } else {
                mensagem = mensagem + " você é menor de idade"
             }

        } else {
            mensagem = mensagem + "não consegui identificar sua idade."
        }


        return mensagem + "!";

    }
}

import type { GetRequest } from "../dtos/get.request.ts";
import type { GetResponse } from "../dtos/get.response.ts";
import bemvindoHelper from "../helpers/bemvindo.helper.ts";

export default class GetHandler {
    static buildResponse(input: GetRequest): GetResponse {
        const response: GetResponse = {
            mensagem: bemvindoHelper.criarMensagem(input)
        }
        return response;
    }
}
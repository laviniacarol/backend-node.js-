import type { PostRequest } from "../dtos/post.request.ts";
import IdadeHelper from "../helpers/idade.helper.ts";
import DataHelper from "../helpers/data.helper.ts";
import type { PostResponse } from "../dtos/post.response.ts";

export default class PostHandler {

    static buildResponse(input: PostRequest): PostResponse {
        const response: PostResponse = {
            id: Math.random().toString(),
            nome: input.nome,
            email: input.email,
            ehAdulto: parseInt(input.idade) >= 18,
            dataCadastro: DataHelper.obterDataAgora()
        }
        return response
    }
}


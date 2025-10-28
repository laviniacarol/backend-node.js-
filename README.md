Contexto do repositório

Backend em Node.js com Express: Esse projeto serve como backend para receber requisições HTTP.
Sobre o BemVindoHelper

Esse helper cria uma mensagem de boas-vindas personalizada baseada nos dados que você envia via requisição (GetRequest).

Como funciona:

Recebe os dados:

input: GetRequest


Espera algo como { nome?: string, idade?: string }.

Monta a mensagem inicial:

let mensagem = "Boas vindas ";
if (input.nome) {
    mensagem += input.nome + ", ";
} else {
    mensagem += "visitante, ";
}


Se houver nome, usa ele; senão, chama de "visitante".

Verifica idade:

if(input.idade) {
     const ehAdulto = IdadeHelper.ehAdulto(parseInt(input.idade))
     if (ehAdulto) {
        mensagem += " você é maior de idade"
     } else {
        mensagem += " você é menor de idade"
     }
} else {
    mensagem += "não consegui identificar sua idade."
}


Usa o helper IdadeHelper.ehAdulto() para checar se a pessoa é maior de idade.

Se idade não estiver presente, avisa que não conseguiu identificar.

Finaliza a mensagem:

return mensagem + "!";Helpers: Mantêm a lógica separada, deixando os controllers limpos.

DTOs (GetRequest): Garantem que os dados recebidos têm o formato esperado.

TypeScript: Evita erros de tipo em tempo de compilação.

Integração com Postman: Facilita testes das rotas de API.

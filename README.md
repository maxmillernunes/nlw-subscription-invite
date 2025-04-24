# nlw-subscription-invite 🚀

## Descrição

Sistema de inscrição e convite para eventos, desenvolvido durante a **Next Level Week** da Rocketseat.  
Permite que usuários se inscrevam, compartilhem links de convite personalizados e acompanhem o ranking baseado na quantidade de cliques recebidos.

---

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
  - [1. Inscrição de Usuário](#1-inscrição-de-usuário)
  - [2. Acessar Link de Convite](#2-acessar-link-de-convite)
  - [3. Obter Ranking de Usuários](#3-obter-ranking-de-usuários)
- [Executando Localmente](#executando-localmente)
- [Contribuindo](#contribuindo)
- [Autor](#autor)
- [Licença](#licença)

---

## Funcionalidades

- Inscrição de usuários via API com nome, e-mail e ID opcional do indicante
- Geração automática de link de convite único para cada usuário
- Rastreamento da quantidade de cliques em cada link de convite
- Ranking dos usuários com maior número de cliques nos seus convites

---

## Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Fastify**
- **Zod**
- **Drizzle**
- **PostgreSQL**
- **Redis** com **ioRedis**
- **Biome**
- **tsup-node**
- **Docker**

---

## Como Usar

### 1. Inscrição de Usuário

**Endpoint:** `POST /subscriptions`

**Descrição:** Inscreve um usuário no evento. Recebe nome, e-mail e opcionalmente o ID do usuário que indicou.

**Exemplo de requisição:**

```
POST /subscriptions
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "referrerId": "123e4567-e89b-12d3-a456-426614174000" // opcional
}
```

**Resposta esperada:**

```
{
  "id": "987e6543-e21b-12d3-a456-426614174999",
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "inviteLink": "http://localhost:3333/invite/987e6543-e21b-12d3-a456-426614174999"
}
```

---

### 2. Acessar Link de Convite

**Endpoint:** `GET /invite/:userId`

**Descrição:** Quando alguém acessa o link de convite, o sistema registra o clique para o usuário indicado.

**Exemplo de requisição:**

```
GET /invite/987e6543-e21b-12d3-a456-426614174999
```

**Resposta esperada:**

- Redirecionamento para a página do evento ou mensagem confirmando o clique.

---

### 3. Obter Ranking de Usuários

**Endpoint:** `GET /ranking`

**Descrição:** Retorna a lista dos usuários ordenados pelo número de cliques recebidos em seus convites.

**Exemplo de requisição:**

```
GET /ranking
```

**Resposta esperada:**

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Maria Oliveira",
    "clicks": 25
  },
  {
    "id": "987e6543-e21b-12d3-a456-426614174999",
    "name": "João Silva",
    "clicks": 10
  }
]
```

---

## Executando Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nlw-subscription-invite.git
cd nlw-subscription-invite
```

2. Instale as dependências:

```bash
npm install
```

Ou

```bash
npm install
```

3. Configure as variáveis de ambiente, se necessário (ex: banco de dados, porta).

4. Inicie o servidor em modo desenvolvimento:

```bash
npm run dev
```

Ou

```bash
yarn dev
```

5. Utilize ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar as rotas.

---

## Contribuindo

Contribuições são muito bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o seu fork (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request neste repositório

---

## Autor

Desenvolvido por **Maxmiller Nunes** durante a [Next Level Week](https://nextlevelweek.com/) da Rocketseat.

- Email: maxmillernunes11@gmail.com
- LinkedIn: [linkedin.com/in/maxmillernunes](https://linkedin.com/in/maxmillernunes/)

---

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

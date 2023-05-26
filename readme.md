# yourFinance - Server

Um parágrafo da descrição do projeto vai aqui

## Tópicos

<div>
 • <a href="#-sobre-o-your-finance">Sobre o yourFinance</a> </br>
 • <a href="#-tecnologias">Tecnologias</a> </br>
 • <a href="#-pre-requisitos">Pré requisitos</a> </br>
 • <a href="#-rodando-a-aplicacao">Rodando a aplicação</a> </br>
 • <a href="#-executando-os-testes">Executando os testes</a> </br>
 • <a href="#-colaborando">Colaborando</a> </br>
 • <a href="#user-content--licença">Licença</a></br>
</div>

## 💰 Sobre o yourFinance

O **yourFinance** é um software para gerenciamento e controle de finanças pessoais!

O projeto foi desenvolvido com o intuito de eliminar a utilização de planilhas para gerenciamento de controle financeiro. Com o armazenamento das informações através de transações, que são chamadas de movs, e podem ser definidas através de categorias, modalidades e tipo. A partir das definições do usuário, o projeto apresenta algumas informações em tela, e realiza determinadas análises da usabilidade do usuário.

## 🛠️ Tecnologias

Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

#### **API** ( [NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/) )

- [Express](https://expressjs.com/pt-br/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Prisma](https://www.prisma.io/)
- [Postgres SQL](https://www.postgresql.org/)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[Prettier](https://prettier.io/)** + **[EditorConfig](https://editorconfig.org/)**
- Versionamento: **[Git](https://git-scm.com)**
- Padronização de código: **[ESLint](https://eslint.org/)**

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: <br />
→ [Git](https://git-scm.com);<br />
→ [Node.js](https://nodejs.org/en/);<br />
→ [Docker](https://www.docker.com/); <br />

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/yourFinanceApp/api.git

# Vá para a pasta da aplicação Back end
$ cd api

# Instale as dependências
yarn install
```

Após a instalação das dependências, utilize o comando abaixo para criar o container na porta 5432.

```
docker run --name yourfinance -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres.
```

Adicione na raiz do projeto um arquivo `.env`

```
DATABASE_URL="postgresql://root:root@localhost:5432/yourfinance?schema=public"
```

Logo após, você já pode rodar a aplicação com os comandos abaixo.

```bash
# Crie todas as migrations no banco
$ yarn migrations

# Rode a aplicação
yarn dev
# A aplicação será aberta na porta:3001 - acesse http://localhost:3001
```

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 💭 Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto).

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/yourFinanceApp/api/blob/main/LICENSE) para detalhes.

# 💭 Como contribuir

Caso queira contribuir, seja corrigindo bugs, adicionando comentários ou novas features, você pode seguir o seguinte tutorial:

- Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** desse repositório
- **[Clone](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository)** o repositório que você fez o fork em seu computador
- Crie uma branch com a sua feature: `git checkout -b minha-alteracao`
- Envie suas alterações para a _staging area_: `git add .`
- Faça um commit contando o que você fez: `git commit -m "feat: minha nova alteracao!"`
- Faça um push para a sua branch: `git push origin minha-alteracao`
- Agora é só abrir uma _pull request!_

_Caso tenha alguma dúvida, confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.pt_br.md) :)_

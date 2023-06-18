# yourFinance

<img src='https://github.com/yourFinanceApp/api/blob/main/.github/images/Splash.png' alt='Foto inicial do projeto' height="200px" align="center" />

## Tópicos

<div>
 • <a href="#-sobre-o-yourfinance">Sobre o yourFinance</a> </br>
 • <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> </br>
 • <a href="#-pré-requisitos">Pré requisitos</a> </br>
 • <a href="#-rodando-a-aplicação">Rodando a aplicação</a> </br>
 • <a href="#%EF%B8%8F-executando-os-testes">Executando os testes</a> </br>
 • <a href="#-colaborando">Colaborando</a> </br>
 • <a href="#user-content--licença">Licença</a></br>
 • <a href="#colaboradores">Colaboradores</a></br>
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

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: <br />
→ [Git](https://git-scm.com);<br />
→ [Node.js](https://nodejs.org/en/);<br />
→ [Docker](https://www.docker.com/); <br />

## 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/yourFinanceApp/api.git

# Vá para a pasta da aplicação Back end
$ cd api

# Instale as dependências
$ yarn install
```

Após a instalação das dependências, utilize o comando abaixo para criar o container na porta 5432.

```
docker run --name yourfinance -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Adicione na raiz do projeto um arquivo `.env` com as seguintes configurações.

```
DATABASE_URL="postgresql://root:root@localhost:5432/yourfinance?schema=public"
```

Logo após, você já pode rodar a aplicação com os comandos abaixo.

```bash
# Crie todas as migrations e seed no banco
$ yarn migrations

# Rode a aplicação
$ yarn dev

# A aplicação será aberta na porta:3001 - acesse http://localhost:3001/api
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

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/vitorr-sousaa/">
        <img src="https://avatars.githubusercontent.com/u/94024958?v=4" width="100px;" alt="Foto do Vitor Sousa no GitHub"/><br>
        <sub>
          <b>Vitor Sousa</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/luucassjooao">
        <img src="https://avatars.githubusercontent.com/u/88796528?v=4" width="100px;" alt="Foto do João"/><br>
        <sub>
          <b>João Lucas</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

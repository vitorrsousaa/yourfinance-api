# Processo de contribuição

## Criação da branch

Certifique-se de estar na branch `main`

```
git checkout main
```

Crie uma nova branch a partir da branch `main`

```
git checkout -b nome-da-sua-branch
```

### Padronização do nome das branches

Para manter o fluxo consistente de desenvolvimento e facilitar a colaboração, adotamos um padrão para nomear as branches. O padrão consiste em utilizar o prefixo `feat/`, `fix` e `docs`, seguido por uma palavra descritiva que identifique a finalidade da branch.

#### Feat - Para novos recursos e finalidades

Branches que introduzem novos recursos ou finalidades ao projeto devem seguir o padrão `feat/nome-do-recurso`. Por exemplo:

```
feat/login-authentication
feat/payment-gateway-integration
```

#### Fix - Para correções de bugs

Branches que corrigem bugs ou problemas existentes devem seguir o padrão `fix/nome-do-bug`. Por exemplo:

```
fix/header-navigation-issue
fix/data-processing-error
```

#### Docs - Para documentação

Branches relacionadas à documentação do projeto devem seguir o padrão `docs/nome-da-documentacao`. Por exemplo:

```
docs/api-endpoints-documentation
docs/user-guide-update
```

É importante observar que a palavra após o prefixo deve ser descritiva e concisa, fornecendo informações claras sobre o conteúdo da branch. Além disso, recomendamos usar letras minúsculas e separar palavras com hífens ou underscores para uma melhor legibilidade.

Ao criar uma nova branch, certifique-se de aderir a esse padrão de nomenclatura para facilitar a identificação e o rastreamento das alterações feitas.

## Desenvolvimento

Realize as alterações e adições necessárias no código, seguindo as práticas de codificação definidas pelo projeto.

Teste suas alterações para garantir que não haja regressões e que tudo funcione corretamente.

### Estrutura do banco de dados

Para realizar mudanças na estrutura do banco de dados, é necessário rodar o comando abaixo

```
npx prisma migrate dev --name <nome-da-alteracao>
```

Este comando é responsável por criar as migrations no DB.

## Commits

Para manter um histórico de commits claro e consistente, adotamos um padrão para as mensagens de commit. Cada mensagem de commit deve seguir o seguinte formato:

```
<tipo>(escopo opcional): descrição breve
```

### Tipos de Commits

feat: Para adicionar um novo recurso ou funcionalidade ao projeto.

fix: Para corrigir um bug ou problema existente no código.

docs: Para atualizar ou adicionar documentação.

chore: Para realizar tarefas de manutenção, atualização ou outras tarefas não relacionadas ao código em si.

refactor: Para refatorar o código, sem adicionar novos recursos ou corrigir bugs.

Lembramos que é importante escrever descrições breves e informativas para cada commit, fornecendo contexto suficiente para entender as alterações realizadas.

## Pull Request

Abra o Pull Request(PR) no repositório. Caso seja necessário, pode adicionar alguma informação relevantes para a revisão.

Durante a revisão, um workflow automatizado será executado para verificar a qualidade do código, testes, formatação, entre outros critérios. Caso algum erro seja identificado, faça as correções necessárias e faça push novamente para a sua branch.

Após a revisão e aprovação do PR, sua branch será mesclada à branch `main`

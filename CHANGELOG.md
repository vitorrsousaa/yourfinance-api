# Change Log

Todas as modificações no projeto serão documentadas neste arquivo.

Este formato é baseado no [Keep a Changelog](http://keepachangelog.com/) e estamos aderindo ao [Semantic Versioning](http://semver.org/).

Acesse o [Template](https://github.com/yourFinanceApp/api/blob/main/.github/templates/CHANGELOG_TEMPLATE.md) Para atualizar este arquivo conforma o padrão estabelecido.

## 1.0.2 | 03-06-2023

### Corrigido

- Quando o usuário ia alterar o historico do goalBox, estava substituindo o historico antes pela nova mudança, agora está adicionando ao invés de só substituir.

## 1.0.1 | 30-05-2023

### Adicionado

- Adicionado Seed para o db. Cadastrando as categories e modalities utilizando o prisma.
- Adicionado workflow para verificar os push e merge request para main.
- Criado setup para iniciar os testes.

### Modificado

- Na request para obter todas as transações do usuário, foi removido o retorno utilizando paginação.
- Realizado modificação no return para obter as modalidades. Agora esta ordenado alfabéticamente.
- Foi corrigido o retorno do método getBiggestModalities para retornar apenas 5 modalidades.
- Corrigido o retorno do método biggestModalities que estava retornando undefined para alguns meses.

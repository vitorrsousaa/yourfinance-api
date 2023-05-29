# Change Log

Todas as modificações no projeto serão documentadas neste arquivo.

Este formato é baseado no [Keep a Changelog](http://keepachangelog.com/) e estamos aderindo ao [Semantic Versioning](http://semver.org/).

Acesse o [Template](https://github.com/yourFinanceApp/api/blob/main/.github/templates/CHANGELOG_TEMPLATE.md) Para atualizar este arquivo conforma o padrão estabelecido.

## 1.0.1 | 29-05-2023

### Adicionado

- Adicionado Seed para o db. Cadastrando as categories e modalities utilizando o prisma.
- Adicionado workflow para verificar os push e merge request para main

### Modificado

- Na request para obter todas as transações do usuário, foi removido o retorno utilizando paginação.

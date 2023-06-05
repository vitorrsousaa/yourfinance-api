# Change Log

Todas as modificações no projeto serão documentadas neste arquivo.

Este formato é baseado no [Keep a Changelog](http://keepachangelog.com/) e estamos aderindo ao [Semantic Versioning](http://semver.org/).

Acesse o [Template](https://github.com/yourFinanceApp/api/blob/main/.github/templates/CHANGELOG_TEMPLATE.md) Para atualizar este arquivo conforma o padrão estabelecido.

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


## 1.1.1 | 03-06-2023

### Adicionado

- Método para calcular a média dos gastos dos meses anteriores e fazer uma estimativa para os próximos meses

### Modificado

- Dentro da Transaction para fazer uma nova Informação Fixa, foi adicionado uma etapa antes para verificar e buscar o usuário.

### Corrigido

- Dentro do método de getBiggestModalities estava com um bug quando quando do accumulator estava vazio, ele não conseguia acessar o método `added`, agora foi adicionado uma etapa antes para verificar se tem o método e não quebrar se estiver undefined.

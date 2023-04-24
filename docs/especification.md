# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

### Persona 1
Nome: Ana

Idade: 27 anos

Profissão: Estudante

Localização: Rio de Janeiro, Brasil

Perfil:
Ana é uma estudante de jornalismo que mora no Rio de Janeiro. Ela é uma pessoa preocupada com o bem-estar das pessoas e sempre que pode se voluntaria em ações sociais. Ana acredita que doar sangue é uma das melhores formas de ajudar outras pessoas e salvar vidas.
Ana quer doar sangue regularmente, mas tem dificuldades para encontrar um local de doação próximo e que tenha um horário compatível com sua rotina de estudante. Ela também tem receio de ir a locais desconhecidos e não saber se o processo de doação será seguro e eficiente.
Ana é uma pessoa muito engajada nas redes sociais. Ela gosta de compartilhar informações úteis e incentivar outras pessoas a doarem sangue. Ela também é muito ativa em eventos sociais e de voluntariado em sua comunidade, sempre buscando formas de ajudar outras pessoas.

### Persona 2

Nome: Paulo

Idade: 20 anos

Profissão: Estudante

Localização: Minas Gerais, Brasil

Perfil:
Paulo é um estudante de administração que não possui trabalho formal. Ele mora com seus avós que já possúem uma idade avançada e frequentemente precisam ir ao hospital para exames de rotina e eventuais complicações médicas. Paulo é dedicado aos seus avós e possui certo domínio sobre tecnologias frequentemente ajudando seus avós com questões que envolvem aparelhos eletrônicos. Paulo é bem de saúde mas seus avós não, seu avô precisa de constantes transfusões de sangue para a hemodiálise e sua avó também já precisou devido à um acidente.

### Persona 3

Nome: André

idade: 25 anos

Profissão: Eletricista

Localização: São Paulo, Brasil

Perfil: André trabalha como eletricista em uma firma no centro de São Paulo, tem como hobby fazer viagens de moto com seus colegas do motoclube, André sabe os riscos que andar de moto traz, principalmente por conhecer várias pessoas que sofreram acidentes enquanto viajavam. André possui seu tipo sanguíneo (O-) bordado no seu colete de motoclube. Ele sabe que seu sangue é um raro doador universal e por isso realiza doações regularmente.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |
|RF-003| Cadastro de usuários | ALTA | |
|RF-004| permitir que os pacientes busquem doadores com base em critérios como tipo sanguíneo, localização e disponibilidade. | ALTA | |
|RF-005| Feedback dos usuários | MÉDIA | |
|RF-006| permitir que os doadores/receptores tenham acesso aos contatos uns dos outros | ALTA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Garantir a segurança dos dados pessoais |  ALTA | 
|RNF-004| Garantir que o sistema tenha um tempo de resposta rápido |  MÉDIA | 
|RNF-005| O sistema deve estar sempre disponível |  ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deve ser desenvolvido respeitando as leis de privacidade de dados |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

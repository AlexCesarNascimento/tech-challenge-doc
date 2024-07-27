---
sidebar_position: 1
---

# Documentação do Microserviço de Gestão de Usuários

## Sumário

- [Introdução](#introdução)
- [Arquitetura do Microserviço](#arquitetura-do-microserviço)
  - [Componentes Principais](#componentes-principais)
  - [Fluxos de Dados](#fluxos-de-dados)
- [Detalhes de Segurança](#detalhes-de-segurança)
  - [OWASP Top 10 Implementações](#owasp-top-10-implementações)
- [Descrição Técnica](#descrição-técnica)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Endpoints da API](#endpoints-da-api)
  - [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)
- [Considerações Finais](#considerações-finais)
- [Contato](#contato)

## Introdução

Este documento descreve a funcionalidade e a arquitetura do microserviço de gestão de usuários, parte do projeto. O objetivo deste microserviço é gerenciar as operações relacionadas aos usuários, como autenticação, autorização e manutenção de dados dos usuários. Esta documentação abrange os componentes principais, fluxos de dados, e detalhes de segurança conforme os diagramas e documentações fornecidos.

## Arquitetura do Microserviço

### Componentes Principais

1. **WEB IU - Acesso Médico**
   - Interface web que permite aos médicos acessarem e gerenciarem informações de usuários, prontuários e agendamentos.
   - Controla o acesso com base nas permissões dos usuários.

2. **WEB IU - Acesso Paciente**
   - Interface web que permite aos pacientes acessarem suas próprias informações, incluindo agendamentos e prontuários.
   - Implementa autenticação de dois fatores para garantir a segurança dos dados dos pacientes.

3. **Serviços Externos**
   - Integrações com serviços de autenticação e pagamento, como Cognito, Google Meeting e Mercado Pago.
   - Valida e sanitiza dados recebidos de serviços externos para garantir a segurança.

4. **APIs REST**
   - Fornece endpoints para operações CRUD (Create, Read, Update, Delete) em dados de usuários, prontuários, agendamentos e pagamentos.
   - Implementa autenticação e autorização robustas para proteger os endpoints.

5. **Adaptadores de Serviços**
   - Módulos que permitem a integração com serviços externos, garantindo que os dados sejam corretamente validados e sanitizados.

### Fluxos de Dados

1. **Cadastro de Usuário**
   - O usuário acessa a interface de cadastro e envia seus dados.
   - Os dados são validados e, se estiverem corretos, são armazenados no banco de dados.
   - O sistema envia uma confirmação de cadastro para o e-mail do usuário.

2. **Login de Usuário**
   - O usuário acessa a interface de login e insere suas credenciais.
   - As credenciais são verificadas através do serviço de autenticação (Cognito).
   - Em caso de sucesso, o usuário recebe um token de acesso para realizar outras operações.

3. **Consulta de Prontuários**
   - O médico/paciente solicita a visualização dos prontuários através da interface web.
   - A solicitação é autenticada e autorizada antes de acessar os dados do prontuário.
   - Os dados são retornados e exibidos na interface do usuário.

4. **Agendamentos**
   - O usuário realiza um agendamento através da interface web.
   - A solicitação é processada, e os dados do agendamento são armazenados no banco de dados.
   - O sistema envia notificações de confirmação ou cancelamento conforme necessário.

5. **Pagamentos**
   - O usuário inicia um pagamento através da interface web.
   - A solicitação de pagamento é enviada para o serviço externo (Mercado Pago).
   - A resposta do serviço é validada e registrada no sistema.

## Detalhes de Segurança

### OWASP Top 10 Implementações

1. **Broken Access Control**
   - Controle de acesso baseado em roles para todas as funcionalidades.
   - Verificações de permissões implementadas em todos os endpoints.

2. **Cryptographic Failures**
   - Criptografia AES-256 para dados armazenados.
   - SSL/TLS para transmissão de dados.

3. **Injection**
   - Uso de ORM para prevenir injeções SQL.
   - Sanitização de todas as entradas de usuários.

4. **Insecure Design**
   - Revisões de segurança contínuas em cada sprint.
   - Adoção de práticas de design seguro desde o início do projeto.

5. **Security Misconfiguration**
   - Ferramentas automatizadas para verificação e manutenção das configurações de segurança.

6. **Vulnerable and Outdated Components**
   - Atualização regular de bibliotecas e dependências.
   - Monitoramento contínuo de vulnerabilidades conhecidas.

7. **Identification and Authentication Failures**
   - Autenticação multifator (MFA) implementada.
   - Políticas de senha fortes e recuperação de conta seguras.

8. **Software and Data Integrity Failures**
   - Uso de assinaturas digitais para garantir a integridade do código e dos dados.
   - Monitoramento de integridade em tempo real.

9. **Security Logging and Monitoring Failures**
   - Logging detalhado e monitoramento contínuo de eventos de segurança.

10. **Server-Side Request Forgery (SSRF)**
    - Validação rigorosa de URLs de destino.
    - Restrições de acesso a recursos internos.

## Descrição Técnica

### Tecnologias Utilizadas

- **Linguagem de Programação**: Node.js
- **Framework**: Express.js
- **Autenticação**: AWS Cognito
- **Banco de Dados**: PostgreSQL
- **ORM**: Sequelize
- **Integrações**: Mercado Pago, Google Meeting
- **Containerização**: Docker
- **Orquestração**: Kubernetes
- **Infraestrutura como Código**: Terraform

### Endpoints da API

1. **Usuários**
   - **POST /users**: Criação de novo usuário
   - **GET /users/{id}**: Recuperar dados de um usuário específico
   - **PUT /users/{id}**: Atualizar dados de um usuário específico
   - **DELETE /users/{id}**: Deletar um usuário específico

2. **Autenticação**
   - **POST /auth/login**: Autenticação de usuário
   - **POST /auth/refresh-token**: Renovação de token de acesso

3. **Prontuários**
   - **GET /records**: Listar todos os prontuários
   - **GET /records/{id}**: Recuperar um prontuário específico
   - **POST /records**: Criar um novo prontuário
   - **PUT /records/{id}**: Atualizar um prontuário específico
   - **DELETE /records/{id}**: Deletar um prontuário específico

4. **Agendamentos**
   - **GET /appointments**: Listar todos os agendamentos
   - **GET /appointments/{id}**: Recuperar um agendamento específico
   - **POST /appointments**: Criar um novo agendamento
   - **PUT /appointments/{id}**: Atualizar um agendamento específico
   - **DELETE /appointments/{id}**: Deletar um agendamento específico

5. **Pagamentos**
   - **GET /payments**: Listar todos os pagamentos
   - **GET /payments/{id}**: Recuperar um pagamento específico
   - **POST /payments**: Criar um novo pagamento
   - **PUT /payments/{id}**: Atualizar um pagamento específico
   - **DELETE /payments/{id}**: Deletar um pagamento específico

### Estrutura do Banco de Dados

1. **Tabela Usuários**
   - `id`: UUID
   - `nome`: String
   - `email`: String
   - `senha`: String (criptografada)
   - `role`: Enum (ADMIN, MEDICO, PACIENTE)
   - `data_criacao`: Timestamp
   - `data_atualizacao`: Timestamp

2. **Tabela Prontuários**
   - `id`: UUID
   - `usuario_id`: UUID (chave estrangeira)
   - `descricao`: Text
   - `data_criacao`: Timestamp
   - `data_atualizacao`: Timestamp

3. **Tabela Agendamentos**
   - `id`: UUID
   - `usuario_id`: UUID (chave estrangeira)
   - `data_agendamento`: Timestamp
   - `status`: Enum (CONFIRMADO, CANCELADO, PENDENTE)
   - `data_criacao`: Timestamp
   - `data_atualizacao`: Timestamp

4. **Tabela Pagamentos**
   - `id`: UUID
   - `usuario_id`: UUID (chave estrangeira)
   - `valor`: Decimal
   - `status`: Enum (PAGO, PENDENTE, CANCELADO)
   - `data_criacao`: Timestamp
   - `data_atualizacao`: Timestamp

## Considerações Finais

O microserviço de gestão de usuários no projeto [Nome do Projeto] foi desenvolvido com foco em segurança e funcionalidade robusta. As práticas recomendadas pela OWASP foram implementadas para garantir que os dados dos usuários estejam sempre protegidos. A arquitetura modular permite fácil manutenção e expansão do sistema conforme necessário.

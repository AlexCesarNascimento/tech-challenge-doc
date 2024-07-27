---
sidebar_position: 2
---


# Documentação Funcional do Sistema de Notificações

## Descrição Geral

Este documento descreve o fluxo de notificações de um sistema, ilustrado por meio de um diagrama. O objetivo é detalhar como as notificações são enviadas de um sistema para os usuários finais, incluindo as etapas intermediárias e os tipos de informações envolvidas.

## Componentes do Diagrama

### 1. Sistema
**Descrição:** 
- O Sistema é o ponto de origem das notificações. É responsável por gerar e enviar as notificações que precisam ser entregues aos usuários.


### 2. Envio de Notificação
**Descrição:** 
- Representa o ato de envio da notificação do sistema de origem para o serviço de notificação.


### 3. Serviço de Notificação
**Descrição:** 
- O Serviço de Notificação recebe as notificações do Sistema e as processa. Esse serviço é responsável por gerenciar a entrega das notificações aos usuários finais.


### 4. Tipos de Mensagens Enviadas
**Descrição:**
- Detalha os tipos de mensagens que podem ser enviadas pelo Serviço de Notificação aos usuários. Exemplos incluem prontuários, agendamentos confirmados, agendamentos cancelados, mensagens gerais e links de agendamentos.

### 5. Usuários
**Descrição:**
- Os Usuários são os destinatários finais das notificações. Eles recebem as mensagens processadas pelo Serviço de Notificação.


## Fluxo do Processo

1. **Início no Sistema:**
   - O sistema de origem gera uma notificação que precisa ser enviada aos usuários.
   
2. **Envio ao Serviço de Notificação:**
   - A notificação é enviada do sistema de origem ao serviço de notificação.
   
3. **Processamento da Notificação:**
   - O serviço de notificação recebe a notificação e a processa, determinando o tipo de mensagem e os usuários destinatários.
   
4. **Entrega aos Usuários:**
   - O serviço de notificação envia as mensagens processadas aos usuários finais.

## Observações

- As notificações podem variar em tipo e conteúdo, dependendo das necessidades do sistema de origem e das preferências dos usuários.
- O serviço de notificação deve garantir que todas as mensagens sejam entregues de forma eficiente e segura aos destinatários finais.

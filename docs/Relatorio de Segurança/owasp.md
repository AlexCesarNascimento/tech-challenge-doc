---
sidebar_position: 5
---

# OWASP no Contexto do Projeto

## Introdução

O projeto Health está comprometido com a segurança de suas aplicações web e adota as melhores práticas recomendadas pela OWASP (Open Web Application Security Project). Esta documentação descreve como tratamos os principais riscos de segurança identificados pela OWASP Top 10, contextualizados para as funcionalidades do projeto, conforme os diagramas fornecidos.

## OWASP Top 10 - 2021 no Contexto do Projeto

### 1. Broken Access Control
- **Descrição**: Falhas no controle de acesso permitem que usuários não autorizados acessem recursos restritos.
- **Implementação no Projeto**:
  - Implementação de controle de acesso baseado em roles para funcionalidades como prontuários e agendamentos.
  - Verificação de permissões em cada acesso de usuários às funcionalidades do sistema.

### 2. Cryptographic Failures
- **Descrição**: Falhas na implementação de criptografia que comprometem a proteção dos dados.
- **Implementação no Projeto**:
  - Uso de criptografia AES-256 para proteger dados armazenados, como informações de usuários e históricos de consultas.
  - SSL/TLS para proteger a transmissão de dados entre clientes e servidores.

### 3. Injection
- **Descrição**: Injeção de código malicioso em consultas SQL, NoSQL, LDAP, entre outras.
- **Implementação no Projeto**:
  - Utilização de ORM (Object-Relational Mapping) para evitar injeções SQL.
  - Validação e sanitização de todas as entradas do usuário nas interfaces web.

### 4. Insecure Design
- **Descrição**: Falhas na arquitetura e design de software que resultam em vulnerabilidades.
- **Implementação no Projeto**:
  - Adoção de práticas de design seguro desde a fase de planejamento.
  - Revisões de segurança em cada sprint de desenvolvimento para identificar e corrigir possíveis falhas de design.

### 5. Security Misconfiguration
- **Descrição**: Configurações inseguras ou padrão que expõem a aplicação a riscos.
- **Implementação no Projeto**:
  - Configurações seguras para servidores, bancos de dados e serviços externos.
  - Ferramentas automatizadas para verificação e manutenção das configurações de segurança.

### 6. Vulnerable and Outdated Components
- **Descrição**: Uso de componentes de software com vulnerabilidades conhecidas.
- **Implementação no Projeto**:
  - Atualização regular de bibliotecas e dependências utilizadas no projeto.
  - Monitoramento contínuo de vulnerabilidades conhecidas através de ferramentas de análise de segurança.

### 7. Identification and Authentication Failures
- **Descrição**: Falhas na identificação e autenticação de usuários.
- **Implementação no Projeto**:
  - Autenticação multifator (MFA) para todos os usuários do sistema.
  - Políticas de senha fortes e mecanismos de recuperação de conta seguros.

### 8. Software and Data Integrity Failures
- **Descrição**: Comprometimento da integridade do software e dos dados devido a falhas de segurança.
- **Implementação no Projeto**:
  - Uso de assinaturas digitais para garantir a integridade do código e dos dados.
  - Monitoramento de integridade em tempo real para detectar alterações não autorizadas.

### 9. Security Logging and Monitoring Failures
- **Descrição**: Falhas na captura, análise e resposta a eventos de segurança.
- **Implementação no Projeto**:
  - Logging detalhado de eventos de segurança, incluindo tentativas de acesso e modificações de dados.
  - Monitoramento contínuo e alertas em tempo real para atividades suspeitas.

### 10. Server-Side Request Forgery (SSRF)
- **Descrição**: Exploração de aplicações que fazem requisições a servidores remotos sem validação adequada.
- **Implementação no Projeto**:
  - Validação rigorosa das URLs de destino nas requisições de servidores.
  - Restrições de acesso a recursos internos através de firewalls e listas de controle de acesso (ACL).

## Detalhes do Projeto

### WEB IU - Acesso Médico
- **Descrição**: Interface web para médicos acessarem prontuários e agendamentos.
- **Segurança Implementada**:
  - Controle de acesso rigoroso para garantir que apenas médicos autorizados possam acessar essas funcionalidades.
  - Transmissão segura de dados utilizando HTTPS.

### WEB IU - Acesso Paciente
- **Descrição**: Interface web para pacientes acessarem suas informações de agendamento e prontuários.
- **Segurança Implementada**:
  - Autenticação de dois fatores para garantir que apenas pacientes autenticados possam acessar suas informações.
  - Encriptação de dados sensíveis armazenados e transmitidos.

### Serviços Externos
- **Descrição**: Integrações com serviços externos como Cognito, Google Meeting e Mercado Pago.
- **Segurança Implementada**:
  - Utilização de protocolos seguros para integração com serviços externos.
  - Verificação e validação de dados recebidos de serviços externos.

### APIs REST
- **Descrição**: APIs para interação com os dados de prontuários, agendamentos, pagamentos e usuários.
- **Segurança Implementada**:
  - Autenticação e autorização robusta para todas as chamadas de API.
  - Limitação de taxa para prevenir abuso de API.

### Adaptadores de Serviços
- **Descrição**: Módulos de integração para adaptar serviços externos ao sistema interno.
- **Segurança Implementada**:
  - Validação e sanitização de dados entre sistemas.
  - Monitoramento de integridade e logs de segurança para todas as integrações.

## Conclusão

O projeto adota as práticas recomendadas pela OWASP para proteger suas aplicações contra as ameaças mais comuns e perigosas. Estamos continuamente melhorando nossas medidas de segurança para garantir a proteção dos dados e a integridade de nossos sistemas.


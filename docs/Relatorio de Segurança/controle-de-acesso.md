---
sidebar_position: 2
---

# Controle de Acesso e Autenticação

## Autenticação de Usuários
O sistema utiliza o serviço Cognito da AWS para autenticação de usuários. A autenticação é realizada através de tokens JWT.

### Fluxo de Login
1. O usuário envia suas credenciais (usuário e senha) para o endpoint de login.
2. O Cognito valida as credenciais e, se corretas, retorna um token JWT.
3. O token JWT é usado para autenticação em chamadas subsequentes às APIs.

### Refresh de Tokens
- O sistema suporta a renovação de tokens de acesso através de tokens de refresh.
- O token de refresh é enviado ao endpoint de renovação de token para obter um novo token de acesso.

## Autorização Baseada em Roles
Os acessos são controlados com base nos papéis dos usuários:

### Papéis Disponíveis
- **Administrador**: Acesso completo ao sistema.
- **Médico**: Acesso a prontuários, agendamentos e teleconsultas.
- **Paciente**: Acesso aos seus próprios prontuários e agendamentos.

### Implementação de Permissões
As permissões são verificadas através de claims no token JWT. Cada API verifica se o token JWT contém as permissões necessárias para acessar o recurso solicitado.


---
sidebar_position: 3
---

# Criptografia

## Criptografia de Dados em Trânsito
Todos os dados transmitidos entre clientes e servidores são protegidos utilizando TLS 1.2 ou superior.

## Criptografia de Dados em Repouso
Os dados sensíveis são criptografados utilizando AES-256.

### Gerenciamento de Chaves
- As chaves de criptografia são gerenciadas utilizando o AWS Key Management Service (KMS).
- As chaves são rotacionadas regularmente e armazenadas de forma segura.

## Práticas Recomendadas
- Utilização de bibliotecas de criptografia testadas e confiáveis.
- Implementação de criptografia ponta-a-ponta para dados críticos.

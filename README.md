# Mini-Chat Application

Uma aplicação modular de chat em tempo real desenvolvida em **React**, **TypeScript** e **Styled Components**.

O projeto foi arquitetado utilizando o padrão de **Componentes Compostos** e **Hooks customizados**, desacoplando a lógica de negócios e o gerenciamento de estado da camada de interface visual.

Para simular um ecossistema de produção concorrente, a aplicação consome uma camada de infraestrutura emulada, chamada **Mock API**, que reproduz operações assíncronas HTTP com latência programada e mecanismo de polling para recebimento contínuo de mensagens.

---

## Stack Tecnológica

* **Framework Core:** React v18 com TypeScript
* **Estilização:** Styled Components v6
* **Ferramenta de Build:** Vite v5
* **Padronização:** ESLint

---

## Funcionalidades Implementadas

### Requisitos Obrigatórios

* **Carga Inicial de Mensagens:** listagem automática do histórico inicial ao carregar a aplicação.
* **Envio de Mensagens:** envio reativo pelo formulário, com bloqueio para campos vazios ou preenchidos apenas com espaços.
* **Simulação de Tempo Real:** mecanismo de polling assíncrono que injeta novas mensagens de outros participantes a cada 5 segundos.
* **Diferenciação Visual:** balões de mensagens com alinhamentos e cores distintas para diferenciar o usuário principal dos demais participantes.

### Pontos Bônus

* **TypeScript Estrito:** tipagem de contratos, interfaces e DTOs durante todo o fluxo de dados.
* **Indicador de Digitação:** exibição da mensagem “Usuário está digitando...” antes da chegada real de novas mensagens.
* **Auto-Scroll Resiliente:** rolagem automática e suave até a mensagem mais recente.
* **Persistência de Perfil:** armazenamento local do nome customizado do participante usando `localStorage`.

---

## Especificação dos Contratos

A comunicação da interface com o provedor de dados segue assinaturas semelhantes a uma API RESTful.


## Como Rodar o Projeto

Siga os passos abaixo para instalar as dependências e executar a aplicação localmente.

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

* **Node.js** versão 18.x ou superior
* **npm**

---

### Passos para Execução

#### 1. Clonar o repositório

```bash
git clone <link-do-seu-repositorio-no-github>
```

#### 2. Acessar a pasta do projeto

```bash
cd mini-chat-app
```

#### 3. Instalar as dependências

```bash
npm install
```

#### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

#### 5. Acessar a aplicação

Abra o navegador e acesse o endereço informado no terminal.

Por padrão, o Vite utiliza:

```text
http://localhost:5173
```

---

## Build para Produção

Para gerar os arquivos otimizados e prontos para deploy, execute:

```bash
npm run build
```

O Vite gerará os arquivos estáticos dentro da pasta:

```text
dist/
```

---

## Scripts Disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção da aplicação.

```bash
npm run preview
```

Executa localmente uma prévia do build de produção.

---

## Destaques Técnicos

Este projeto demonstra a aplicação prática de padrões e boas práticas modernas no ecossistema React:

* Separação clara entre interface, estado e infraestrutura.
* Uso de hooks customizados para encapsular lógica de negócio.
* Simulação de APIs assíncronas com latência artificial.
* Componentização modular e reutilizável.
* Persistência local com `localStorage`.
* Tratamento de estados reativos como mensagens, envio, digitação e rolagem automática.

---

## Licença

Este projeto foi desenvolvido para fins educacionais e demonstração de arquitetura front-end com React e TypeScript.

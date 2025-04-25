# Projeto CRUD Full Stack com React e Node.js

## Descrição

Este projeto é uma aplicação full-stack que oferece funcionalidades de Create, Read, Update e Delete (CRUD) de produtos. A camada de backend, desenvolvida em Node.js com Express e MySQL, expõe uma API RESTful. A camada de frontend, construída com React e Vite, consome essa API para exibir e gerenciar produtos.

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express
  - MySQL (mysql2)
  - CORS
  - nodemon (para desenvolvimento)
- **Frontend:**
  - React
  - React Router
  - Vite
  - CSS (Flexbox, Grid)

## Estrutura do Projeto

```
project-root/
├── api/                # Backend Node.js + Express
│   ├── controllers/    # Controladores de rotas
│   ├── routes/         # Definição de rotas
│   ├── db.js           # Configuração da conexão com MySQL
│   ├── index.js        # Ponto de entrada do servidor
│   ├── package.json    # Dependências e scripts do backend
│   └── ...
├── reactvite/          # Frontend React + Vite
│   ├── public/         # Recursos públicos (favicon, imagens)
│   ├── src/            # Código-fonte React
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── styles/     # Arquivos CSS
│   │   ├── Crud.jsx
│   │   ├── Detalhes.jsx
│   │   └── main.jsx    # Ponto de entrada do app React
│   ├── package.json    # Dependências e scripts do frontend
│   ├── vite.config.js  # Configuração do Vite
│   └── ...
└── README.md           # Este documento
```

## Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior)
- **MySQL** instalado e em execução

## Configuração e Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositório>
   cd <diretório-do-projeto>
   ```

2. **Configurar o Banco de Dados:**
   - Crie uma base de dados MySQL e atualize as credenciais em `api/db.js`.
   - Garanta que a tabela `products` existe com colunas compatíveis.

3. **Instalar dependências e rodar o backend:**
   ```bash
   cd api
   npm install
   npm start
   ```
   O servidor iniciará em `http://localhost:8800`.

4. **Instalar dependências e rodar o frontend:**
   ```bash
   cd ../reactvite
   npm install
   npm run dev
   ```
   Abra o navegador em `http://localhost:5173`.

## Uso

- Acesse o frontend em `http://localhost:5173`.
- O frontend consome a API em `http://localhost:8800/products`.
- Você pode cadastrar, editar e excluir produtos pela interface gráfica.

## Endpoints da API

| Método | Rota                  | Descrição                          |
| ------ | --------------------- | ---------------------------------- |
| GET    | `/products`           | Retorna todos os produtos          |
| POST   | `/products`           | Cria um novo produto               |
| PUT    | `/products/:id`       | Atualiza o produto com o ID dado   |
| DELETE | `/products/:id`       | Remove o produto com o ID dado     |

## Scripts Úteis

### Backend (pasta `api`)

- `npm start` – Inicia o servidor com nodemon.

### Frontend (pasta `reactvite`)

- `npm run dev`    – Inicia o servidor de desenvolvimento (Vite).
- `npm run build`  – Gera o build de produção.
- `npm run preview` – Serve o build localmente.

## Licença

Este projeto está licenciado sob a Licença MIT.

## Autor

Kevin Henriques

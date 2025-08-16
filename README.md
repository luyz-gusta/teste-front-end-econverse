# Teste Front-End Jr — Econverse

Este projeto é uma solução para o desafio técnico da vaga de Desenvolvedor Front-End na Econverse.  
O objetivo é criar uma landing page responsiva e pixel-perfect, consumindo dados de produtos via JSON, utilizando React, TypeScript e Sass, seguindo as melhores práticas de código, acessibilidade e SEO.

---

## 📋 Desafio

Desenvolver uma página conforme o layout, com as seguintes especificações:

- **Vitrine de produtos** consumindo dados de um arquivo JSON externo.
- **Interação de produto:** ao clicar em um produto, abrir um modal com as principais informações do item.
- **Estilização:** Utilizar pré-processador Sass.
- **Layout:** Seguir o layout pixel a pixel, respeitando tamanhos, cores e espaçamentos.
- **Sem UI Libraries:** Não utilizar bibliotecas como Bootstrap, Foundation, etc.
- **Extras:** Boas práticas de SEO e HTML semântico.

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass (SCSS)](https://sass-lang.com/)
- [Vite](https://vitejs.dev/) (build tool)
- ESLint (padronização de código)

---

## 📁 Estrutura do Projeto

```
src/
  components/         # Componentes reutilizáveis e seções da página
  styles/             # Variáveis, mixins e estilos globais (Sass)
  assets/             # Imagens e ícones SVG
  utils/              # Utilitários e constantes
  @types/             # Tipagens TypeScript
  App.tsx             # Componente principal
  main.tsx            # Ponto de entrada
```

---

## 🛠️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/luyz-gusta/teste-front-end-econverse
cd teste-front-end-econverse
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn
```

### 3. Rode o projeto em modo desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

## 📝 Observações

- O layout foi seguido fielmente conforme o Figma.
- O consumo dos produtos é feito via fetch do JSON fornecido.
- O modal de detalhes do produto é acessível via teclado e fecha ao clicar fora ou pressionar ESC.
- O projeto utiliza HTML semântico e boas práticas de SEO (tags, headings, meta tags, etc).
- Responsividade garantida via CSS Grid/Flexbox e media queries.

---

## 📦 Scripts disponíveis

- `dev` — Inicia o servidor de desenvolvimento.
- `build` — Gera a versão de produção.
- `preview` — Visualiza a build de produção localmente.
- `lint` — Roda o ESLint para padronização do código.

---

## 👨‍💻 Autor

Desenvolvido por [Luiz Gustavo](https://github.com/luyz-gusta) para o processo seletivo da Econverse.

---

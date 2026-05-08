# PrimeQA React

Projeto React sem Vite, usando `react-scripts` e CSS separado por componente.

## Como executar

```bash
npm install
npm start
```

A aplicação abrirá em:

```text
http://localhost:3000
```

## Build de produção

```bash
npm run build
```

## Estrutura

```text
primeqa-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   └── ...
│   ├── data/
│   │   └── siteData.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── .npmrc
└── README.md
```

## Padrão adotado

- Cada componente possui sua própria pasta.
- Cada pasta possui o arquivo `.jsx` e o `.css` do componente.
- O CSS global contém apenas tokens, reset, estilos base e classes compartilhadas.
- Os dados do site ficam centralizados em `src/data/siteData.js`.

## Scripts disponíveis

- `npm start`
- `npm run build`
- `npm test`

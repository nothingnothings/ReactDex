<h1 align="center">ReactDex - OceanBlue - Uma Pokédex construída com ReactJS</h1>
<p align="center">
  <img src="public/logo512.png" alt="Reactdex-logo" width="120px" height="120px"/>
  <br>
  <i>Este webApp é um exemplo de aplicativo que pode ser construído com o 
    <br>framework JavaScript ReactJS.</i>
  <br>
</p>

<p align="center">
  <a href="https://nothingnothings.github.io/ReactDex" target="_blank" rel="noreferrer noopener"><strong>https://nothingnothings.github.io/ReactDex</strong></a>
  <br>
</p>




## Introdução

![Reactdex](snapshot/ReactDex1.png)




![Reactdex](snapshot/ReactDex2.png)




![Reactdex](snapshot/ReactDex3.png)

Single Page Application (SPA) construída com a library/framework ReactJS (create-react-app). O design do app foi inspirado pelo site [https://pokeapi.co](https://pokeapi.co). Bootstrap, Flexbox e media queries foram utilizados na construção do design responsivo (tentativa de fornecer a melhor experiência possível a múltiplas configurações de tela/dispositivos, tanto desktop como mobile, com diferentes resoluções). Seguindo as últimas orientações/versões da library React, o app foi constituído através do uso de functional components, distanciando-se do approach class-based ("`class App extends React.Component{}`") usado no passado. 

O app foi inicializado/bootstrapped com o comando/environment `create-react-app` e implantado (deploy) com o GitHub Pages, assistido pelo recurso GitHub Actions.

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/nothingnothings/ReactDex?style=flat-square)
[![HitCount](https://hits.dwyl.com/nothingnothings/ReactDex.svg?style=flat-square)](http://hits.dwyl.com/nothingnothings/ReactDex)




 
## Tecnologias
 
 Algumas das linguagens e libraries empregadas:
 
 - Node Package Manager (bootstrapping e gerenciamento do aplicativo React)
 - HTML5 (com JSX, por conta do React)
 - CSS3 (animações, Flexbox, media queries)
 - JavaScript "vanilla", para o setup de uma Single-Page Application no GitHub Pages (script posicionado no `<head>` do arquivo `index.html`)
 - ReactJS (library/framework JavaScript, app composto inteiramente por React components)
 - Typescript (para a type safety dos objetos recebidos pelos endpoints do backend, Models e Interfaces, etc.)
 - React Router (para a navegação entre as diferentes "páginas" do aplicativo)
 - Manage local de state (dois states principais: o central, em "App.js", usado nas páginas "Pokedex" e "Procurar por um Pokémon", e o relativo aos pokémons indivíduais,  localizado na página "PokemonDetails", acessada pela route "/pokedex/:idDoPokemon")
 - Bootstrap (usado na barra de navegação e no posicionamento geral dos elementos na página, com "container", "row" e "col")
 - Axios (para a comunicação, requests e responses, entre este aplicativo frontend e o backend visado/buscado por ele, os API endpoints disponibilizados pelo domínio "pokeapi.co")
 
 
## Estrutura de Diretórios do Projeto

O ambiente de desenvolvimento (com utilização da ferramenta/environment/worfklow `create-react-app`):


```

.\
│
├── .github\
│   │
│   └── workflows\
│       └── publish.yml
│
│
├── public\
│   │
│   ├── fonts\
│   │   └── Pokemon Solid.ttf
│   │
│   ├── 404.html
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
│
├── snapshot\
│   ├── Reactdex1.png
│   └── Reactdex2.png
│
├── src\
│   │
│   ├── components\
│   │   │
│   │   ├── Card\
│   │   │   ├── Card.css
│   │   │   └── Card.tsx
│   │   │
│   │   ├── ErrorComponent\
│   │   │   ├── ErrorComponent.css
│   │   │   └── ErrorComponent.tsx
│   │   │
│   │   ├── PokeSearch\
│   │   │   └── PokeSearch.tsx
│   │   │
│   │   ├── Pokedex\
│   │   │   ├── Pokedex.css
│   │   │   └── Pokedex.tsx
│   │   │
│   │   ├── PokemonDetailsCard\
│   │   │   ├── PokemonDetailsCard.css
│   │   │   └── PokemonDetailsCard.tsx
│   │   │
│   │   ├── UI\
│   │   │   │
│   │   │   ├── PokeBall\
│   │   │   │   ├── Pokeball.css
│   │   │   │   └── Pokeball.tsx
│   │   │   │
│   │   │   ├── Spinner\
│   │   │   │   └── Spinner.tsx
│   │   │   │
│   │   │   └── Toolbar\
│   │   │       │
│   │   │       ├── MainNavigation\
│   │   │       │   │
│   │   │       │   ├── NavigationItems\
│   │   │       │   │   │
│   │   │       │   │   ├── NavigationItem\
│   │   │       │   │   │   ├── NavigationItem.css
│   │   │       │   │   │   └── NavigationItem.tsx
│   │   │       │   │   │
│   │   │       │   │   ├── NavigationItems.css
│   │   │       │   │   └── NavigationItems.tsx
│   │   │       │   │
│   │   │       │   ├── MainNavigation.css
│   │   │       │   └── MainNavigation.tsx
│   │   │       │
│   │   │       ├── Toolbar.css
│   │   │       └── Toolbar.tsx
│   │   │
│   │   │
│   │   ├── Utility\
│   │   │   │
│   │   │   └── ScrollToTop\
│   │   │       └── ScrollToTop.tsx
│   │   │
│   │   │
│   │   └── hocs\
│   │       │
│   │       ├── Layout\
│   │       │   └── Layout.tsx
│   │       │
│   │       └── PokedexWrapper\
│   │           ├── PokedexWrapper.css
│   │           └── PokedexWrapper.tsx
│   │
│   │
│   │
│   ├── models\
│   │   ├── pokemon.model.ts
│   │   └── simplepokemon.model.ts
│   │
│   ├── pages\
│   │   │
│   │   ├── PokedexPage\
│   │   │   └── PokedexPage.tsx
│   │   │
│   │   ├── PokemonDetails\
│   │   │   └── PokemonDetails.tsx
│   │   │
│   │   └── PokemonSearch\
│   │       └── PokemonSearch.tsx
│   │
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── logo.svg
│
├── README.md
├── package-lock.json
├── package.json
├── react-app-env.d.ts
└── tsconfig.json
```


O output de produção de `create-react-app`, que pode ser visualizado no branch`gh-pages` (encarregado da implementação/deployment do app):


```
.\
│
├── fonts\
│   └── Pokemon Solid.ttf
│
├── static\
│   │
│   ├── css\
│   │   ├── main.d8663289.css
│   │   └── main.d8663289.css.map
│   │
│   ├── js\
│   │   ├── main.006563d5.js
│   │   ├── main.006563d5.js.LICENSE.txt
│   │   └── main.006563d5.js.map
│   │
│   └── media\
│       └── Pokemon Solid.5d60be1f7ff5fcc21fc1.ttf
│
│
├── .nojekyll
├── 404.html
├── asset-manifest.json
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
└── manifest.json
```




## Arquivos de Configuração do Projeto (package.json e tsconfig.json)

O arquivo package.json utilizado no projeto:

```
{
  "name": "projeto-pokemon",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://nothingnothings.github.io/pokemonapi",
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^29.2.0",
    "@types/node": "^18.11.3",
    "@types/react": "^18.0.21",
    "@types/react-dom": "^18.0.6",
    "axios": "^1.1.3",
    "gh-pages": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.2",
    "react-scripts": "5.0.1",
    "typescript": "^4.8.4",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```


O arquivo tsconfig.json utilizado no projeto: 

```

{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}

```

## Instalação/Utilização 


Para usar este projeto, clone-o usando Git:

1. Rode `git clone` para clonar o projeto dentro de seu repositório local Git
2. Rode `npm install` para instalar todas as dependências (`react`, `axios`, etc)
3. Rode `npm run build` para criar a versão de produção/implementação (production/deployment) do aplicativo (produzido no diretório `/build`)
4. Sirva os arquivos de produção/implementação localmente ou na web (com a ajuda de algum serviço de hospedagem)
5. Na página "Pokédex", clique/toque no Pokémon cujas características deseja visualizar. Na página "Procurar por um Pokémon", digite o nome do Pokémon que deseja buscar


## Destaques (features)

- Aplicativo página única, sem recarregamentos de página, arquivo HTML único (ReactJS)
- Aplicativo dividido em diversos componentes, alguns deles utilizados mais de uma única vez, em páginas distintas (filosofia de design da library ReactJS)
- Design criado com CSS
- Design responsivo (adaptativo, suporte a dispositivos móveis e desktop) criado com Bootstrap, Flexbox e media queries
- Utilização dos recursos GitHub Actions e GitHub Pages com a ferramenta `create-react-app` para construir um workflow ininterrupto (transição da fase de desenvolvimento para a fase de produção/implementação). A partir do comando `git push`, o GitHub Actions transfere o conteúdo do branch `master` para dentro do branch `gh-pages`, o qual então implementa/faz deploy do app no endereço https://nothingnothings.github.io/ReactDex/
- Utilização do pacote/ferramenta Axios para a comunicação com o backend "pokeapi.co", que fornece os dados dos Pokémons (nomes, IDs, peso, altura, tipos, abilidades, etc) ao aplicativo React
- Utilização de recursos integrais da library ReactJS, como os hooks `useState()` e `useEffect()`
- Spinner customizado de carregamento (pokebola)
- Página de erro customizada, com output da mensagem/motivo do erro ao usuário
- Favicon compatível com diversos dispositivos


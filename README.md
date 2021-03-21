<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/ecoleta.svg" width="500px" />
</h1>

## :information_source: Projeto

Ecoleta é um projeto desenvolvido com base na semana internacional do meio ambiente.
O objetivo é conectar pessoas a empresas que coletam resíduos específicos como lâmpadas, pilhas, óleo de cozinha etc.


## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]


## :information_source: Como usar


Para clonar e executar este aplicativo, você precisará [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] instalado no seu computador.

From your command line:

### Instalação da API 

```bash
# Clone this repository
$ https://github.com/JoOliverP/Next-Level-Week-1-ecoleta.git

# Go into the repository
$ cd Next-Level-Week-1-ecoleta/server

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

# running on port 3333
```

### Instalação Front-end

```bash
# Clone this repository
$ git clone https://github.com/JoOliverP/Next-Level-Week-1-ecoleta.git

# Go into the repository
$ cd Next-Level-Week-1-ecoleta/web

# Instalação dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### Instalação Mobile

```bash
# Clone this repository
$ git clone https://github.com/JoOliverP/Next-Level-Week-1-ecoleta.git

# Go into the repository
$ cd Next-Level-Week-1-ecoleta/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

Feito com ♥ by Jó Oliveira

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/

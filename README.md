# YADO - Frontend

## Index

- [YADO - Frontend](#yado---frontend)
  - [Index](#index)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contribution](#contribution)
  - [License](#license)

## Introduction

[YADO](https://github.com/YadoGo) is a frontend project based on Angular that allows users to authenticate to save favorite hotels and add new hotels. This project integrates with the [YADO - Backend](https://github.com/YadoGo/yado-backend) API, which is developed in ASP .NET Core. The main goal of YADO is to save time and money for travelers when searching for hotels. It gathers information from multiple hotel websites and provides users with a more efficient way to find cost-effective and suitable options for their travel needs.

## Requirements

- [Node.js](https://nodejs.org/en/) installed on your system.
- [Angular CLI](https://angular.io/cli) installed globally.
- [pnpm](https://pnpm.io/) installed globally.

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/YadoGo/yado-frontend.git
```

2. Navigate to the project directory.

```bash
cd yado-frontend
```

3. Install project dependencies using pnpm.

```bash
pnpm install
```

## Usage

1. Start the development server.

```bash
ng serve
```

2. Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you make changes to the source files.

## Features

- **Frontend Technology**: Angular
- **Frontend Design**: [Tailwind CSS](https://tailwindui.com/) and [Daisy UI](https://daisyui.com/)
- **Backend Technology**: ASP .NET Core ([YADO - Backend](https://github.com/YadoGo/yado-backend))
- **License**: [MIT License](LICENSE) 

## Contribution

If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a branch for your new feature: `git checkout -b feature/awesome-feature`.
3. Make your changes and commit: `git commit -m 'Add an awesome feature'`.
4. Push your changes to your fork: `git push origin feature/awesome-feature`.
5. Open a pull request in the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

# Loteria

## Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

### Migrar Karma para Jest

```bash
npm remove karma karma-cli karma-jasmine jasmine-core karma-chrome-launcher karma-coverage karma-jasmine-html-reporter
npm install -D jest jest-preset-angular @types/jest ts-jest
```

Crie um arquivo _jest.config.ts_ na raiz do projeto:

```ts
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|js|mjs|html)$': 'jest-preset-angular',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  collectCoverage: true,
  coverageReporters: ['html'],
};
```

Crie o arquivo _setup-jest.ts_ na raiz:

```ts
import 'jest-preset-angular/setup-jest';
```

Edite _tsconfig.spec.json_ para ser compatível com Jest:

```jsonc
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jest"]
  },
  "files": ["setup-jest.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

Edite _angular.json_ e remova tudo que esteja relacionado a Karma no bloco "test". 

Você pode remover o bloco inteiro se não for usar mais o ng test:

```json
"test": {
  "builder": "@angular-devkit/build-angular:karma",
  ...
}
```

Adicione o script no arquiov _angular.json_:

```json
"scripts": {
  "test": "jest"
}
```

Execute:

```bash
npm test
```

ou

```bash
npm run test -- --watch
```

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

#### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

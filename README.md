# SecureAngularLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

This project demonstrates how to generate a 'secure' Angular Library Package.

## What is meant by 'secure'?
By default, Angular Library Packages generated via the Angular CLI include a variety of artifacts. In some cases, it may be desirable to create a distributable package that contains only obfuscated and minified JavaScript, while continuing to support the development JIT flow and the production build AOT flow.

## Why would you want a 'secure' package?
As Angular has continued to find adoption in all areas of development, it is increasingly used in 'Enterprise' environments.  Often times, securing a company's intellectual property in source code takes priority over the delivery of new features and functionality - a requirement that may slow innovation in some organizations.  While there are certain inherent limitations regarding the securing of JavaScript, obfuscation and minification have long been considered the industry standard approach to securing implementation details within JavaScript - which is what this project seeks to demonstrate for Angular Library Packages. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

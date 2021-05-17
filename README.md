# Quotious
#### By **Peter Kennedy**

![Landing Page](./src/assets/quotious.png)
Landing Page

![Landing Page](./src/assets/quotious-form.png)
New Quote Form
## Description
Quotious is a web application where users can create quotes and have those quotes voted on whether they are terrible(downvote) or are inspirational(upvote). The user can also submit a new quote, delete an existing quote, and click to expand details view to see information like who submitted the quote, when, and how long ago that was.

The quote with the most upvotes is also highlighted and the quotes are automatically sorted in order of the number of upvotes, meaning the quote with the most upvotes is always are the top.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Installation
Assuming you have Angular CLI installed, clone this project and navigate to the project folder. Run `yarn install` to download the required dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Alternatively, you can run `ng serve --open` or the shorthand `ng s -o` and the server will automatically open the app on the browser.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Technologies used
- Angular CLI
- TypeScript
- Bootstrap 4

## Known Bugs
- The submit button does not automatically close the new quote form.
- The upvote/downvote buttons don't change color to indicate user has voted.
- The time past calculation is based on UTC time.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Support and contact details
If you have any suggestions, questions or in case of a fire, you can reach the developer via [email](mailto:peterken.ngugi@gmail.com).
### License
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](/LICENSE)

Copyright &copy; 2021 **[peterken674](www.github.com/peterken674)**

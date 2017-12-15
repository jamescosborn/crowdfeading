# Crowdfunding

# LEFT OFF @: end of dynamic routing navigation lesson


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Specs

Description: Site is separated by ideas, projects, and charitable acts.
Input: View site contents
Output: Contents appear in separated pages

Description: User is able to see a list of all projects  
Input: View `localhost:4200`  
Output: See list of all projects displayed vertically  

Description: User is able to click on a project to see more details  
Input: Click `Cat Translator App`  
Output: View `An app to translate your cats meows and purrs into English.`  

Description: Name, project members, description, the amount of money the project is hoping to raise, what they'll do with the funds raised, and whether there are incentives offered to backers.  
Input: Click `Cat Translator App`  
Output: View `Cat Translator App's detailed info`  

Description: User is able to filter list by categories  
Input: Filter `Charitable Acts`  
Output: View `Only Charitable Acts`  

Description: User is able to click a button to fill out a form to fund project.  
Input: Click `Fund`, enter info Name: `James`, Email: `example@example.com` Pledge: `$20`  
Output: `Thanks for your pledge!`

Description: User is able to create their own project
Input: Click `New Project`, add info
Output: New Project created

Description: Admin is able to add, update, delete projects
Input: Admin deletes `Cat Translator App`
Output: Cat Translator App is no longer in the project list

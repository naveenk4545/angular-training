## Notes for Angular 5th Feb to 7th Feb 2024 - Calendar Training

## Pre-requisites:

1. HTML
2. CSS
3. JS

## Plan for 3 days:

1. Typescript
   - Data types
   - functions
   - callback
   - promise
   - optional params/rest params
   - Arrow functions
   - import & export
2. Angular
   - Architecture
   - Component, Mulitple Component
   - Pass values from one component to another (Input(), Output())
   - Pipes - done
   - Data binding (4) - done
   - Routing - Route path, Route parameter - done
   - REST API
   - Services
   - Directives - done
   - RX Js - Observables, Observers, subscribe, unsubscribe
   - Dependency Injection
   - Modules - Lazy loading
   - Forms - TDF & MDF
   - Life cycle methods

## Suggestion:

build and deploy
FSD Demo

Queries:
Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. Yes

## Installation:

1. Visual Studio Code - https://code.visualstudio.com/download
2. Node JS - https://nodejs.org/en node -v
3. Typescript - npm i -g typescript
4. Angular - npm i -g @angular/cli@16.2.5

==================================================
Typescript:
===========

Compile: Transpiling: tsc filename.ts
Run: node filename.js
Example:

---

tsc TSExercise.ts
node TSExercise.js
Intro to TS:

---

- Superset of JS - strongly-typed codes like java, missing of js
- Data types like Number, String, string, any, boolean
- OOPS
- All js codes are a valid ts code
- .ts
- Transpiling - convert ts to js
  var - global scope
  - redeclare any where
  - value reflected in all the placed

let - block scope - redeclare only on a diff scope - value of the variable differes based on scope - reassign the value of the variable

const - block scope - redeclare only on a diff scope - value of the variable differes based on scope - reassign the value of the variable

## Named Export & default Export:

Default export: when you are importing you can use any name
have only one default export in a file
no need to use {}
first class/function to be imported
Named Export: you should use the same name
can have any number of named export
use {class/function name}

## Angular:

- Front-end development Framework
- JS Framework
- Component based architecture
- SPA
- Angular JS - history - 1.x - possibility dependency injecting - adding routing was difficult - mobile applications - html based, mvc pattern - no support for intellisense
- Angular 2 onwards typescript - dependency injection, routing, mobile applications, Object-oriented.....
- Learning - Angular 16

Command to create angular app: ng new project_name
after project created

1. get inside your project on the terminal
2. command to run angular app: ng serve -o

## Different files in Angular project:

## Purpose of each file:

index.html -> only html file -> final output will be rendered
favicon -> icon for project
assets -> local files
app -> folder - 4 different files
->.comp.html file -> to design one part of the web page
->.comp.css file-> decorate the html page
->.comp.ts file->business logic to receive data and process data
->.comp.spec.ts-> testing functionality in that particular component
->app.module.ts->all components,modules,directives..... which needs to be loaded initially
main.ts->starting of the angular app
style.css->all common css rules will be present
gitignore->list of files that needs to ignored while uploading to git repository
package.json->dependencies of your project
package-lock.json-> location will be specified => dependencies dependencies
node-modules -> downloaded files of the dependencies
tsconfig.json -> work on details specific to typescript

## Data Binding:

4 types of binding

1. Interpolation binding
2. Style binding / Attribute binding
3. Event binding
4. Two-way binding

## Interpolation binding:

*one-way binding
*binds the value from .ts file to .html => component to UI
\*symbol: {{}}

## Attribute binding:

Assigning variable value to a property
symbol:[]
*one-way binding
*binds the value from .ts file to .html => component to UI
Style binding:
style

## Day 2:
Pipes:
-----
*Function
*Symbol: |
*format your content
*Two-types of pipes: Built-in pipe, custom pipe
*Built-in pipes: pre-defined
         Examples: date, slice, lowercase, uppercase, currency
*Custom pipe: user-defined
*Chaining a pipe: one pipe->result->another->new result
How to create a custom pipe: ng g p pipe-name
Decorator:
@NgModule
@Component
@Pipe
@Injectable

Event binding:
-------------
* One-way binding
* symbol: ()
* flows from UI to ts 
How to create multiple component?
ng g c Slider

How to retrieve data from a file and display it on a ui?
How to repeat a particular element on the template?

Directives:
-----------
Modify/Add/Delete DOM elements
2 types of Directives:
1. Built-in
   *varieties - structural directive, attribute directive, component
   *structural directive - *ngFor, *ngIf, *ngSwitch
2. custom 

Two-way binding:
ngModel => FormsModule
app.module.ts=> FormsModule in the imports array
Symbol: [()]

Routing:
--------
Route path:
Flat A,B,C,D

KYC Flat - C
Website - C- Routepath

Keywords:
1. instead of href we use routerLink
2. router outlet - when a component needs to be loaded thru routing, we need this keyword
3. configure routes array in app-routing.module.ts => Mapping the route path with component

Route Parameters:
-----------------
/path/additional parameters

1. Activated Route

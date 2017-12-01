# EPLWebApp

# Installation

1. Install npm through node.js (https://nodejs.org/en/)
2. `npm install -g @angular/cli`
3. `git clone https://github.com/nnguyen01/EPLWebApp.git`
4. `cd EPLWebApp`
5. `npm install`

# Development server

Run `ng serve --aot` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Updating Web App (Cybera VM)
### On your machine (local)
1. Build the web app using 
`ng build --prod`
2. Push new build to github 
### On Cybera VM
3. Pull the new changes on github.
4. Navigate to where the dist folder is located 
5. Copy all contents of the dist folder into /var/www/html/ using
`sudo cp -a dist/* /var/www/html/`
### On your machine
6. To test and see web app go to http://162.246.156.95/ 

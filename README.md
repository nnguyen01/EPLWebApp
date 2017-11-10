# EPLScavengerHuntWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

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


# Local hosting the webApp for development
1. make sure npm is installed 
WINDOWS: http://blog.teamtreehouse.com/install-node-js-npm-windows
OSX: http://blog.teamtreehouse.com/install-node-js-npm-mac

2. make sure angular cli installed on your machine
`npm install -g @angular/cli`

3. open command line/terminal in EPLScavengerHuntWebApp folder of our repo, and run:
- `npm install`
then
- `ng serve`

4. keeping that command line/terminal running `ng serve`, open chrome/firefox and go to http://localhost:4200 in the URL bar.




# *AUTO GENERATED STEPS*
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

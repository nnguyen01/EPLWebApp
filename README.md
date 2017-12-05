# EPLWebApp

# Installation

1. Install npm through [node.js](https://nodejs.org/en/download/)
2. `npm install -g @angular/cli`
3. `git clone https://github.com/nnguyen01/EPLWebApp.git`
4. `cd EPLWebApp`
5. `npm install`

# Development server

Run `ng serve --aot` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Deployment information on a Production Server
1. Complete the installation
2. `git pull origin master`
3. `ng build --prod`
4. `cd dist`
5. `sudo cp -a dist/* /var/www/html/`
6. Test on http://162.246.156.95/ (for Cybera) or the IP address of your production server

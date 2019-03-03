# StarAdmin Free Angular Admin Template


StarAdmin Free Angular Admin Template is a free admin template based on Bootstrap 4. The template is built using the framework NG-Bootstrap.

StarAdmin Free Angular Admin Template is a completely responsive and mobile-first admin template that provides a great foundation for your Angular + Bootstrap project.
This remarkably flexible and highly customizable template helps you create an amazing UI for your admin panel.

## Demo

Visit: https://www.bootstrapdash.com/demo/star-admin-angular/

[![N|Solid](screenshot.jpg)](http://www.bootstrapdash.com/demo/star-admin-angular)

## Installation

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
StarAdmin Free Angular Admin Template/
├── dist/
├── e2e/
├── src/
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── screenshot.jpg
├── tsconfig.json
├── tslint.json
```

### Usage

``` bash
# clone the repo
$ git clone https://github.com/Istiaq-Hossain-Shawon/angular-7-crud-with-firebase.git

# go into app's directory
$ cd angular-7-crud-with-firebase

# install dependencies
npm install

# serve with hot reload at localhost:4200
ng serve

# build for production with minification
ng build
```
# Port number 4200 is already in use. Type below command in cmd:
Step 1: Find the connection’s PID
> netstat -ano | findstr :yourPortNumber
Then locate the PID (something like 10764)
Step 2: Kill the process using it’s PID
> tskill yourPID
Step 3: Restart your server
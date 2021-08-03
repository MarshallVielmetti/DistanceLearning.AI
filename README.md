# AlertAIMonorepo

This projects consists of four major components, a ReactJS frontend, ExpressJS backend, Flask API, and MongoDB atlas connection.
There are two different ways to run the application in a development environment.

## Getting Started

Clone the repository, and open in VSCode / dev environment of choice.
If you need help msg me.

## Run With Docker

This method is easier, but can be less ideal for development depending on your specific setup. On a Windows computer, you will not be able to hot reload the code, meaning code changes will not be immediately reflected upon saving the file. This is not an issue on macs.

However, using the docker environment will allow you to run all the different parts of the app with one command. Although the routing will probably be configured for the other environment because I'm doing most of the dev on a windows computer...

### Step 1

Install [DockerDesktop](https://www.docker.com/products/docker-desktop). Follow all instructions then continue to step 2.

### Step 2

From the root of the repository, run `docker-compose up`

This should build the different images and run them in one environment. If you are one a mac, code changes will be reflected (at least in the React App, haven't set up nodemon for Express) upon save (hot reload). If not, you will have to close the environment with 'docker-compose down' or exit the process with Ctrl+C in the terminal (VSCode Powershell). Can also be stopped from docker desktop.

## Run Seperately

Run all the processes seperately. Somewhat of a pain, but does give greater control, and has hot reloading on a windows machine (again, no nodemon on the Express API so...). There is a lot more setup work though. HIGHLY recommend VSCode if you're going to do this (though to be honest I recommend it for the other way as well too...)

### Step 1

Use Ctrl+` to open your VSCode terminal. Split it into three different terminals by rightclicking on the 'powershell' and clicking 'Split Terminal' two times.
In each terminal, type '

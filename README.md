## Welcome to Scholar Sheep! - CapstoneGroup5




### Team Members
### Meera Ramesh
### Taryne Leach
### Derek Peterson
### Important Links

- [Deployed API server ](https://scholarsheep.onrender.com/)
- [Delpyed Front-End ](https://readinglog.netlify.app/)

- [Trello ](https://trello.com/b/xEt8mcfz/reading-app)
- [Wireframe](https://whimsical.com/scholar-sheep-HvM2SyXKVAXAuC28BCXtKs)
- [ERD](https://miro.com/app/board/uXjVPEOVPts=/)


## Overview

Our mission at Scholar Sheep is to encourage children to have a passion for reading. Education is very important and we must instill this in our children at a young age. We want to make it easier for teachers to engage and keep track of students reading outside of the classroom. We also want to encourage parents to read along with their children. There are many benefits to reading with your children. Children perform better when parents take an active role in their education.

### Getting Started

If you want to run our app locally, you must fork and clone this repository.

## Front End Set Up

You must have a seperate terminal to run the front end locally and must run simultaneously as the back end terminal.

- cd front-end
- touch .env
- npm install
- npm start

- npm install - install npm packages
- npm start - run / view front end locally

## .env

REACT_APP_API_URL=http://localhost:3000

## Back End Set Up

You must have a seperate terminal to run the back end locally and must run simultaneously as the front end terminal.

- cd back-end
- touch .env
- npm install
- node server.js

## .env

- PORT=3010
- PG_HOST=localhost
- PG_PORT=5432
- PG_DATABASE=" "

- npm install - install npm packages
- npm run db:init - initialize database and create tables
- npm run db:seed - seed the tables with some data
- node server.js - runs the back end server

## Deployment

Our app is deployed with Render for the back end and Netlify for the front end. You may choose to use different hosting sites.


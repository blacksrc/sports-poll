# Decription

This project is a simple poll app based on Nodejs, React and Mongodb.

# Installation Guide

First off, clone the project:
```sh
$ git clone git@github.com:blacksrc/sports-poll.git
```

## Backend

1. Install **MongoDB**: [Install MongoDB Community Edition](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

2. Install **migrate-mongo** globally: 
```sh
$ sudo npm install -g migrate-mongo
```

3. Install **nodemon** globally: 
```sh
$ sudo npm install -g nodemon
```

4. cd into backend directory.

5. Rename `.env.example` file to `.env.development`. Then open the renamed file and add your environment variables:

```env
NODE_ENV=development
NODE_HOST=<HOST: localhost>
NODE_PORT=<PORT: 3001>
NODE_DB_HOST=<DATABASE HOST: localhost>
NODE_DB_PORT=<DATABASE PORT: 27017>
NODE_DB_NAME=<DATABASE NAME: sportspoll>
```
6. Install dependencies.
```sh
$ npm i
```

7. CD into **backend** directory and run the migrations:
```sh
$ migrate-mongo up
```

8. Finally, run project in a development mode.
```sh
$ npm run development
```

## Frontend
1. cd into **frontend** directory.

2. Install dependencies.
```sh
$ npm i
```
3. Rename `.env.example` file to `.env`. Then open the renamed file and add your environment variables:

```env
API_HOST=<HOST: localhost>
API_PORT=<PORT: 3001>
```

4. Run project in a development mode.
```sh
$ npm run development
```
# Todo
- [ ] Update backend test cases.
- [ ] Create API documantion using postman.
- [ ] Write some frontend test cases.
- [ ] Create frontend documantation using Storybook or docz.
- [ ] Fix frontend env file.
- [ ] Google login implementation.



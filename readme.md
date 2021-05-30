# Welcome to Online Commerce Application👋

## Table of Contents

1. [General Info](#1.-general-info)
2. [Technologies](#2.-technologies)
3. [Installation](#3.-installation)
4. [Collaboration](#4.-collaboration)
5. [FAQs](#5.-faqs)

## 1. General Info

---

This project is about full stack web application for online shopping. Backend API service is developed by Expressjs, frontend application is developed by react. Mongodb is used for database. Mongodb atlas is choosen for database cloud provider.

## 2. Technologies

---

A list of technologies used within the project:

- [Node.js](https://nodejs.org/) : Version 16.2
- [Express](https://expressjs.com/) : Version 4.17
- [React](https://reactjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## 3. Installation

---

#### Sign up to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and get database connection url

Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), sign up with your email, choose a one of free plan and create a cluster and a database. After adding a database user to access, you can get a access API URL like this:

```sh
mongodb+srv://username:<password>@cluster.vt6tb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Keep this url for using .env file explained below.

#### Clone the project on your local drive

```sh
$ git clone https://github.com/mevlutarikan/ecommerce.git
$ cd ecommerce/
```

### 3.1 Installation and configuration of Express server

#### Install npm dependencies

```sh
$ npm install
```

#### Copy .env.sample file to create .env file for enviroment variables

```sh
$ cp .env.sample .env
```

#### open .env file in your favorite editor and change the values as described below

```sh
NODE_ENV=development
PORT=8080

# database/API connection information
DB_URL=mongodb+srv://username:<password>@cluster.vt6tb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

# cors allowed url
CORS_ORIGIN=http://localhost:3000

ACCESS_TOKEN_KEY=1f2a766e2525109301a335a25d805adf
REFRESH_TOKEN_KEY=1cd34ac4889ac9938b3af640a1d16df8

# access token timeout in seconds-must be less than REFRESH_TOKEN_TIMEOUT
ACCESS_TOKEN_TIMEOUT=60

# refresh token timeout in seconds-must be much more than ACCESS_TOKEN_TIMEOUT
REFRESH_TOKEN_TIMEOUT=180
```

- **DB_URL** is a database access API url that we got above. Replace `username`, `<password>` and ` myfirstdatabase` with your credentials.

- **CORS_ORIGIN** is a URL address of react application.

- **ACCESS_TOKEN_KEY** and **REFRESH_TOKEN_KEY** are secret keys to sign tokens given by yours.

- **ACCESS_TOKEN_TIMEOUT**, **REFRESH_TOKEN_TIMEOUT** are expire times for tokens in second. REFRESH_TOKEN_TIMEOUT must be more than ACCESS_TOKEN_TIMEOUT.

#### Start express server

```sh
$ npm start
```

### 3.2 Installation of react application

#### Install npm dependencies

```sh
$ cd /reactapp
$ npm install
```

#### Copy .env.development.sample file and .env.production.sample file to create .env.development and .env.production for enviroment variables

```sh
$ cp .env.development.sample .env.development
$ cp .env.production.sample .env.production
```

#### Change the **REACT_APP_API_URL** values with your express server URL addresses for both development and production.

```
REACT_APP_API_URL=http://example.com:8080
```

To run the app in the development mode run script:

```
$ npm start
```

Application runs in [http://localhost:3000](http://localhost:3000) .

The page will reload if you make edits.\
You will also see any lint errors in the console.

To build the app for production enter this script:

```
$ npm run build
```

Application build for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your application is ready to be deployed!

## 4. Collaboration

---

Any help and sugestion will be appreciated.

## 5. FAQs

---

A list of frequently asked questions

## Author

---

👤 **Mevlut Arikan**

Computer Engineer, Backend Developer

- Twitter: [@mevlutarikan](https://twitter.com/mevlutarikan)
- Github: [@mevlutarikan](https://github.com/mevlutarikan)

## Show your support

---

Give a ⭐️ if this project helped you!

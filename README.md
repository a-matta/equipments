# Equipment Management Application

## 1. Project Description

An application to manage equipment data.
Allows creating equipments, fetching them individually or in a collection.

The backend is implemented in [NestJS](https://nestjs.com/). And the frontend is implemented in [React](https://reactjs.org/).

## 2. Technologies

Coding languages/frameworks/databases/testing

- NodeJS
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- Swagger
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io)
- [MariaDB](https://mariadb.org/)

Dev

- Docker

## 3. Development Environment

### 3.1. Prerequisites

- docker
- docker-compose
- NodeJS

### 3.2. Start the Application

After pulling the newest code from Git.

Start local mariadb docker container

- docker-compose up

Start backend

- cd equipment-be
- npm install
- npm run start:dev

Start frontend

- cd equipment-fe
- npm install
- npm start

### 3.3. Access the Application

- Frontend http://localhost:3000
- Backend
  - http://localhost:4000/api/
  - Swagger UI http://localhost:4000/swagger/
  - OpenAPI json http://localhost:4000/swagger-json

# Santex API Node.js Application

This is a Node.js application for www.football-data.org API.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- Node.js (https://nodejs.org/)
- squelize database 
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLIENT_URL=http://localhost:5000`

`API_KEY=ff1698c6d12f47209d06150daaef0951`

`API_URL=https://api.football-data.org/v4`

`DB_STORAGE=Santex.sqlite`


## Run Locally

Clone the project

```bash
  git clone https://github.com/yitzhakmatias/santex-api
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Usage/Examples
Use an API client (e.g., Postman) to make requests to the API endpoints.
Refer to your API documentation for available endpoints and usage.

To seed league in db
```javascript
curl --location 'http://localhost:5000/api/v1/importLeague/PD' 
```
To get teams
```javascript
curl --location --request GET 'http://localhost:5000/api/v1/team' \
--header 'Content-Type: application/json' \
--data '{
"teamName":"[team name]",
  "includePlayers":"[true | false]"
}' 
```
To get players
```javascript
curl --location --request GET 'http://localhost:5000/api/v1/players' \
--header 'Content-Type: application/json' \
--data '{
"leagueCode":"[league code]",
  "teamName":"[team name]"
}'
```
## Docker 
Install docker in your local environment <https://docs.docker.com/engine/install/>

To run in docker execute the following commands in cmd 
```javascript
docker build -t santex .
```
and after

```javascript
docker run -d -p 5000:5000 --name node-app santex
```
It creates a docker image and docker container 

## Unit test

To run unit test execute from dev folder 
```jsunicoderegexp
npx cypress open --project src/test
```

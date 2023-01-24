# InnoPrintBotWebApps2.0

## How To Start:

This projects supports either docker (Nginx) production building or developer builds

You should edit the `/src/.env` file, regardless of which build method you choose

### To start production with Docker 

- Go to `docker-compose.yml` file and change VITE_API_BASE_URL variable value
- Run `docker compose up --build` in project root directory

Done!

### To start develop with npm

Make sure that your nodeJS version is 18.3.0

- Run `npm i`
- Run `npm run start` to start developing server

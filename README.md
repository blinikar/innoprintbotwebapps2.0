# InnoPrintBotWebApps2.0

## How To Start:

This projects supports either docker (Nginx) production building or developer builds

You should edit the `/src/.env` file, regardless of which build method you choose

### To start production with Docker 

- Run `docker build -t ipbwebapps .` in project root directory
- Run `docker run -p 80:80 ipbwebapps`

Done!

### To start develop with npm

Make sure that your nodeJS version is 18.3.0

- Run `npm i`
- Run `npm run start` to start developing server

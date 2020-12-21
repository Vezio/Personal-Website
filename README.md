# Personal-Website Non-Docker
My personal website, run locally w/ docker using the following commands.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Personal-Website Docker

`docker build -t docker_username/image_name .`

`docker run -it -p 8080:8080 --rm --name image_name-1 docker_username/image_name`

When migrating your project to another machine, or want to show off how fast you can deploy your app, use 
`docker pull docker_username/image_name`, then run the same docker run command as above.

# Personal-Website SSL

*Be sure to update all docker-compose files with your own information, or use an env file.*

Within the `ssl` grab the docker-compose file, place it somewhere on the server, then type `docker-compose up -d` (this is the network and ssl)

Then within the root of the repository, grab the docker-compose file, then type `docker-compose up -d` (this runs the website)

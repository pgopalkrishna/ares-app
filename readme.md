DOCKER AND DOCKER COMPOSE TUTORIAL
### Commands build images: 
docker build -t ares-backend -f dockerfile-backend .

docker build -t ares-frontend -f dockerfile-frontend .

### Command to run docker containers:
docker run -d -p 4000:8000 ares-backend
docker run -it -p 5000:3000 ares-frontend


### Commands to run docker compose:
docker-compose --version
docker-compose up
docker-compose down

# README

* Initial Configuration
1. docker-compose run backend rails new . --force --no-deps --api --database=postgresql
2. docker-compose build
3. docker-compose up (or docker-compose up --build after making changes in the compose.yml)
4. docker-compose run backend rake db:create
5. docker-compose run backend rails c 
6. docker-compose run frontend npx create-react-app /var/www/ezscheduler/app/assets/javascrips/ezscheduler
7. docker-compose run backend bundle install
8. Edit credentials.yml.enc `docker-compose run --rm -e EDITOR=nano backend rails credentials:edit`


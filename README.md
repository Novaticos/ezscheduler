# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* Initial Configuration
 1. docker-compose run backend rails new . --force --no-deps --api --database=postgresql
 2. docker-compose build
 3. docker-compose up (or docker-compose up --build after making changes in the compose.yml)
 4. docker-compose run backend rake db:create (in a new terminal)
 5. docker-compose run backend rails c 
 6. docker-compose run frontend npx create-react-app /var/www/ezscheduler/app/assets/javascrips/ezscheduler

* ...

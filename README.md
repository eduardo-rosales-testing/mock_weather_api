# mock_weather_api
## Description
RESTful Weather APIs for Travel app.
This application makes use of a cloud-based mongodb database, which is used to store Weather objects. Different API endpoints
are implemented, per the specification, and such routes may or may not be "protected" routes. JSON Web Token (JWT) is utilized
in the authentication process. Such token is sent in the `Authorization` header, of certain http requests, for routes that require authenticated user
privileges. 



## Steps to run app
#### *Note, steps below require bash/zshl terminal*
 1. Use nvm to switch to node version 8~
 2. Download project repository, and navigate to root directory. Run `npm install`
 3. Run `node index`
 4. Test APIs with Postman

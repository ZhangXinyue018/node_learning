## Project Blueprint
- Start file: 
    - index.js
- Swagger:
    - config: controllers/router
    - starter: plugin/swaggerPlugin (in case swagger is not required)
- Structure:
    - controller: router definition
    - service: service logic
    - proxy: rpc calls
    - repository: db model actions
    - domain: entity class, object mappers, etc


## Task List
- Create Express Project: Done
- Design Routing Structure: Done
- Add Log: Done
- Add Memory Track: Added but needs test
- Set Up Swagger: Done
- Add Global Error Handler
- Format Controller/Service/Repository Structure
- View And Imporove Project Structure
- Add Http Proxy
- Add Authorization Structure
- Add Unit Test
- Add Docker File
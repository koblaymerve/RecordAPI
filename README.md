# RecordAPI

RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format. Code written in Node.js and Express Framework

## Deployed App URL

[https://record-api-koblay.herokuapp.com/](https://record-api-koblay.herokuapp.com/)

## Commands

Running

```shell
npm install
npm start
```


-----------
## Endpoints

The endpoint only handle HTTP POST requests.

-----------
### POST /records

Request

```
{
    "startDate": "2015-01-26",
    "endDate": "2015-02-02",
    "minCount": 1000,
    "maxCount": 9500
}
```

Response

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "FNeOALAh",
            "createdAt": "2015-02-01T14:03:19.940Z",
            "totalCount": 4086
        },
        {
            "key": "FNeOALAh",
            "createdAt": "2015-02-01T14:03:19.940Z",
            "totalCount": 4086
        },
        {
            "key": "zpglIKjG",
            "createdAt": "2015-02-01T03:18:42.132Z",
            "totalCount": 3922
        },
        {
            "key": "zpglIKjG",
            "createdAt": "2015-02-01T03:18:42.132Z",
            "totalCount": 3922
        }
    ]
}
```

### Configuration

In order to run the application locally, you should create a .env file

```shell
PORT=3000
DB_URI=mongodb://localhost:27017
DB_NAME={database name}
```
-----------

## Test

The command below can be used to run the tests which are written using [Jest](https://www.npmjs.com/package/jest)

```shell
npm test
```
### Coverage

```
----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------|---------|----------|---------|---------|-------------------
All files                   |   86.67 |       75 |      50 |   86.67 | 
 src                        |     100 |      100 |     100 |     100 | 
  app.js                    |     100 |      100 |     100 |     100 | 
 src/controllers            |      75 |    83.33 |      50 |      75 | 
  record-controller.js      |      75 |    83.33 |      50 |      75 | 20-21,31-34      
 src/database               |      80 |       50 |      40 |      80 | 
  mongodb-init.js           |      80 |       50 |      40 |      80 | 12,21
 src/helpers                |   84.62 |      100 |      50 |   84.62 | 
  response-helper.js        |   84.62 |      100 |      50 |   84.62 | 16,20
 src/helpers/validators     |     100 |      100 |     100 |     100 | 
  record-model-validator.js |     100 |      100 |     100 |     100 | 
 src/models                 |     100 |      100 |     100 |     100 | 
  record-model.js           |     100 |      100 |     100 |     100 | 
 src/models/enums           |     100 |      100 |     100 |     100 | 
  response-error.js         |     100 |      100 |     100 |     100 | 
 src/services               |     100 |      100 |     100 |     100 | 
  record-service.js         |     100 |      100 |     100 |     100 | 
----------------------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        4.979 s, estimated 5 s
Ran all test suites.
```
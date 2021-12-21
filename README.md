# 🏎️ kimi.rest
#### REST API that returns quotes by recently-retired F1 driver Kimi Räikkönen

Inspired by [ajzbc's kanye.rest](https://github.com/ajzbc/kanye.rest) and [oanhgle's bangtan-api](https://github.com/oanhgle/bangtan-api). Passages are provided without context.


## :zap: Endpoints
Return a random formatted quote
```
GET /
```
Return all quotes
```
GET /all
```
Return a random quote
```
GET /random
```
Return quote at a specified index, where `:index` is the index value
```
GET /index/:index
```

## :computer: Running Locally
Clone the project repo
```
$ git clone https://github.com/sethvm/kimi.rest.git
```
Open up a terminal in the project's root folder and install dependencies
```
$ npm install
```
Start application at `http://localhost:8000`
```
$ npm start
```

## :memo: To-Do
 - Format responses returned by `GET /all`, `GET /random`, and `GET /index/:index` endpoints
 - Add usage example section
 - Re-format Endpoints section
 - Clean up code

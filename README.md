# 🏎️ kimi.rest
#### REST API that returns quotes by recently-retired F1 driver Kimi Räikkönen

Inspired by [ajzbc's kanye.rest](https://github.com/ajzbc/kanye.rest) and [oanhgle's bangtan-api](https://github.com/oanhgle/bangtan-api). Passages are provided without context.


## :zap: Endpoints
Return a random quote (formatted)
```
GET /quote
```
Return a random quote (unformatted)
```
GET /quote/random
```
Return quote at a specified index, where `:index` is the index value
```
GET /quote/index/:index
```
Return quotes from a specified year, where `:year` is the year value
```
GET /quote/year/:year
```
Return all quotes
```
GET /quotes/all
```
Return number of quotes contained in database
```
GET /quotes/total
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
 - Add usage example section
 - Re-format Endpoints section
 - Implement POST, PATCH, and DELETE endpoints


## :star2: Potential Improvements
 - Small frontend for demo
 - Implement emotion categories
 - Group quotes by year/emotion

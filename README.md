# 🏎️ kimi.rest

<br />
<div align=center>
    <img src='./src/kimi.gif' width=320 height=201 />
</div>

<h4 align=center>
    REST API that returns quotes by recently-retired F1 driver Kimi Räikkönen
</h4>

<p align=center>
	Inspired by <a href=https://github.com/ajzbc/kanye.rest>ajzbc's kanye.rest</a> and <a href=https://github.com/oanhgle/bangtan-api>oanhgle's bangtan-api</a>.
</p>
<br />

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
GET /quotes/year/:year
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
 - Categorize quotes (e.g. emotion, team radio, interview, venue)

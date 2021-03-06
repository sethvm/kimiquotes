# :speech_balloon: KimiQuotes API

<br />
<div align=center>
    <img src='kimi.gif' width=320 height=201 />
</div>
<br />

<div align=center>
    <b>Team radio and interview quotes by Finnish F1 legend Kimi Räikkönen</b>
</div>
<br />

<p align=center>
	Inspired by <a href=https://github.com/ajzbc/kanye.rest>ajzbc's kanye.rest</a> and <a href=https://github.com/oanhgle/bangtan-api>oanhgle's bangtan-api</a>
</p>
<br />

## :computer: Usage
Make queries to the API using a URI with the following format:
```
https://kimiquotes.herokuapp.com[endpoint]
```
<p><em>See below for a list of available endpoints</em></p>

## :zap: Endpoints
GET all quotes
```
/quotes
```
GET all quotes from a specified year
```
/quotes/:year
```
GET all quotes that don't come with year timestamps
```
/quotes/unstamped
```
GET a quote using its ID
```
/quote/:id
```
GET a random quote
```
/quote
```

## :floppy_disk: Run Locally
Clone the project repo
```
git clone https://github.com/sethvm/kimiquotes.git
```
Install the dependencies
```
cd kimiquotes
npm install
```
Start the development server with hot-reload enabled at `localhost:8000`
```
npm run dev
```

## :memo: To-Do
 - Nothing at the moment — quote contributions/updates are welcome!

## :star2: Potential Improvements
 - Implement `POST`, `PATCH`, and `DELETE` endpoints
 - Categorize quotes (e.g. emotion, team radio, interview, venue)

# 🏎️ kimi.rest

<br />
<div align=center>
    <img src='./src/kimi.gif' width=320 height=201 />
</div>

<h4 align=center>
    REST API that returns team radio and interview quotes by former F1 driver Kimi Räikkönen
</h4>

<p align=center>
	Inspired by <a href=https://github.com/ajzbc/kanye.rest>ajzbc's kanye.rest</a> and <a href=https://github.com/oanhgle/bangtan-api>oanhgle's bangtan-api</a>
</p>
<br />

## :zap: Endpoints
Return a random quote
```
GET /quote/any
```
Return quote at a specified index
```
GET /quote/index/:index
```
Return all quotes
```
GET /quotes/all
```
Return quotes from a specified year
```
GET /quotes/year/:year
```
Return number of quotes contained in database
```
GET /quotes/total
```
<br />

## :computer: Usage Example(s)
Send `GET /quote/any` request using async/await and output JSON response
``` javascript
async function getQuote() {
	const response = await fetch(`https://kimi-rest.herokuapp.com/quote/any`);
	const quoteData = await response.json();
	console.log(quoteData);
}
```
<br />

## :floppy_disk: Running Locally
Clone the project repo
```
$ git clone https://github.com/sethvm/kimi.rest.git
```
Open up a terminal in the project's root folder and install dependencies
```
$ npm install
```
Start application with auto-restart at `http://localhost:8000`
```
$ npm run dev
```
<br />

## :memo: To-Do
 - Apply styling to demo website
 - Implement `POST`, `PATCH`, and `DELETE` endpoints
<br />

## :star2: Potential Improvements
 - Categorize quotes (e.g. emotion, team radio, interview, venue)
<br />

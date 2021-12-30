# :checkered_flag: kimi.quotes

<br />
<div align=center>
    <img src='kimi.gif' width=320 height=201 />
</div>

<h4 align=center>
    REST API that provides team radio and interview quotes by Finnish F1 legend Kimi Räikkönen
</h4>

<p align=center>
	Inspired by <a href=https://github.com/ajzbc/kanye.rest>ajzbc's kanye.rest</a> and <a href=https://github.com/oanhgle/bangtan-api>oanhgle's bangtan-api</a>
</p>
<br />

## :computer: Usage
Construct a URI by appending an endpoint to the API origin
```
https://kimiquotes.herokuapp.com[endpoint]
```
<p><em>See below for a list of available endpoints</em></p>
<br />

## :zap: Endpoints
Return all quotes
```
GET /quotes
```
Return all quotes from a specified year
```
GET /quotes/:year
```
Return the quote with a specified ID
```
GET /quote/:id
```
Return a random quote
```
GET /quote
```
<br />

## :memo: To-Do
 - Nothing at the moment — quote contributions/updates are welcome!
<br />

## :star2: Potential Improvements
 - Implement `POST`, `PATCH`, and `DELETE` endpoints
 - Categorize quotes (e.g. emotion, team radio, interview, venue)
<br />

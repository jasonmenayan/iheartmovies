// Proxy server for The Movie Database

const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

const port = 8080;
const tmdbHost = 'https://api.themoviedb.org/3/';
const apiKey = '9840a4ef43adc5fd058fda881abd1b00';

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../../index.html'));
});

// Fetch list of popular movies
app.get('/popular', (req,res) => {
  let stem = 'movie/popular';
  let endpoint = `${tmdbHost}${stem}?api_key=${apiKey}`;
  request(endpoint).pipe(res);
});

// Fetch search results
app.get('/search', (req,res) => {
  let stem = 'search/movie';
  let searchQuery = req.query.query.split(' ').join('+');
  let endpoint = `${tmdbHost}${stem}?api_key=${apiKey}&query=${searchQuery}`;
  request(endpoint).pipe(res);
});

// Fetch details about a particular movie
app.get('/movie/:id', (req,res) => {
	let movieId = req.params.id;
	let stem = 'movie/';
  let endpoint = `${tmdbHost}${stem}${movieId}?api_key=${apiKey}`;
  request(endpoint).pipe(res);
});

// Fetch movies within a specified genre
app.get('/genre/:id', (req,res) => {
  let genreId = req.params.id;
  let stem = 'genre/';
  let endpoint = `${tmdbHost}${stem}${genreId}/movies?api_key=${apiKey}`;
  request(endpoint).pipe(res);
});

app.listen(port, () => {
	console.log(`iheartmovies listening on port ${port}`);
});
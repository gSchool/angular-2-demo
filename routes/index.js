var express = require('express');
var path = require('path');
var router = express.Router();

var maxId = 0

var HEROES = [
  { "id": ++maxId, "name": "Mr. Nice" },
  { "id": ++maxId, "name": "Narco" },
  { "id": ++maxId, "name": "Bombasto" },
  { "id": ++maxId, "name": "Celeritas" },
  { "id": ++maxId, "name": "Magneta" },
  { "id": ++maxId, "name": "RubberMan" },
  { "id": ++maxId, "name": "Dynama" },
  { "id": ++maxId, "name": "Dr IQ" },
  { "id": ++maxId, "name": "Magma" },
  { "id": ++maxId, "name": "Tornado" }
]

router.get('/api/heroes', function(req, res, next) {
  res.json(HEROES)
});

router.post('/api/heroes', function(req, res, next) {
  var hero = req.body
  hero.id = ++maxId
  HEROES.push(hero)
  res.json(hero)
});

module.exports = router;

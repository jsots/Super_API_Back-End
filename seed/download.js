import fetch from 'node-fetch';
import {promises as fsPromises} from 'fs';

fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then(response => response.text())
  .then(superheroesData => fsPromises.writeFile("./superheroes.json", superheroesData))
  .catch(error => console.error(error))
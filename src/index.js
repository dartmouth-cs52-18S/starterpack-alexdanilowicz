// OLD IMPORT STYLE: const $ = require('jquery');
// New import style, ES6 syntax
import $ from 'jquery';
import './style.scss';

/* seperate function
function increase_seconds() {
  seconds++;
  $('#main').html(`You've been on this page for ${seconds} seconds..`);
} */

const MILISECONDS = 1000;
let seconds = 0;

setInterval(() => {
  seconds += 1;
  // find the element with the id of main and
  $('#main').html(`You've been on this page for ${seconds} seconds...`);
}, MILISECONDS);

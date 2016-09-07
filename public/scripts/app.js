/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var template;
var $albumsList;
var sampleAlbums = [];



sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */

$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: renderMultipleAlbums
  });
});

function renderMultipleAlbums(albums) {
  albums.forEach(function(album) {
    renderAlbum(album);
  });
}


// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album', album);
  var albumHtml = $('#albums-template').html();
  var albumsTemplate = Handlebars.compile(albumHtml);
  var html = albumsTemplate(album);
  $('#albums').prepend(html);
}



//
// $(document).ready(function() {
//   console.log('app.js loaded!');
//
//
//   function renderAlbum(album) {
//   console.log('rendering album:', album);
//
//   $albumsList.empty();
//
//   var albumsHtml = $('.#albums').html();
//   var albums_Template = Handlebars.compile(albumsHtml);
//   var html = albums_Template(album);
//   $('#albums').append(html);
// }
//
//
//
//
//   $albumsList = $('#albums-template');
//
//   // var source = $('#albums').html();
//   // template = Handlebars.compile(source);
//   // var albumsHtml = $('#albumsTemplate').html();
//   // var albums_Template = Handlebars.compile(albumsHtml);
//   // var html = albums_Template(album);
//
// });
//




// this function takes a single album and renders it to the page
// function renderAlbum(album) {

"use strict";
function makeAlbum(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makeAlbum('Talha Anjum', 'Open Letter'));
console.log(makeAlbum('Hasan Raheem', 'Nautanki'));
console.log(makeAlbum('Faris Shafi ', 'Introduction'));
console.log(makeAlbum('Shamoon Ismail', 'Scars & Screws', 12));

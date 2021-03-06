"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const user_1 = require("./user");
const picture_1 = require("./picture");
const photoOrientation_1 = require("./photoOrientation");
const user = new user_1.User(1, "test username", "test", true);
const album = new album_1.Album(1, "title album");
const picture = new picture_1.Picture(1, "title", photoOrientation_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);
user.removeAlbum(album);
console.log("user", user);

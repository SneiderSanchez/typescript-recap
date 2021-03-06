"use strict";
function showPicture(picture) {
    console.log(`Picture ${picture.title} created on ${picture.date} with ${picture.orientation} orientation`);
}
const myPic = {
    title: "Test title",
    date: new Date(),
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
function generatePicture(config) {
    const picture = { title: "Default", date: new Date() };
    if (config.title) {
        picture.title = config.title;
    }
    if (config.date) {
        picture.date = config.date;
    }
    return picture;
}

import React from "react";

function importAll(pics) {
    let images = {};
    pics.keys().map((item, index) => { images[item.replace('./', '')] = pics(item); });
    return images;
}
  
const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));
console.log(images)

for (var i = 0; i < images.length; i++) {
    // Loop through the images array, creating an <img> tag for each URL

    // append the images to the gallery div
}

function Gallery() {

    return(
        <div className='gallery'>

        </div>
    )

};

export default Gallery;

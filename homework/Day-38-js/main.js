const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
// Unsplash API
let count = 5;
const apiKey = "eYgKCtFlFbKGnBSSa0mLixPPx6TMQa8GAgCcqwJ0Zho";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded

function imageLoaded() {
  imagesLoaded++;
  console.log(imagesLoaded);
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    console.log(`ready=`, ready);
    count = 30;
  }
}

//Helper Function to Set Attributes on DOM Element

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements For Links & Photos, Add to Dom

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log("total images", totalImages);
  //Run function for each object in photos Arrays
  photosArray.forEach((photo) => {
    //creat <a> to link to Unsplash

    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("targer", "_blank");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //Creat <img> for photo

    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Event Listener, check when each is finished loading

    img.addEventListener("load", imageLoaded);
    //Put <img> inside <a>, then put both inside imageContainer Element

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
// Get photos form Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    alert("Server đang bị hạn chế, mời truy cập lại sau 1 giờ.");
  }
}

//Check to see if scrolling near bottom of page, Load More Photos

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
    console.log("load more");
  }
});

//On load
getPhotos();

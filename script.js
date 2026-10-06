const searchInput =
    document.getElementById("searchInput");
const searchButton =
    document.getElementById("searchButton");
const searchProducts = [
    "Snacks",
    "Sugar",
    "Agarbattis",
    "Sweets",
    "Milk",
    "Ghee"
];

let searchIndex = 0;

setInterval(function () {
    searchIndex++;

    if (searchIndex >= searchProducts.length) {

        searchIndex = 0;

    }


    searchInput.placeholder =
        "Search for " + searchProducts[searchIndex];

}, 2500);


searchButton.addEventListener("click", function () {

    let product =
        searchInput.value.trim();


    if (product === "") {

        alert("Please enter a product name");

        searchInput.focus();

        return;

    }


    alert("Searching for: " + product);

});


searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


const locationButton =
    document.getElementById("locationButton");


const signinButton =
    document.getElementById("signinButton");


const notificationButton =
    document.getElementById("notificationButton");


const cartButton =
    document.getElementById("cartButton");




const locationOverlay =
    document.getElementById("locationOverlay");


const closeLocation =
    document.getElementById("closeLocation");


const locationSearchInput =
    document.getElementById("locationSearchInput");


locationButton.addEventListener("click", function () {

    closeAllPanels();

    locationOverlay.classList.add("active");


    setTimeout(function () {

        locationSearchInput.focus();

    }, 100);

});


closeLocation.addEventListener("click", function () {

    locationOverlay.classList.remove("active");

});


locationOverlay.addEventListener("click", function (event) {

    if (event.target === locationOverlay) {

        locationOverlay.classList.remove("active");

    }

});


locationSearchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        let location =
            locationSearchInput.value.trim();


        if (location === "") {

            alert(
                "Please enter an area, street name or pincode"
            );

            return;

        }


        alert(
            "Searching location: " + location
        );

    }

});


const loginOverlay =
    document.getElementById("loginOverlay");


const closeLogin =
    document.getElementById("closeLogin");


signinButton.addEventListener("click", function () {

    closeAllPanels();

    loginOverlay.classList.add("active");

});


closeLogin.addEventListener("click", function () {

    loginOverlay.classList.remove("active");

});


loginOverlay.addEventListener("click", function (event) {

    if (event.target === loginOverlay) {

        loginOverlay.classList.remove("active");

    }

});

const mobileNumber =
    document.getElementById("mobileNumber");


const continueButton =
    document.getElementById("continueButton");


mobileNumber.addEventListener("input", function () {


    this.value =
        this.value.replace(/[^0-9]/g, "");


    if (this.value.length === 10) {

        continueButton.disabled = false;

        continueButton.style.backgroundColor =
            "#20a944";

        continueButton.style.color =
            "white";

        continueButton.style.cursor =
            "pointer";

    } else {

        continueButton.disabled = true;

        continueButton.style.backgroundColor =
            "#d5d5d5";

        continueButton.style.color =
            "#999";

        continueButton.style.cursor =
            "not-allowed";

    }

});


continueButton.addEventListener("click", function () {

    if (mobileNumber.value.length === 10) {

        alert(
            "OTP will be sent to +91 " +
            mobileNumber.value
        );

    }

});




const notificationDrawer =
    document.getElementById("notificationDrawer");


const closeNotification =
    document.getElementById("closeNotification");


notificationButton.addEventListener("click", function () {

    closeAllPanels();

    commonOverlay.classList.add("active");

    notificationDrawer.classList.add("active");

});


closeNotification.addEventListener("click", function () {

    closeDrawer();

});



const cartDrawer =
    document.getElementById("cartDrawer");


const closeCart =
    document.getElementById("closeCart");


cartButton.addEventListener("click", function () {

    closeAllPanels();

    commonOverlay.classList.add("active");

    cartDrawer.classList.add("active");

});


closeCart.addEventListener("click", function () {

    closeDrawer();

});



const commonOverlay =
    document.getElementById("commonOverlay");


commonOverlay.addEventListener("click", function () {

    closeDrawer();

});




function closeDrawer() {

    notificationDrawer.classList.remove("active");

    cartDrawer.classList.remove("active");

    commonOverlay.classList.remove("active");

}




function closeAllPanels() {

    locationOverlay.classList.remove("active");

    loginOverlay.classList.remove("active");

    notificationDrawer.classList.remove("active");

    cartDrawer.classList.remove("active");

    commonOverlay.classList.remove("active");

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeAllPanels();

    }

});



const sliderImages = [

    "image/1aug24-crsl-kitchenmela.jpeg",
    "image/1aug24-crsl-womenscorner1.jpeg",
    "image/1dec24-crsl-ds-pune.jpeg",
    "image/1oct24-crsl-dg-pune.jpeg",
    "image/23aug24-crsl-newarrival-pune.jpeg"

];


const sliderTrack =
    document.getElementById("sliderTrack");


let currentSlide = 0;

sliderImages.forEach(function(image) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const img = document.createElement("img");
    img.src = image;
    img.alt = "DMart Banner";
    slide.appendChild(img);
    sliderTrack.appendChild(slide);
});


const firstSlide =
    sliderTrack.children[0].cloneNode(true);
    sliderTrack.appendChild(firstSlide);


function nextSlide() {
    currentSlide++;
    sliderTrack.style.transition = "transform 0.6s ease-in-out";
    sliderTrack.style.transform = "translateX(-" + (currentSlide * 100) + "%)";
}


sliderTrack.addEventListener(
    "transitionend",
    function() {

        if ( currentSlide === sliderImages.length) 
            {
                sliderTrack.style.transition = "none";
                currentSlide = 0;
                sliderTrack.style.transform = "translateX(0)";
            }
        }
    );


setInterval(function() {

    nextSlide();

}, 4000);




const categories = [

    {
        name: "Dairy",
        image: "image/dairy.png"
    },

    {
        name: "Tea",
        image: "image/tea.png"
    },

    {
        name: "Soft Drinks",
        image: "image/softdrinks.png"
    },

    {
        name: "Cleaners",
        image: "image/cleanser.png"
    },

    {
        name: "Bath Soaps",
        image: "image/soaps.png"
    },

    {
        name: "Toothpaste",
        image: "image/toothpaste.png"
    },

    {
        name: "Shampoos",
        image: "image/shampoo.png"
    },

    {
        name: "Pooja Needs",
        image: "image/pooja.png"
    },

    {
        name: "Towels",
        image: "image/towels.png"
    },

    {
        name: "Bath Utility",
        image: "image/bathroom.png"
    },

    {
        name: "Coffee",
        image: "image/coffee.png"
    }

];





const categoryTrack = document.getElementById("categoryTrack");

const categoryWindow = document.querySelector(".category-window");

const leftArrow = document.getElementById("leftArrow");

const rightArrow = document.getElementById("rightArrow");

categories.forEach(function (category) {
  const item = document.createElement("div");

  item.classList.add("category-item");

  const imageBox = document.createElement("div");

  imageBox.classList.add("category-image");

  const image = document.createElement("img");

  image.src = category.image;

  image.alt = category.name;

  imageBox.appendChild(image);

  const name = document.createElement("div");

  name.classList.add("category-name");

  name.textContent = category.name;

  item.appendChild(imageBox);

  item.appendChild(name);

  categoryTrack.appendChild(item);
});


let categoryPosition = 0;


function getCategoryMovement() {
  const firstItem = categoryTrack.querySelector(".category-item");

  const itemStyle = window.getComputedStyle(categoryTrack);

  const gap = parseFloat(itemStyle.columnGap);

  return firstItem.offsetWidth + gap;
}


function getMaximumPosition() {
  const totalWidth = categoryTrack.scrollWidth;

  const visibleWidth = categoryWindow.clientWidth;

  const movement = getCategoryMovement();

  const maximumMovement = totalWidth - visibleWidth;

  return Math.ceil(maximumMovement / movement);
}



function moveRight() {

    const maximumPosition = getMaximumPosition();
    if (categoryPosition < maximumPosition) {
      categoryPosition++;
      updateCategorySlider();
    }
}


function moveLeft() {
    if (categoryPosition > 0) {
      categoryPosition--;
      updateCategorySlider();
    }
}

function updateCategorySlider() {
    const movement = getCategoryMovement();
    categoryTrack.style.transform = "translateX(-" + categoryPosition * movement + "px)";
    updateArrows();
}

function updateArrows() {
    const maximumPosition = getMaximumPosition();
    if ( categoryPosition === 0) {
        leftArrow.style.display = "none";
    } else {
        leftArrow.style.display = "flex";
    }

    if ( categoryPosition >= maximumPosition) {
        rightArrow.style.display = "none";
    } else {
        rightArrow.style.display = "flex";

    }
}


updateArrows();

window.addEventListener(
    "resize",
    function() {
        categoryPosition = 0;
        categoryTrack.style.transform = "translateX(0)";
        updateArrows();
    }
);
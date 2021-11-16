//getting html elements
const loader = document.querySelector("#loading");
let nextButton = document.getElementById("next-button");
let previousButton = document.getElementById("previous-button");
let mapDescription = document.getElementById("description-text")
const map = document.getElementById("map")

//maps manipulations
const kharkovURL = "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kharkov+()&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

const moscowURL = "https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=moscow+(I%20was%20raised%20here)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

const telavivURL = "https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=tel%20aviv+(I%20was%20raised%20here)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";


nextButton.addEventListener("click", counterNext);
previousButton.addEventListener("click", counterPrevious);

var mapButtonsCounter = 1;

function counterNext() {
    if (mapButtonsCounter < 3) {
        mapButtonsCounter ++;
    }
    slideMap();
}

function counterPrevious() {
    if (mapButtonsCounter > 1) {
        mapButtonsCounter --;
    }
    slideMap();
}

function slideMap() {
    loader.classList.add("display");
    if (mapButtonsCounter == 1) {
       map.innerHTML = `<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen="" loading="lazy"src="${kharkovURL}"><a href="http://www.gps.ie/">truck gps</a></iframe>`;
       mapDescription.innerText = "* Kharkov, Ukraine - the place where I was born";
       previousButton.removeEventListener("click", counterPrevious);
       previousButton.classList.add("disabled");    
    }

     if (mapButtonsCounter == 2) {
        map.innerHTML = `<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen="" loading="lazy"src="${moscowURL}"><a href="http://www.gps.ie/">truck gps</a></iframe>`;
        mapDescription.innerText = "* Moscow, Russia - the place where I was raised";
        nextButton.addEventListener("click", counterNext);
        previousButton.addEventListener("click", counterPrevious);
        nextButton.classList.remove("disabled");
        previousButton.classList.remove("disabled");
    }

    if (mapButtonsCounter == 3) {
        map.innerHTML = `<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen="" loading="lazy"src="${telavivURL}"><a href="http://www.gps.ie/">truck gps</a></iframe>`;
        mapDescription.innerText = "* Tel-Aviv, Israel - the place where I currently live";
        nextButton.removeEventListener("click", counterNext);
        nextButton.classList.add("disabled");
    }
    setTimeout(() => {
        loader.classList.remove("display");
    }, 700);
};
slideMap();

let myAge = document.getElementById("my-age");
let ageNumber = 23;
myAge.append(ageNumber);

var curtime = new Date(),
    curday = curtime.getDate(),
    curmonth = curtime.getMonth()+1;

if(curmonth == 10 && curday == 8) {
    ageNumber++;
};

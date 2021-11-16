//getting html elements
belowButton = document.getElementById("below-button");
linkedIn = document.getElementById("linked-in");
stackOverflow = document.getElementById("stack-overflow");
gitHub = document.getElementById("git-hub");
hereButton = document.getElementById("here-button");
navbarWrapper = document.getElementById("navbar-wrapper");
topBar = document.getElementById("top-bar")

belowButton.addEventListener("click", function() {
    
    setTimeout (() => {
        linkedIn.classList.add("active");
        stackOverflow.classList.add("active");
        gitHub.classList.add("active");
    }, 500);
    
    setTimeout (() => {
        linkedIn.classList.remove("active");
        stackOverflow.classList.remove("active");
        gitHub.classList.remove("active");
    }, 2000);
});

hereButton.addEventListener("click", function() {

    setTimeout (() => {
        navbarWrapper.setAttribute("style", "background-color:white")
    }, 300);
    
    setTimeout (() => {
        navbarWrapper.removeAttribute("style", "background-color:white")
    }, 2000);
});



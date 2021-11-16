//gitting the html elements
let dateField = document.getElementById("exampleInputDate1");
let submitButton = document.getElementById("submit-button");
var form = document.getElementById("form");
var meeting = document.getElementById("meeting");

//disbles the dates before today on the input calendar
dateField.min = new Date().toISOString().split("T")[0];

// Get the MODAL
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function logSubmit(event) {
  //submition confirmation
  document.getElementById("form").style.display = "none";
  document.getElementById("submition-text").style.display = "block";
  
  //users's date for meeting
  var chosenDate = dateField.value; 
  console.log(chosenDate);

  //putting the date on the calendar
  if (chosenDate) {
    meeting.style.display = "block";
    meeting.innerText = `Your meeting is scheduled for ${chosenDate}`
  }

  let myEvents = [
    {
      start: chosenDate,
      end: chosenDate,
      name: 'Meeting',
      desc: 'Description 1',
    }
  ];

  new Calendar({
    id: '#color-calendar',
    eventsData: myEvents,
    primaryColor: '#6814D9FF',
    headerColor: '#6814D9FF',
  });
  event.preventDefault();
};

form.addEventListener('submit', logSubmit);

//shows the calendar on modal
function callCalendar() {
  new Calendar({
    id: '#color-calendar',
    primaryColor: '#6814D9FF',
    headerColor: '#6814D9FF',
  });
};
callCalendar();





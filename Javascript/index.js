let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".city-date");
let londonTimeElement = londonElement.querySelector(".city-time");

londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML = moment().format(
  "hh:mm:ss [<small>] A [</small>]"
);

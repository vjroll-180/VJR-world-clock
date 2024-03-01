function updateTimezone() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".city-date");
  let londonTimeElement = londonElement.querySelector(".city-time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>] A [</small>]");

  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".city-date");
  let stockholmTimeElement = stockholmElement.querySelector(".city-time");

  stockholmDateElement.innerHTML = moment()
    .tz("Europe/Stockholm")
    .format("MMMM Do YYYY");
  stockholmTimeElement.innerHTML = moment()
    .tz("Europe/Stockholm")
    .format("hh:mm:ss [<small>] A [</small>]");
}

setInterval(updateTimezone, 1000);

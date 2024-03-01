function updateTimezone() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".city-date");
    let londonTimeElement = londonElement.querySelector(".city-time");

    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("hh:mm:ss [<small>] A [</small>]");
  }

  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".city-date");
    let stockholmTimeElement = stockholmElement.querySelector(".city-time");

    stockholmDateElement.innerHTML = moment()
      .tz("Europe/Stockholm")
      .format("MMMM Do YYYY");
    stockholmTimeElement.innerHTML = moment()
      .tz("Europe/Stockholm")
      .format("hh:mm:ss [<small>] A [</small>]");
  }

  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".city-date");
    let newyorkTimeElement = newyorkElement.querySelector(".city-time");

    newyorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("hh:mm:ss [<small>] A [</small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  
  <div class="city">
            <div class="city-name-date">
              <h2>${cityName}</h2>
              <div class="city-date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="city-time">${cityTime.format(
              "hh:mm:ss"
            )}<small>${cityTime.format("A")}</small></div>
  </div>
  <a href="/">Back to homepage</a>
  
  `;
}

setInterval(updateTimezone, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

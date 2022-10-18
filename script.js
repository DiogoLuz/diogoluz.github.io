class NewEvent {
  constructor(name, image, url, date, price, eventID) {
    this.name = name;
    if (Boolean(new URL(image))) {
      this.image = image;
    } else {
      throw new Error("Invalid URL for the image");
    }
    this.url = url;
    this.price = price;
    [this.startDate, this.startTime] = date;
  }
}

let events = [];

fetch(
  "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=3j661rZCPLmCNFq9nCEir2tfhGPvwL2M"
)
  .then((response) => response.json())
  .then((data) => {
    data._embedded.events.forEach((event) => {
      events.push(
        new NewEvent(
          event.name,
          event.images[0].url,
          event.url,
          [event.dates.start.localDate, event.dates.start.localTime],
          typeof event.priceRanges === "undefined"
            ? "SOLD OUT"
            : event.priceRanges,
          event.id
        )
      );
      const cardContainer = document.querySelector(".card-container");
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      card.innerHTML = `
                        <img src="${event.images[0].url}" class="card-img-top">
                        <div class="card-body>
                        <h5 class="card-title">${event.name}</h2>
                        <ul>
                          <li>Start Date: ${event.dates.start.localDate}</li>
                          <li>Start Time: ${event.dates.start.localTime}</li>
                        </ul>
                        <a href = "${event.url}" class="btn btn-primary" target="_blank">Go to Event Page</a>
                      </div>
      `;

      cardContainer.append(card);
    });
  });

const eventInput = document.querySelector("#event-input");
const locationInput = document.querySelector("#location-input");

eventInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const eventValue = eventInput.value;

    const locationValue = locationInput.value;

    const cardContainer = document.querySelector(".card-container");

    eventInput.value = "";

    locationInput.value = "";

    cardContainer.innerHTML = "";

    if (locationValue.length > 0) {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&city=${locationValue}&keyword=${eventValue}&apikey=3j661rZCPLmCNFq9nCEir2tfhGPvwL2M`
      )
        .then((response) => response.json())
        .then((data) => {
          data._embedded.events.forEach((event) => {
            events.push(
              new NewEvent(
                event.name,
                event.images[0].url,
                event.url,
                [event.dates.start.localDate, event.dates.start.localTime],
                typeof event.priceRanges === "undefined"
                  ? "SOLD OUT"
                  : event.priceRanges,
                event.id
              )
            );
            const cardContainer = document.querySelector(".card-container");
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
            card.innerHTML = `
                              <img src="${event.images[0].url}" class="card-img-top">
                              <div class="card-body>
                              <h5 class="card-title">${event.name}</h2>
                              <ul>
                                <li>Start Date: ${event.dates.start.localDate}</li>
                                <li>Start Time: ${event.dates.start.localTime}</li>
                              </ul>
                              <a href = "${event.url}" class="btn btn-primary" target="_blank">Go to Event Page</a>
                            </div>
            `;

            cardContainer.append(card);
          });
        });
    } else {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&keyword=${eventValue}&apikey=3j661rZCPLmCNFq9nCEir2tfhGPvwL2M`
      )
        .then((response) => response.json())
        .then((data) => {
          data._embedded.events.forEach((event) => {
            events.push(
              new NewEvent(
                event.name,
                event.images[0].url,
                event.url,
                [event.dates.start.localDate, event.dates.start.localTime],
                typeof event.priceRanges === "undefined"
                  ? "SOLD OUT"
                  : event.priceRanges,
                event.id
              )
            );
            const cardContainer = document.querySelector(".card-container");
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
            card.innerHTML = `
                              <img src="${event.images[0].url}" class="card-img-top">
                              <div class="card-body>
                              <h5 class="card-title">${event.name}</h2>
                              <ul>
                                <li>Start Date: ${event.dates.start.localDate}</li>
                                <li>Start Time: ${event.dates.start.localTime}</li>
                              </ul>
                              <a href = "${event.url}" class="btn btn-primary" target="_blank">Go to Event Page</a>
                            </div>
            `;

            cardContainer.append(card);
          });
        });
    }
  }
});

locationInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const eventValue = eventInput.value;

    const locationValue = locationInput.value;

    const cardContainer = document.querySelector(".card-container");

    eventInput.value = "";

    locationInput.value = "";

    cardContainer.innerHTML = "";

    if (locationValue.length > 0) {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&city=${locationValue}&keyword=${eventValue}&apikey=3j661rZCPLmCNFq9nCEir2tfhGPvwL2M`
      )
        .then((response) => response.json())
        .then((data) => {
          data._embedded.events.forEach((event) => {
            events.push(
              new NewEvent(
                event.name,
                event.images[0].url,
                event.url,
                [event.dates.start.localDate, event.dates.start.localTime],
                typeof event.priceRanges === "undefined"
                  ? "SOLD OUT"
                  : event.priceRanges,
                event.id
              )
            );
            const cardContainer = document.querySelector(".card-container");
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
            card.innerHTML = `
                              <img src="${event.images[0].url}" class="card-img-top">
                              <div class="card-body>
                              <h5 class="card-title">${event.name}</h2>
                              <ul>
                                <li>Start Date: ${event.dates.start.localDate}</li>
                                <li>Start Time: ${event.dates.start.localTime}</li>
                              </ul>
                              <a href = "${event.url}" class="btn btn-primary" target="_blank">Go to Event Page</a>
                            </div>
            `;

            cardContainer.append(card);
          });
        });
    } else {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&keyword=${eventValue}&apikey=3j661rZCPLmCNFq9nCEir2tfhGPvwL2M`
      )
        .then((response) => response.json())
        .then((data) => {
          data._embedded.events.forEach((event) => {
            events.push(
              new NewEvent(
                event.name,
                event.images[0].url,
                event.url,
                [event.dates.start.localDate, event.dates.start.localTime],
                typeof event.priceRanges === "undefined"
                  ? "SOLD OUT"
                  : event.priceRanges,
                event.id
              )
            );
            const cardContainer = document.querySelector(".card-container");
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
            card.innerHTML = `
                              <img src="${event.images[0].url}" class="card-img-top">
                              <div class="card-body>
                              <h5 class="card-title">${event.name}</h2>
                              <ul>
                                <li>Start Date: ${event.dates.start.localDate}</li>
                                <li>Start Time: ${event.dates.start.localTime}</li>
                              </ul>
                              <a href = "${event.url}" class="btn btn-primary" target="_blank">Go to Event Page</a>
                            </div>
            `;

            cardContainer.append(card);
          });
        });
    }
  }
});

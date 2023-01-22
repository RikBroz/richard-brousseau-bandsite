function getShows() {
    axios
        .get(`https://project-1-api.herokuapp.com/showdates?api_key=${api_key}`)
        .then((response) => {
            renderShows(response.data);

            let showsContent = document.getElementsByClassName("shows__content");
            for (let i = 0; i < showsContent.length; i++) {
                showsContent[i].addEventListener("click", function() {
                    let current = document.getElementsByClassName("active");
                    if (current.length > 0) {
                        current[0].className = current[0].className.replace(" active", "");
                    }
                    this.className += " active";
                });
            }
        }
        ).catch((error) => {
            console.error(error);
        }
    );
}

getShows();

function createShowCard(show) {
    const divEl = document.createElement("div");
    divEl.classList.add("shows__show");

    const divEl2 = document.createElement("div");
    divEl2.classList.add("shows__content");

    let dateLabelEl = document.createElement("p");
    dateLabelEl.innerText = "Date";
    dateLabelEl.classList.add("shows__label", "shows__label--hidden");

    let dateContentEl = document.createElement("p");

    const showDate = new Date(show.date);
    const showDateFormatted = new Date(showDate.getFullYear(), showDate.getMonth(), showDate.getUTCDate());

    dateContentEl.innerText = showDateFormatted.toDateString();
    dateContentEl.classList.add("shows__data", "shows__data--date");

    let venueLabelEl = document.createElement("p");
    venueLabelEl.innerText = "Venue";
    venueLabelEl.classList.add("shows__label", "shows__label--hidden");
    
    let venueContentEl = document.createElement("p");
    venueContentEl.innerText = show.place;
    venueContentEl.classList.add("shows__data", "shows__data--venue");

    let locationLabelEl = document.createElement("p");
    locationLabelEl.innerText = "Location";
    locationLabelEl.classList.add("shows__label", "shows__label--hidden");

    let locationContentEl = document.createElement("p");
    locationContentEl.innerText = show.location;
    locationContentEl.classList.add("shows__data");

    let ticketButtonEl = document.createElement("button");
    ticketButtonEl.classList.add("shows__button");
    ticketButtonEl.innerText = "Buy Tickets";

    const hrEl = document.createElement("hr");
    hrEl.classList.add("shows__divider");

    divEl2.appendChild(dateLabelEl);
    divEl2.appendChild(dateContentEl);
    divEl2.appendChild(venueLabelEl);
    divEl2.appendChild(venueContentEl);
    divEl2.appendChild(locationLabelEl);
    divEl2.appendChild(locationContentEl);
    divEl2.appendChild(ticketButtonEl);

    divEl.appendChild(divEl2);
    divEl.appendChild(hrEl);

    return divEl;
}

function renderShows(showListings) {
    let showsEl = document.querySelector(".shows__section");
    showsEl.innerHTML = "";

    const hiddenDivEl = document.createElement("div");
    hiddenDivEl.classList.add("shows__dvl");
    let hiddenDateLabelEl = document.createElement("p");
    hiddenDateLabelEl.innerText = "Date";
    hiddenDateLabelEl.classList.add("shows__label");
    let hiddenVenueLabelEl = document.createElement("p");
    hiddenVenueLabelEl.innerText = "Venue";
    hiddenVenueLabelEl.classList.add("shows__label", "shows__label--venueAlign");
    let hiddenLocationLabelEl = document.createElement("p");
    hiddenLocationLabelEl.innerText = "Location";
    hiddenLocationLabelEl.classList.add("shows__label", "shows__label--locationAlign");

    hiddenDivEl.appendChild(hiddenDateLabelEl);
    hiddenDivEl.appendChild(hiddenVenueLabelEl);
    hiddenDivEl.appendChild(hiddenLocationLabelEl);
    
    showsEl.appendChild(hiddenDivEl);

    for (let i = 0; i < showListings.length; i++) {
        const card = createShowCard(showListings[i]);
        showsEl.appendChild(card);
    }
}
let showListings = [
    { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "Mon Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA" },
    { date: "Mon Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "Mon Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "Mon Dec 15 2021", venue: "Press Club", location: "San Francisco, CA" },
];

function createShowCard(show) {
    const divEl = document.createElement("div");
    divEl.classList.add("shows__show");

    const divEl2 = document.createElement("div");
    divEl2.classList.add("shows__content");

    let dateLabelEl = document.createElement("p");
    dateLabelEl.innerText = "Date";
    dateLabelEl.classList.add("shows__label", "shows__label--hidden");
    console.log(dateLabelEl.innerText);

    let dateContentEl = document.createElement("p");
    dateContentEl.innerText = show.date;
    dateContentEl.classList.add("shows__data", "shows__data--date");
    console.log(dateContentEl.innerText);

    let venueLabelEl = document.createElement("p");
    venueLabelEl.innerText = "Venue";
    venueLabelEl.classList.add("shows__label", "shows__label--hidden");
    console.log(venueLabelEl.innerText);
    
    let venueContentEl = document.createElement("p");
    venueContentEl.innerText = show.venue;
    venueContentEl.classList.add("shows__data", "shows__data--venue");
    console.log(venueContentEl.innerText);

    let locationLabelEl = document.createElement("p");
    locationLabelEl.innerText = "Location";
    locationLabelEl.classList.add("shows__label", "shows__label--hidden");
    console.log(locationLabelEl.innerText);

    let locationContentEl = document.createElement("p");
    locationContentEl.innerText = show.location;
    locationContentEl.classList.add("shows__data");
    console.log(locationContentEl.innerText);

    let ticketButtonEl = document.createElement("button");
    ticketButtonEl.classList.add("shows__button");
    ticketButtonEl.innerText = "Buy Tickets";
    console.log(ticketButtonEl.innerText);

    let hrEl = document.createElement("hr");
    hrEl.classList.add("shows__divider");

    divEl2.appendChild(dateLabelEl);
    divEl2.appendChild(dateContentEl);
    divEl2.appendChild(venueLabelEl);
    divEl2.appendChild(venueContentEl);
    divEl2.appendChild(locationLabelEl);
    divEl2.appendChild(locationContentEl);
    
    divEl2.appendChild(ticketButtonEl);

    divEl.appendChild(divEl2);
    console.log(divEl2);

    divEl.appendChild(hrEl);

    console.log(divEl);

    return divEl;
}

function renderShows() {
    let showsEl = document.querySelector(".shows__section");
    console.log(showsEl);
    showsEl.innerHTML = "";

    let hiddenDivEl = document.createElement("div");
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

renderShows();

let sC = document.getElementsByClassName("shows__content");
for (let i = 0; i < sC.length; i++) {
    sC[i].addEventListener("click", function() {
        console.log("Clicked on show");
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}
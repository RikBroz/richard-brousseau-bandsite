axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=${api_key}`)
    .then((response) => {
        console.log(response.data);
        renderShows(response.data);
    }
    ).catch((error) => {
        console.log(error);
    }
);

// let showListings = [
//     { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
//     { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA" },
//     { date: "Mon Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA" },
//     { date: "Mon Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA" },
//     { date: "Mon Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA" },
//     { date: "Mon Dec 15 2021", venue: "Press Club", location: "San Francisco, CA" },
// ];

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

    const showDate = new Date(show.date);
    console.log("show date is: " + showDate);
    console.log("show date month was : " + (showDate.getMonth()+1));
    console.log("show date UTC month was : " + (showDate.getUTCMonth()+1));
    console.log("show date day was : " + showDate.getDate());
    console.log("show date UTC day was : " + showDate.getUTCDate());
    let showDate2 = `${showDate.getUTCDay()} ${((showDate.getUTCMonth()+1) < 10 ? '0' : '') + (showDate.getUTCMonth()+1)} ${(showDate.getUTCDate() < 10 ? '0' : '') + showDate.getUTCDate()} ${showDate.getUTCFullYear()}`;
    console.log("updated showDate2: " + showDate2);
    let showDateFormatted = new Date(showDate.getFullYear(), showDate.getMonth(), showDate.getUTCDate());
    console.log("CORRECT formatted show date is: " + (showDateFormatted.toDateString()));

    // const showDate2 = new Date(Date.UTC(showDate.getFullYear(), showDate.getMonth(), showDate.getDay()));
    /* const showDate2 = new Date(Date.UTC(showDate.getFullYear(), showDate.getUTCMonth(), showDate.getUTCDate()));
    console.log("CORRECT show date is: " + showDate2.toUTCString()); */
    // console.log("CORRECT show date is: " + (showDate.getDate()+1));
    //date.toLocaleString('en-US', { month: 'short' });

    /* const showDateDay = (showDate.getDay()+1).toLocaleString('en-US', { weekday: 'long' });
    console.log("show date day is: " + showDateDay);
    console.log("formatted show date day is: " + showDate.toLocaleString('en-US', { weekday: 'short' }));
    console.log("formatted show date month is: " + showDate.toLocaleString('en-US', { month: 'short' })); */
    // let showDateFormatted = `${showDate.getUTCDay()} ${((showDate.getUTCMonth()+1) < 10 ? '0' : '') + (showDate.getUTCMonth()+1)} ${(showDate.getUTCDate() < 10 ? '0' : '') + showDate.getUTCDate()} ${showDate.getUTCFullYear()}`;
   
    // let showDateFormatted = `${showDate2.getUTCDay()} ${((showDate2.getUTCMonth()+1) < 10 ? '0' : '') + (showDate2.getUTCMonth()+1)} ${(showDate2.getUTCDate() < 10 ? '0' : '') + showDate2.getUTCDate()} ${showDate2.getUTCFullYear()}`;
    /* let showDateFormatted = showDate2;
    console.log("formatted show date is: " + showDateFormatted); */
    // console.log("CORRECT formatted show date is: " + (showDate2.toDateString()));
    /* console.log("CORRECT formatted show date is: " + (showDateFormatted.toDateString()));*/

    // dateContentEl.innerText = show.date;
    dateContentEl.innerText = showDateFormatted.toDateString();
    dateContentEl.classList.add("shows__data", "shows__data--date");
    console.log(dateContentEl.innerText);

    let venueLabelEl = document.createElement("p");
    venueLabelEl.innerText = "Venue";
    venueLabelEl.classList.add("shows__label", "shows__label--hidden");
    console.log(venueLabelEl.innerText);
    
    let venueContentEl = document.createElement("p");
    venueContentEl.innerText = show.place;
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

// function renderShows() {
function renderShows(showListings) {
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

// renderShows();

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
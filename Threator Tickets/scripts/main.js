const name = document.getElementById("name");
const address = document.getElementById("address");

const shows = document.getElementById("shows");
const tickets = document.getElementById("tickets");

const etickets = document.getElementById("etickets");
const post = document.getElementById("posted");
const offices = document.getElementById("offices");

const submit = document.getElementById("submit");
const output = document.getElementById("output");

submit.addEventListener("click", function() {
    let ticket = parseInt(tickets.value);
	console.log(ticket);
    let price = parseInt(shows.value);
	console.log(price);
	let discount = 0;
    let cost = 0;

    if (name.value.length < 1) {
        output.innerText = "No name entered";
        return;
    }

    if (address.value.length < 1) {
        output.innerText = "No address entered";
        return;
    }

    if (isNaN(ticket) || ticket < 1) {
        output.innerText = "Haven't got a ticket value";
        return;
    }
	
	let v = price * ticket;
	
    switch (true) {
        case (ticket <= 5):
            cost = parseFloat(v);
			console.log(v);
            break;

        case (ticket > 5 && ticket < 10):
            cost = parseFloat(v - (v * 0.10));
			console.log(v);
            discount = 0.10;
            break;

        case (ticket >= 10):
            cost = parseFloat(v - (v * 0.15));
			console.log(v);
            discount = 0.15;
            break;
    }

    let eticket = parseFloat(etickets.value);
    let post = parseFloat(posted.value);
    let office = parseFloat(offices.value);
    let buy = 0;
	let collectionmedthod = "";
	
    switch (true) {
        case (etickets.checked):
            collectionmethod = "E-Ticket collection";
			buy = eticket;
            cost += eticket;
            break;

        case (posted.checked):
            collectionmethod = "Postal collection";
            buy = post;
            cost += post;
            break;

        case (offices.checked):
            collectionmethod = "Box Office collection";
            buy = office;
            cost += office;
            break;

        default:
            output.innerText = "No tickets have been selected."
            return;
    }
	
    output.innerText = `${ticket} tickets for the ${shows.options[shows.selectedIndex].innerText}\r
    Total cost: £${(ticket * price).toFixed(2)}\r
    ${discount * 100}% discount: £${(ticket * price * discount).toFixed(2)}\r
	${collectionmethod}: £${(buy).toFixed(2)}\r
    Final cost: £${(cost).toFixed(2)}\r`;
});
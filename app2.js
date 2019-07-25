const apiKey = "b6T6Aw.VelCwA:WMjJ_dBkN9KPoFDp";

const channels = "";

const url = "";

const eventSource = new EventSource(url);

const eventList = document.querySelector("ul#events");

function addEvent(text) {
    const newElement = document.createElement("li");
    newElement.textContent = text;
    eventList.appendChild(newElement);
}

eventSource.onopen = () => {
    addEvent("connected and subscribed to channel");
}

eventSource.onmessage = (event) => {
    const message = JSON.parse(event.data);
    addEvent(`Message: ${message.name} - ${message.data}`);
}
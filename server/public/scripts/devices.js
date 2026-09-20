const mainContent = document.getElementById("main-content");

const renderDevices = (devices) => {
  const heading = document.createElement("h2");
  heading.textContent = "IoT Devices";

  const intro = document.createElement("p");
  intro.textContent =
    "Discover controllers, computers, cameras, and connected devices used to build smart home systems.";

  const deviceGrid = document.createElement("div");
  deviceGrid.classList.add("device-grid");

  devices.forEach((device) => {
    const card = document.createElement("article");
    card.classList.add("device-card");

    const name = document.createElement("h3");
    name.textContent = device.name;

    const type = document.createElement("p");
    type.innerHTML = `<strong>Type:</strong> ${device.type}`;

    const connectivity = document.createElement("p");
    connectivity.innerHTML = `<strong>Connectivity:</strong> ${device.connectivity}`;

    const description = document.createElement("p");
    description.textContent = device.description;

    const image = document.createElement("img");
    image.src = device.image;
    image.alt = `${device.name} device`;
    image.classList.add("device-image");

    const detailsLink = document.createElement("a");
    detailsLink.textContent = "View Details";
    detailsLink.href = `/devices/${device.id}`;
    detailsLink.setAttribute("role", "button");

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(connectivity);
    card.appendChild(description);
    card.appendChild(detailsLink);

    deviceGrid.appendChild(card);
  });

  mainContent.appendChild(heading);
  mainContent.appendChild(intro);
  mainContent.appendChild(deviceGrid);
};

const getDevices = async () => {
  try {
    const response = await fetch("/devices");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const devices = await response.json();

    renderDevices(devices);
  } catch (error) {
    console.error("Unable to fetch devices:", error);

    mainContent.innerHTML =
      "<p>Unable to load IoT devices. Please try again later.</p>";
  }
};

getDevices();

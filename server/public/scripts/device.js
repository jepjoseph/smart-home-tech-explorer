const deviceImage = document.getElementById("device-image");
const deviceName = document.getElementById("device-name");
const deviceType = document.getElementById("device-type");
const deviceManufacturer = document.getElementById("device-manufacturer");
const deviceConnectivity = document.getElementById("device-connectivity");
const deviceVoltage = document.getElementById("device-voltage");
const deviceUseCase = document.getElementById("device-use-case");
const deviceDescription = document.getElementById("device-description");

const renderDevice = (device) => {
  deviceImage.src = device.image;
  deviceImage.alt = `${device.name} device`;

  deviceName.textContent = device.name;
  deviceType.textContent = device.type;
  deviceManufacturer.textContent = device.manufacturer;
  deviceConnectivity.textContent = device.connectivity;
  deviceVoltage.textContent = device.operatingVoltage;
  deviceUseCase.textContent = device.useCase;
  deviceDescription.textContent = device.description;

  document.title = `${device.name} | Smart Home Tech Explorer`;
};

const getDevice = async () => {
  try {
    const pathParts = window.location.pathname.split("/");
    const deviceId = parseInt(pathParts[pathParts.length - 1]);

    const response = await fetch("/devices");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const devices = await response.json();

    const device = devices.find((device) => device.id === deviceId);

    if (!device) {
      window.location.href = "/404.html";
      return;
    }

    renderDevice(device);
  } catch (error) {
    console.error("Unable to load device:", error);
  }
};

getDevice();

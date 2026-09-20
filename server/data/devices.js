const deviceData = [
  {
    id: 1,
    name: "ESP32",
    type: "Microcontroller",
    manufacturer: "Espressif Systems",
    connectivity: "Wi-Fi, Bluetooth",
    operatingVoltage: "3.3V",
    useCase: "IoT monitoring, control, and automation",
    description:
      "A Wi-Fi and Bluetooth-enabled microcontroller commonly used to build connected embedded and IoT applications.",
    image: "/images/esp32.jpeg",
  },
  {
    id: 2,
    name: "Arduino Mega",
    type: "Microcontroller Board",
    manufacturer: "Arduino",
    connectivity: "USB, Serial",
    operatingVoltage: "5V",
    useCase:
      "Controlling systems that require many input and output connections",
    description:
      "A microcontroller board designed for projects that need a large number of digital and analog input and output connections.",
    image: "/images/arduino-mega.jpg",
  },
  {
    id: 3,
    name: "Raspberry Pi",
    type: "Single-Board Computer",
    manufacturer: "Raspberry Pi",
    connectivity: "Wi-Fi, Bluetooth, Ethernet",
    operatingVoltage: "5V",
    useCase: "Smart home servers, gateways, dashboards, and automation",
    description:
      "A compact single-board computer capable of running an operating system and hosting software for smart home and IoT applications.",
    image: "/images/raspberry-pi.jpg",
  },
  {
    id: 4,
    name: "Smart Camera",
    type: "IoT Camera",
    manufacturer: "Arlo",
    connectivity: "Wi-Fi, Ethernet",
    operatingVoltage: "Varies by model",
    useCase: "Remote video monitoring and home security",
    description:
      "A network-connected camera that can provide remote video monitoring and integrate with smart home security systems.",
    image: "/images/smart-camera.jpeg",
  },
  {
    id: 5,
    name: "Smart Plug",
    type: "Smart Power Device",
    manufacturer: "Ring",
    connectivity: "Wi-Fi",
    operatingVoltage: "Varies by model and region",
    useCase: "Remote appliance control and home automation",
    description:
      "A connected power outlet adapter that allows compatible electrical devices to be controlled remotely or through automation rules.",
    image: "/images/smart-plug.jpeg",
  },
];

export default deviceData;

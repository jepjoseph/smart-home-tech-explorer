const header = document.querySelector("header");

header.classList.add("container");

const title = document.createElement("h1");
title.textContent = "Smart Home Tech Explorer";

const subtitle = document.createElement("p");
subtitle.textContent =
  "Explore the devices and technologies behind modern smart homes.";

const homeButton = document.createElement("a");
homeButton.textContent = "Home";
homeButton.href = "/";
homeButton.setAttribute("role", "button");
homeButton.classList.add("outline");

header.appendChild(title);
header.appendChild(subtitle);
header.appendChild(homeButton);

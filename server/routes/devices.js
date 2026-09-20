import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import deviceData from "../data/devices.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(deviceData);
});

router.get("/:deviceId", (req, res) => {
  const deviceId = parseInt(req.params.deviceId);

  const device = deviceData.find((device) => device.id === deviceId);

  if (!device) {
    return res
      .status(404)
      .sendFile(path.resolve(__dirname, "../public/404.html"));
  }

  res.status(200).sendFile(path.resolve(__dirname, "../public/device.html"));
});

export default router;

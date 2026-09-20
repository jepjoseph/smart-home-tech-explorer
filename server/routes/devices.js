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
  res.status(200).sendFile(path.resolve(__dirname, "../public/device.html"));
});

export default router;

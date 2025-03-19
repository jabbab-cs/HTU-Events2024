const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const multer = require("multer");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // Save images in the 'public/images' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

// Get all events
router.get("/", eventController.getAllEvents);

// Get a single event by ID
router.get("/:id", eventController.getEventById);

// Create a new event (with image upload)
router.post("/", upload.single("image"), eventController.createEvent);

// Delete an event by ID
router.delete("/:id", eventController.deleteEvent);

module.exports = router;

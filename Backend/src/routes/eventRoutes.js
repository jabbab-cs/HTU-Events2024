const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // this saves images to a directorey called images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
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

router.post("/:id/rsvp", eventController.addRSVP);
router.get("/:id/rsvps", eventController.getRSVPs);

module.exports = router;

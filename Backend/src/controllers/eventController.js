let events = [];

exports.getAllEvents = (req, res) => {
  res.json(events);
};

exports.getEventById = (req, res) => {
  const event = events.find((e) => e.id === Number.parseInt(req.params.id));
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json(event);
};

exports.createEvent = (req, res) => {
  const { title, clubName, date, time, location, description } = req.body;

  // Check if an image was uploaded
  if (!req.file) {
    return res.status(400).json({ error: "No image file uploaded" });
  }

  const imageSrc = `/images/${req.file.filename}`; // Path to the uploaded image

  const newEvent = {
    id: events.length > 0 ? Math.max(...events.map((e) => e.id)) + 1 : 1,
    title,
    clubName,
    date,
    time,
    location,
    description,
    imageSrc, // Include the image path in the event data
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};

exports.deleteEvent = (req, res) => {
  const eventId = Number.parseInt(req.params.id);
  const initialLength = events.length;
  events = events.filter((e) => e.id !== eventId);

  if (events.length === initialLength) {
    return res.status(404).json({ error: "Event not found" });
  }

  res.json({ message: "Event deleted successfully" });
};

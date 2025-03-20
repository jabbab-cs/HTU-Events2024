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

  const imageSrc = `/images/${req.file.filename}`;

  const newEvent = {
    id: events.length > 0 ? Math.max(...events.map((e) => e.id)) + 1 : 1,
    title,
    clubName,
    date,
    time,
    location,
    description,
    imageSrc,
    rsvps: [],
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

exports.addRSVP = (req, res) => {
  const eventId = Number.parseInt(req.params.id);
  const { name, studentId } = req.body;
  const event = events.find((e) => e.id === eventId);
  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  const hasRSVPd = event.rsvps.some((rsvp) => rsvp.studentId === studentId);

  if (hasRSVPd) {
    return res.status(400);
  }

  event.rsvps.push({ name, studentId });
  res.status(200).json({ message: "RSVP added successfully" });
};

exports.getRSVPs = (req, res) => {
  const eventId = Number.parseInt(req.params.id);
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  res.json(event.rsvps);
};

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AddEvent from "./components/AddEvent";
import { Loader2 } from "lucide-react";
import EventDetails from "./components/EventDetails";

export interface Event {
  id: number;
  title: string;
  clubName: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageSrc: string;
  imageFile?: File;
  rsvps?: { name: string; studentId: string }[];
}

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (currentPage === "home") {
      fetchEvents();
    }
  }, [currentPage]);

  // Handle adding a new event
  const handleAddEvent = async (newEvent: Omit<Event, "id">) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", newEvent.title);
      formData.append("clubName", newEvent.clubName);
      formData.append("date", newEvent.date);
      formData.append("time", newEvent.time);
      formData.append("location", newEvent.location);
      formData.append("description", newEvent.description);

      if (newEvent.imageFile) {
        formData.append("image", newEvent.imageFile);
      }

      const response = await fetch("http://localhost:3000/api/events", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add event");
      }

      const addedEvent = await response.json();
      setEvents((prev) => [...prev, addedEvent]);
      setCurrentPage("home");
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (selectedEvent) {
      return (
        <EventDetails
          event={selectedEvent}
          onBack={() => setSelectedEvent(null)}
        />
      );
    }

    if (currentPage === "home") {
      return (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Welcome, Admin</h1>
            <p className="text-gray-600">{formattedDate}</p>
          </div>
          <h2 className="text-xl font-semibold mb-4">Your Upcoming Events</h2>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
              {error}
            </div>
          ) : events.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-md p-6 text-center">
              <p className="text-gray-600">No events found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((event) => (
                <Card
                  key={event.id}
                  {...event}
                  Click={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          )}
        </div>
      );
    } else if (currentPage === "add-event") {
      return <AddEvent onSubmit={handleAddEvent} />;
    } else {
      return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist.
          </p>
          <button
            onClick={() => setCurrentPage("home")}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Go Home
          </button>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar
        onNavigate={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      <main className="flex-1">{renderContent()}</main>
      <footer className="bg-neutral-800 text-sm text-gray-400 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">HTU Events</h3>
              <p className="text-sm text-gray-400">© 2024 GDG HTU Club</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

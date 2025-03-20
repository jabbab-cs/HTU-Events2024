import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface EventDetailsProps {
  event: Event;
  onBack: () => void;
}

interface RSVP {
  name: string;
  studentId: string;
}

const EventDetails = ({ event, onBack }: EventDetailsProps) => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchRsvps = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/events/${event.id}/rsvps`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch RSVPs");
        }
        const data = await response.json();
        setRsvps(data);
      } catch (error) {
        console.error("Error fetching RSVPs:", error);
      }
    };

    fetchRsvps();
  }, [event.id, refresh]);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <Button
        onClick={onBack}
        className="mb-4 text-sm bg-gray-600 text-white hover:bg-gray-900"
      >
        Back to Events
      </Button>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
        <div className="flex flex-col md:flex-row">
          <div className="h-[400px] w-full md:w-1/2 md:h-[600px] relative">
            <img
              src={"http://localhost:3000" + event.imageSrc}
              alt={event.title}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
          </div>

          <div className="p-8 md:p-10 md:w-1/2 flex flex-col">
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                <p className="text-lg text-primary font-medium">
                  {event.clubName}
                </p>
              </div>

              <div className="space-y-3 py-4 border-y mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-24 text-gray-500">Date</div>
                  <div className="font-medium">{event.date}</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-24 text-gray-500">Time</div>
                  <div className="font-medium">{event.time}</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-24 text-gray-500">Location</div>
                  <div className="font-medium">{event.location}</div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">About Event</h2>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">RSVPs</h2>
                {rsvps.length > 0 ? (
                  <ul className="space-y-2">
                    {rsvps.map((rsvp, index) => (
                      <li key={index} className="text-gray-600">
                        {rsvp.name} - {rsvp.studentId}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No RSVPs yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

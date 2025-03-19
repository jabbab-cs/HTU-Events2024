interface EventDetailsProps {
  title: string;
  clubName: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageSrc: string;
}

const EventDetails = ({
  title,
  clubName,
  date,
  time,
  location,
  description,
  imageSrc,
}: EventDetailsProps) => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
        <div className="flex flex-col md:flex-row">
          <div className="h-[400px] w-full md:w-1/2 md:h-[600px] relative">
            <img
              src={imageSrc || "/placeholder.svg?height=600&width=400"}
              alt={title}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
          </div>

          <div className="p-8 md:p-10 md:w-1/2 flex flex-col">
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-lg text-primary font-medium">{clubName}</p>
              </div>

              <div className="space-y-3 py-4 border-y mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-24 text-gray-500">Date</div>
                  <div className="font-medium">{date}</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-24 text-gray-500">Time</div>
                  <div className="font-medium">{time}</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-24 text-gray-500">Location</div>
                  <div className="font-medium">{location}</div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">About Event</h2>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-black/90 transition-colors mt-8">
              Register for Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

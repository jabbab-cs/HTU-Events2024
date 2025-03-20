interface CardProps {
  title: string;
  clubName: string;
  date: string;
  time: string;
  location: string;
  imageSrc: string;
  Click: () => void;
}

const Card = ({
  title,
  clubName,
  date,
  time,
  location,
  imageSrc,
  Click,
}: CardProps) => {
  return (
    <div
      className="border border-gray-200 rounded-lg flex flex-col sm:flex-row gap-4 p-4 hover:shadow-sm transition-shadow bg-white hover:bg-gray-50 hover:translate-y-[-10px]"
      onClick={Click}
    >
      <img
        src={"http://localhost:3000" + imageSrc}
        alt={title}
        className="h-[200px] w-full sm:w-[200px] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between py-1">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {title}
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-700 mt-1">{clubName}</h2>
        </div>

        <div className="space-y-2 mt-4 sm:mt-0">
          <p className="text-gray-600">{date}</p>
          <p className="text-gray-600">{time}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

interface CalendarDay {
  date: string;
  day: string;
  isActive: boolean;
}

interface CalendarProps {
  days: CalendarDay[];
}

export default function Calendar({ days }: CalendarProps) {
  return (
    <>
      <h2 className="text-xl font-bold text-center mb-2">Enero 2024</h2>
      <div className="flex overflow-x-auto mb-6 pb-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`flex-shrink-0 mx-2 p-3 rounded-lg ${
              day.isActive ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            <div className="text-center text-lg font-bold">{day.date}</div>
            <div className={`text-center text-sm ${day.isActive ? 'text-blue-100' : 'text-gray-500'}`}>
              {day.day}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
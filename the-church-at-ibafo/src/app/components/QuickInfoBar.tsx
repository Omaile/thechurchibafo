import {
  Clock3,
  Users,
  Heart,
  BookOpen,
  MapPin,
} from "lucide-react";

export default function QuickInfoBar() {
  const items = [
    {
      icon: <Clock3 size={32} />,
      title: "Service Times",
      text: "Sunday 9:00AM\nWednesday 5:00PM",
    },
    {
      icon: <Users size={32} />,
      title: "New Here?",
      text: "We'd love to welcome you.",
    },
    {
      icon: <Heart size={32} />,
      title: "Give",
      text: "Support the work of the church.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Bible",
      text: "Read. Study. Grow.",
    },
    {
      icon: <MapPin size={32} />,
      title: "Location",
      text: "Ibafo, Ogun State, Nigeria",
    },
  ];

  return (
    <section className="bg-white shadow-lg rounded-xl max-w-7xl mx-auto -mt-10 relative z-20">
      <div className="grid md:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="p-6 border-r last:border-r-0 flex gap-4 items-center"
          >
            <div className="text-yellow-500">
              {item.icon}
            </div>

            <div>
              <h3 className="font-bold">
                {item.title}
              </h3>

              <p className="text-sm whitespace-pre-line text-gray-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
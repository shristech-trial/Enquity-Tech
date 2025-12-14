import { useParams } from "react-router-dom";
import { List,CheckCircle, Clock, Monitor } from "lucide-react";
import { courses } from "../data/courses";
import Footer from "../components/Footer";

interface Course {
  slug: string;
  title: string;
  logo: string;
  fullDescription: string;
  includes: string;
  learn: string[];
  whoShouldJoin: string[];
  schedule: {
    days: string;
    timing?: string;
  };
  outcomes: string[];
  duration: string;
  mode: string;
}

export default function CourseDetails() {
  const { courseTitle } = useParams<{ courseTitle: string }>();
  const course = courses.find((c) => c.slug === courseTitle) as Course | undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h2 className="text-2xl">Course not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img src={course.logo} alt={course.title} className="h-14 object-contain" />
          <h1 className="text-4xl lg:text-6xl font-bold">{course.title}</h1>
        </div>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">{course.fullDescription}</p>

        {/* Meta */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
            <Clock className="text-blue-400 mb-3" />
            <p className="font-semibold">Duration</p>
            <p className="text-gray-400">{course.duration}</p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
            <Monitor className="text-green-400 mb-3" />
            <p className="font-semibold">Mode</p>
            <p className="text-gray-400">{course.mode}</p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
          <List className="text-purple-400 mb-2" />
            <p className="font-semibold mb-2">Includes</p>
            <p className="text-gray-400 text-center">{course.includes}</p>
          </div>
        </div>

        {/* Sections */}
        {course.learn.length > 0 && <Section title="What You Will Learn" items={course.learn} color="green" />}
        {course.whoShouldJoin.length > 0 && <Section title="Who Should Join" items={course.whoShouldJoin} color="blue" />}
        {course.outcomes.length > 0 && <Section title="Learning Outcomes" items={course.outcomes} color="purple" />}

        {/* Schedule */}
        {course.schedule && (
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 mb-16">
            <h2 className="text-2xl font-bold mb-4">Schedule</h2>
            <p className="text-gray-400">Days: {course.schedule.days}</p>
            {course.schedule.timing && <p className="text-gray-400">Timing: {course.schedule.timing}</p>}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={`/enrollment?course=${course.title}`}
            className="inline-block px-10 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Enroll Now
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, items, color }: { title: string; items: string[]; color: "green" | "blue" | "purple" }) {
  const colorMap = {
    green: "text-green-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className={`${colorMap[color]} mt-1`} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

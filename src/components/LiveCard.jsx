import { Globe2 } from "lucide-react";

const getCourseHash = (title) => {
  switch (title) {
    case "Full Stack Development":
      return "#full-stack-development-course";
    case "HR Executive Training":
      return "#hr-executive-course";
    case "HR Recruitment Training":
      return "#hr-recruitment-course";
    case "Software Quality Testing(QA Testing)":
    case "Software Quality Testing (QA Testing)":
      return "#qa-testing-course";
    case "DSA":
      return "#dsa-course";
    default:
      return "#know-more";
  }
};

function LiveCard({ thumb, title, language, onSyllabusClick }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_3px_18px_rgba(15,23,42,0.08)]">
      <div className="relative h-[150px] overflow-hidden bg-black">
        <img src={thumb} alt={`${title} course preview`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </div>
      <div className="flex min-h-[168px] flex-col p-5">
        <h3 className="min-h-[48px] text-[16px] font-extrabold leading-6 text-guvi-ink">{title}</h3>
        <p className="mt-4 flex items-center gap-2 text-sm font-bold text-black/55">
          <Globe2 size={18} aria-hidden="true" /> {language}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
          <button
            type="button"
            onClick={() => onSyllabusClick?.(title)}
            className="flex h-10 items-center justify-center rounded-md border border-black text-sm font-bold text-black transition hover:border-guvi-deepGreen hover:text-guvi-deepGreen cursor-pointer"
          >
            Syllabus
          </button>
          <a
            href={getCourseHash(title)}
            className="flex h-10 items-center justify-center rounded-md btn-glossy-green text-sm font-extrabold"
          >
            Know More
          </a>
        </div>
      </div>
    </article>
  );
}

export default LiveCard;

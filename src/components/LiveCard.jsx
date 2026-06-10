import { Globe2 } from "lucide-react";

function LiveCard({ thumb, title, language }) {
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
          <a href="#syllabus" className="flex h-10 items-center justify-center rounded-md border border-black text-sm font-bold text-black">
            Syllabus
          </a>
          <a
            href="#know-more"
            className="flex h-10 items-center justify-center rounded-md bg-guvi-green text-sm font-extrabold text-black shadow-[0_8px_18px_rgba(21,213,77,0.22)]"
          >
            Know More
          </a>
        </div>
      </div>
    </article>
  );
}

export default LiveCard;

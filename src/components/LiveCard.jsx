import { Globe2 } from "lucide-react";

function LiveCard({ thumb, title, language }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-card">
      <div className="relative h-[219px] overflow-hidden bg-black">
        <img src={thumb} alt={`${title} course preview`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </div>
      <div className="flex min-h-[305px] flex-col p-5">
        <h3 className="min-h-[100px] text-[24px] font-extrabold leading-[1.45] tracking-[-0.01em] text-guvi-ink">{title}</h3>
        <p className="mt-6 flex items-center gap-2 text-[18px] font-medium text-black/60">
          <Globe2 size={25} aria-hidden="true" /> {language}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-4 pt-9">
          <a href="#syllabus" className="flex h-[62px] items-center justify-center rounded-md border border-black text-[19px] font-bold text-black">
            Syllabus
          </a>
          <a
            href="#know-more"
            className="flex h-[62px] items-center justify-center rounded-md bg-guvi-green text-[20px] font-extrabold text-black shadow-[0_15px_28px_rgba(21,213,77,0.25)]"
          >
            Know More
          </a>
        </div>
      </div>
    </article>
  );
}

export default LiveCard;

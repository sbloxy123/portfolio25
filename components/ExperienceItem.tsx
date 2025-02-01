import BadgeItem from './Badges';
import { ExperienceJobType } from './sections/ExperienceSection';

const ExperienceItem = ({ experience }: { experience: ExperienceJobType }) => {
  const { title, employer, details, commenceDate, finalDate, tech } = experience;
  return (
    <li className="bg-[rgba(var(--background-opac),0.2)] pb-20 font-font_anonymous last-of-type:pb-0 small:flex small:gap-7">
      <div className="experience__date small:min-w-[28%]">
        <p className="pt-[0.5rem] uppercase tracking-[0.1em]">
          {commenceDate} ⸺ <span>{finalDate}</span>
        </p>
      </div>
      <div className="experience__details">
        <h3 className="pb-5 text-theme_green">
          {title} • {employer}
        </h3>
        <p className="pb-10">{details}</p>

        <BadgeItem tech={tech} />
      </div>
    </li>
  );
};

export default ExperienceItem;

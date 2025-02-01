const BadgeItem = ({ tech }: { tech: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {tech.map((tech, index) => (
        <li
          key={index}
          className="tech__item flex w-fit border-spacing-1 items-center justify-center rounded-md border border-theme_green bg-[rgba(var(--green-opac),0.1)] px-3 py-1"
        >
          <span className="font-font_inter text-[1.6rem] text-theme_green">{tech}</span>
        </li>
      ))}
    </ul>
  );
};

export default BadgeItem;

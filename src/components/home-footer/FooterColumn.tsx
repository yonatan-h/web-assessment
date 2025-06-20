export default function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; link: string }[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold">{title}</h2>

      <ul className="flex flex-col gap-1">
        {links.map(({ title, link }) => {
          return (
            <li className="list-none">
              <a href={link} key={link}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

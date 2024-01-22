import { ReactNode } from "react";

const AccordionTitle = ({
  title,
  icon,
}: {
  title: string;
  icon?: ReactNode;
}) => {
  return (
    <header className="flex items-center mt-3">
      {icon}
      <h1 className="font-bold text-3xl sm:text-5xl">{title}</h1>
    </header>
  );
};

export default AccordionTitle;

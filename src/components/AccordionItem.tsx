import { useState } from "react";
import { IconMinus, IconPlus } from "../assets/images";
import { IAccordionItem } from "../types/Accordion";

const AccordionItem = ({ id, title, description }: IAccordionItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === " " || event.key === "Spacebar") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <article key={id} className="flex flex-col py-5">
      <div
        className="flex items-center justify-between"
        tabIndex={0}
        onKeyDown={handleKeyPress}
      >
        <h2
          className="font-semibold hover:text-active-purple hover:cursor-pointer mr-5 pr-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </h2>
        <button tabIndex={-1} type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IconMinus /> : <IconPlus />}
        </button>
      </div>
      {isOpen ? <p className="text-grayish-purple mt-5">{description}</p> : ""}
    </article>
  );
};

export default AccordionItem;

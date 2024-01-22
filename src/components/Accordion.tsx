import { IconStar } from "../assets/images";
import { IAccordionProps } from "../types/Accordion";
import AccordionItems from "./AccordionItems";
import AccordionTitle from "./AccordionTitle";

const Accordion = ({ title, items }: IAccordionProps) => {
  return (
    <main className="w-[325px] sm:w-[600px] bg-white z-10 pt-5 px-5 sm:pt-8 sm:pb-4 sm:px-8 mb-auto mx-auto mt-[140px] sm:mt-[160px] rounded-lg sm:rounded-xl shadow-xl">
      <AccordionTitle
        title={title}
        icon={<IconStar className="sm:h-full pr-3 sm:pr-0 mr-2 sm:mr-5" />}
      />
      <AccordionItems items={items} />
    </main>
  );
};

export default Accordion;

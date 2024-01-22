import { IAccordionItems } from "../types/Accordion";
import AccordionItem from "./AccordionItem";

const AccordionItems: React.FC<IAccordionItems> = ({ items }) => {
  return (
    <section className="flex flex-col flex-start">
      <div className="mt-4">
        <div className="divide-y">
          {items.map((item) => (
            <AccordionItem {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionItems;

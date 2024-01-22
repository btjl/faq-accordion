export interface IAccordionItem {
  id: number;
  title: string;
  description: string;
}

export interface IAccordionItems {
  items: IAccordionItem[];
}

export interface IAccordionProps {
  title: string;
  items: IAccordionItem[];
}

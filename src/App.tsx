import Accordion from "./components/Accordion";
import { faqs } from "./data/faqs";

export default function App() {
  return (
    <div className="min-h-screen flex bg-light-pink bg-pattern-mobile pb-[140px] bg-repeat-x sm:bg-pattern-desktop relative">
      <Accordion title="FAQs" items={faqs} />
    </div>
  );
}

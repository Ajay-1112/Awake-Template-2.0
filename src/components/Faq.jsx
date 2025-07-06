import { useRef, useState } from "react";
import { faqsList } from "@/data/Faq_data";

const FaqsCard = ({ faq }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b cursor-pointer"
      style={{ borderColor: "var(--color-border)" }}
      onClick={handleOpenAnswer}
    >
      <h4
        className="pb-5 flex items-center justify-between text-lg font-medium"
        style={{ color: "var(--color-primary-text)" }}
      >
        {faq.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "var(--color-tertiary)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "var(--color-tertiary)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="transition-all duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="pb-5" style={{ color: "var(--color-secondary-text)" }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section
      className="leading-relaxed max-w-screen-xl  mx-auto px-5 md:px-8 rounded-4xl md:p-8"
      id="Faq"
    >
      <div className="space-y-3 text-center">
        <h1
          className="md:text-5xl text-4xl font-semibold"
          style={{ color: "var(--color-primary-text)" }}
        >
          Got questions? <br /> We’ve got{" "}
          <span className="font-instrument-serif font-medium text-secondary-text italic">
            answers
          </span>
        </h1>
      </div>
      <div className="mt-20 max-w-6xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faq={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;

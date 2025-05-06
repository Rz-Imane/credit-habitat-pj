import React, { useState } from "react";
import faqData from "../data/faq.json";
import "../styles/faq.css";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Les questions les plus fréquentes</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleAnswer(index)}
        >
          <p className="faq-question">{item.question}</p>
          <p className="faq-answer">{item.answer}</p>
        </div>        
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

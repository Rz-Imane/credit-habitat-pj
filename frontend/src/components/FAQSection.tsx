import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/faq.css";

const FAQSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Get FAQ array from translations
  const faqList = t("faq", { returnObjects: true }) as { question: string; answer: string }[];

  const toggleAnswer = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">{t("faqTitle")}</h2>
      <div className="faq-container">
        {faqList.map((item, index) => (
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

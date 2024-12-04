import React, { useState } from 'react';
import '../../../css/common/FAQ.css';
import logo2 from "../../../assets/landing_page/logo_2.png"
import icon_plus from "../../../assets/icon/icon_plus.png"
import icon_sub from "../../../assets/icon/icon_sub.png"

const faqs = [
  {
    question: "What issues can hypnotherapy help with?",
    answer: "Stella specializes in smoking cessation, weight loss, anxiety, depression, and overcoming challenges like fear of flying or lack of motivation."
  },
  {
    question: "What is the Virtual Gastric Band process?",
    answer: "Details about the process of Virtual Gastric Band."
  },
  {
    question: "How long does a smoking cessation session take?",
    answer: "Typically, a smoking cessation session takes about an hour."
  },
  {
    question: "How are payments handled for hypnotherapy sessions?",
    answer: "Payments for sessions can be made online or in person at the time of the session."
  },
  {
    question: "What qualifications does Stella Dichiara have?",
    answer: "Stella Dichiara is a certified hypnotherapist with years of experience helping clients achieve their goals."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open/close
  };

  return (
    <div className="faq-container">
      <img src={logo2} width={180}/>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{faq.question}</span>
              <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>
                {activeIndex === index ?  <img src={icon_sub} width={24}/> : <img src={icon_plus} width={24}/>}
              </span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

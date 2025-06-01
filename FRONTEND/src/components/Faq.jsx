import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is StartupCoaching.vercel.app?",
      answer:
        "StartupCoaching.in is India's first startup platform with an ecosystem approach, providing strategic guidance, fundraising support, and AI-driven insights to help startups grow from seed to Series A stages.",
    },
    {
      question: "Which services does StartupCoaching.vercel.app offer?",
      answer:
        "We offer fundraising assistance, product development support, marketing (organic & paid), financial and legal documentation, investor readiness training, and AI-powered business optimization.",
    },
    {
      question: "How does the platform help with fundraising?",
      answer:
        "We help with investor-ready pitch decks, financial models, warm VC introductions, term sheet negotiation, shareholder agreements, and overall deal support to simplify your fundraising journey.",
    },
    {
      question: "What kind of legal and financial help can I expect?",
      answer:
        "Our team supports company compliance, tax filings, bookkeeping, virtual CFO services, agreement drafting (MoU, NDA, Employment, etc.), and regulatory filings like GST, IT, PF, and more.",
    },
    {
      question: "Is there any tech or AI support for startups?",
      answer:
        "Yes, we offer AI-driven insights, custom machine learning models, real-time dashboards, sentiment analysis, predictive analytics, and training for founders in data literacy and AI adoption.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F5F7FF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E1F5FE] px-4 py-1 rounded-full mb-4">
            <p className="text-custom-skyBlue font-medium text-sm">FAQ</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-custom-navyBlue mb-4">
            Common Questions
          </h2>
          <p className="text-custom-black text-lg">
            Everything you need to know about StartupCoaching.in
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? "shadow-md" : "shadow-sm"
              }`}
            >
              <button
                className={`w-full text-left p-6 flex justify-between items-center focus:outline-none ${
                  openIndex === index ? "bg-white" : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-custom-navyBlue">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-custom-skyBlue" />
                ) : (
                  <ChevronDown size={20} className="text-custom-navyBlue" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden bg-white ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-custom-black">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-custom-black mb-4">
            Still have questions about how we can help your startup?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-custom-skyBlue text-white py-3 px-8 rounded-lg font-medium hover:bg-[#0288D1] transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;

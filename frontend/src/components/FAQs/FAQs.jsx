import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I read these FAQs?",
      answer:
        "These FAQs are here because we want you to understand how we operate and what you can expect from us. Please feel free to call us at 888-231-7965 if you have questions about any of these FAQs. We want to make this an enjoyable experience for everyone and we look forward to working with you!",
    },
    {
      question: "When will my report be ready?",
      answer:
        "Reports are typically delivered within 24 hours of inspection completion. Complex cases might take up to 48 hours.",
    },
    {
      question: "How soon after I place my order will I get my report?",
      answer:
        "Our mechanics typically conduct inspections within 1-2 business days of order confirmation, with reports following within 24 hours after inspection.",
    },
    {
      question: "When do I pay for the inspection?",
      answer:
        "Payment is required at the time of booking to secure your inspection slot.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations made 24 hours prior to inspection receive full refunds. Later cancellations may incur a 50% fee.",
    },
    {
      question: "Please explain the ETA",
      answer:
        "Our Estimated Time of Arrival (ETA) is calculated based on location and mechanic availability. You'll receive real-time updates once your mechanic is en route.",
    },
    {
      question:
        "I bought a plane ticket (arranged for transportation). How quickly can you do the inspection?",
      answer:
        "We prioritize time-sensitive requests. Contact our support team immediately at 888-231-7965 for expedited service.",
    },
    {
      question:
        "My registration is expired. Can I hire you to do an inspection?",
      answer:
        "Yes, we can perform inspections on vehicles with expired registration. Please inform us beforehand for proper documentation.",
    },
    {
      question: "How do I view my report?",
      answer:
        "Reports are delivered digitally via email and accessible through your account dashboard. You'll receive login credentials upon booking.",
    },
    {
      question: "What should I look for in my report?",
      answer:
        "Focus on the summary section first, then review detailed findings in: Mechanical Condition, Structural Integrity, Cosmetic Issues, and Safety Recommendations.",
    },
    {
      question: "Can I get a verbal report?",
      answer:
        "Yes, our mechanics can provide a brief verbal summary immediately after inspection. Detailed findings will be in the written report.",
    },
    {
      question: "Can I change the vehicle I ordered an inspection on?",
      answer:
        "Vehicle changes can be made up to 12 hours before inspection time through your account dashboard or by contacting support.",
    },
    {
      question:
        "My seller called to tell me that nobody has contacted them yet.",
      answer:
        "Our mechanics typically contact sellers 2 hours before the scheduled inspection time. If it's within this window, please ask them to check their spam folder or contact us directly.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Can't find what you're looking for? Call us at{" "}
            <a
              href="tel:888-231-7965"
              className="text-blue-600 hover:underline"
            >
              888-231-7965
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 py-4 border-t bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Visit our{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact Us
            </a>{" "}
            page or call our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

"use client";
import Faqcard from "./faqcard";
// import { useTranslations } from "use-intl";

export default function FAQ() {
//   const t = useTranslations("Header");

  // Mock data for FAQs
  const mockFAQs = [
    {
      id: 1,
      question: "What is the return policy?",
      answer: "You can return any item within 30 days of purchase."
    },
    {
      id: 2,
      question: "How do I track my order?",
      answer: "You will receive an email with a tracking link once your order is shipped."
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide."
    },
    {
      id: 4,
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, PayPal, and bank transfers."
    },
  ];

  return (
    <div className="">
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mb-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            {/* <h2 className="mt-5 text-center text-xl text-teal-600 font-bold tracking-tight md:text-5xl"> */}
              {/* {t("faq")} */}
              {/* faq */}
            {/* </h2> */}
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              Frequently asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            {mockFAQs.map((item) => (
              <Faqcard key={item.id} FaqData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
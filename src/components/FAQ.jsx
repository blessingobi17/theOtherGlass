import faqs from "/data/faq.json";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleClick = (id) => {
    setOpenFaq((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className="bg-gray-100 text-black lg:py-32 py-24 mt-28 flex flex-col items-center">
      <div className="lg:w-2/4 w-full">
        <div className="text-center ">
          <h3 className="lg:text-5xl text-3xl font-notoSherif leading-snug ">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="pt-16 space-y-4">
          {faqs.map((questions) => (
            <div
              className={`px-8 py-8 transition-all duration-300 ${
                openFaq === questions.id
                  ? "bg-white  rounded-xl shadow-xl"
                  : "border-b border-b-gray-300 "
              }`}
            >
              <div
                onClick={() => handleClick(questions.id)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="lg:text-xl text-lg w-4/5 font-medium">
                  {questions.header}
                </h3>
                <button>
                  {openFaq === questions.id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <p
                className={`pt-6 text-sm leading-loose transition-all duration-500 ease-in-out ${
                  openFaq === questions.id ? "block" : "hidden"
                }`}
              >
                {questions.body}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-full text-center lg:pt-32 pt-24 ">
          <h3 className="lg:text-4xl text-3xl font-notoSherif leading-snug">
            Need help?
          </h3>
          <p className="leading-loose pt-4 md:w-3/5 w-full">
            If you haven’t found an answer to your question above, don’t
            hesitate to contact us at{" "}
            <span className="underline">hi@theotherglasses.com.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

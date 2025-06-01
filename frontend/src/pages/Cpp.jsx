import React, { useState } from 'react';

const cppQuestions = [
  {
    question: "What is the difference between a pointer and a reference in C++?",
    answer:
      "A pointer can be reassigned and can point to nothing (nullptr), while a reference must be initialized when declared and cannot be changed to refer to something else.",
  },
  {
    question: "What are the four pillars of Object-Oriented Programming?",
    answer:
      "The four pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
  },
  {
    question: "What is the Rule of Three in C++?",
    answer:
      "If a class requires a user-defined destructor, copy constructor, or copy assignment operator, it likely requires all three.",
  },
  {
    question: "What is the difference between ‘new’ and ‘malloc’?",
    answer:
      "`new` is a C++ operator that constructs objects, while `malloc` is a C function that just allocates raw memory without calling constructors.",
  },
  {
    question: "What is a virtual function?",
    answer:
      "A virtual function is a member function which is declared within a base class and is overridden by a derived class.",
  },
];

const Cpp = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        C++ Interview Questions
      </h1>
      <div className="space-y-4">
        {cppQuestions.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition duration-300"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left font-medium text-lg text-gray-800 focus:outline-none"
            >
              {item.question}
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cpp;

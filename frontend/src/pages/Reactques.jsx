import React, { useState } from 'react';

const ReactQuestions = [
  {
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight representation of the real DOM. React uses it to optimize DOM updates by diffing and updating only changed elements.",
  },
  {
    question: "What are React Hooks?",
    answer:
      "Hooks are functions that let you use state and lifecycle features in functional components. Common hooks include useState, useEffect, useContext, etc.",
  },
  {
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "`useEffect` runs after the render is committed to the screen. `useLayoutEffect` runs synchronously after all DOM mutations but before the screen is painted.",
  },
  {
    question: "What is prop drilling in React?",
    answer:
      "Prop drilling is the process of passing data from a parent component to deeply nested children through props. It can be avoided using context or state management libraries.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly inside JavaScript files.",
  },
];

const Reactques = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        React Interview Questions
      </h1>
      <div className="space-y-4">
        {ReactQuestions.map((item, index) => (
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

export default Reactques;

import React, { useState } from 'react';

const javaQuestions = [
  {
    question: "What is the difference between JDK, JRE, and JVM?",
    answer:
      "JVM (Java Virtual Machine) runs Java bytecode. JRE (Java Runtime Environment) includes JVM + libraries. JDK (Java Development Kit) includes JRE + development tools like compilers.",
  },
  {
    question: "What is the difference between `==` and `.equals()` in Java?",
    answer:
      "`==` checks if two references point to the same object. `.equals()` checks for value equality, and can be overridden by classes like String, Integer, etc.",
  },
  {
    question: "What are the main principles of OOP?",
    answer:
      "Encapsulation, Abstraction, Inheritance, and Polymorphism are the four main principles of Object-Oriented Programming.",
  },
  {
    question: "What is a constructor in Java?",
    answer:
      "A constructor is a special method used to initialize objects. It has the same name as the class and no return type.",
  },
  {
    question: "What is the difference between abstract classes and interfaces?",
    answer:
      "Abstract classes can have method implementations and instance variables. Interfaces can only have method declarations (until Java 8, now they can have default/static methods too). A class can implement multiple interfaces but only extend one abstract class.",
  },
];

const Java = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Java Interview Questions
      </h1>
      <div className="space-y-4">
        {javaQuestions.map((item, index) => (
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

export default Java;

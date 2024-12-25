import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQTabProps {
  questions: FAQ[];
}

export function FAQTab({ questions }: FAQTabProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {questions.map((faq, index) => (
        <div key={index} className="rounded-lg overflow-hidden">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-4 py-3 flex items-center justify-between text-black hover:bg-black/5 transition-colors"
          >
            <span className="font-medium text-left">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUpIcon className="w-5 h-5 flex-shrink-0" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 text-black bg-white rounded-b-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
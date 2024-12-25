import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { FAQTab } from './FAQTab';
import { faqData } from './faqData';

interface InfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoPopup({ isOpen, onClose }: InfoPopupProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-2xl bg-[#FFB800] rounded-lg shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 p-1 rounded-full hover:bg-black/10 transition-colors"
        >
          <XMarkIcon className="w-6 h-6 text-black" />
        </button>

        {/* Tabs */}
        <div className="flex border-b border-black/10">
          {['General Info', 'The 3 Activities', 'More'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`flex-1 px-4 py-3 text-black font-semibold transition-colors
                ${activeTab === index ? 'bg-black/10' : 'bg-white hover:bg-white/90'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <FAQTab questions={faqData[activeTab]} />
        </div>
      </div>
    </div>
  );
}
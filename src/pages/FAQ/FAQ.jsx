import React, { useState, memo } from 'react';
import campingTorres from '../../Images/products-imgs/CampingundertasmanandTorres.jpg';
import SkitouringPlateau from '../../Images/products-imgs/SkitouringPlateau.jpg';
import FoxNeveSki from '../../Images/climb-images/FoxNeveSkiTouring.jpg';
import Maltebrun from '../../Images/climb-images/patMalteBrun.jpg';
import RidgeClimbing from '../../Images/climb-images/ridgeClimbing.jpg';
import PatNazomi from '../../Images/climb-images/pat-nazomi.jpg';
import SliderCarousel from '../../Components/Slider';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';

// Memoize FAQList to prevent unnecessary re-renders
const FAQList = memo(({ faqs, visibleIndex, toggleAnswer }) => (
  <div className="faq-container space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className={`faq-item bg-dark-blue text-white rounded-lg shadow-lg p-6 transition-all duration-500 ${
          visibleIndex === index ? 'max-h-40' : 'max-h-16 overflow-hidden'
        }`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
          <button onClick={() => toggleAnswer(index)} className="text-blue-500 hover:text-blue-400">
            {visibleIndex === index ? <CiSquareMinus className="text-2xl" /> : <CiSquarePlus className="text-2xl" />}
          </button>
        </div>
        <div
          className={`text-sm text-white mt-4 overflow-hidden transition-opacity duration-300 ease-in-out ${
            visibleIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {faq.answer}
        </div>
      </div>
    ))}
  </div>
));

export default function FAQ() {
  const images = [
    { src: Maltebrun, alt: 'The classic Cheval on MalteBrun West Ridge, NZ' },
    { src: RidgeClimbing, alt: 'Instruction on ridge Climbing' },
    { src: PatNazomi, alt: 'Climbing South face of Nazomi, NZ' },
    { src: FoxNeveSki, alt: 'Ski touring on fox Neve, West Coast, NZ' },
    { src: SkitouringPlateau, alt: 'Ski Touring on Grand Plateau' },
    { src: campingTorres, alt: 'Camping under Tasman and Torres' },
  ];

  const faqs = [
    {
      question: 'How much does a day of guiding cost and what other expenses should I consider?',
      answer:
        'A day of guiding costs $500, and you should also consider expenses like transport, equipment rental, and meals.',
    },
    { question: 'Do you guide in other locations?', answer: 'Yes, we guide in various locations worldwide.' },
    {
      question: 'What should I bring for a camping tour?',
      answer: 'Essential items include a sleeping bag, hiking boots, warm clothing, and plenty of water.',
    },
    {
      question: 'Are meals included in the package?',
      answer: 'No, meals are not included, but we can recommend options or provide packed meals upon request.',
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="faq-page bg-font-blue min-h-screen">
      {/* Lazy Loading Slider */}
      <SliderCarousel images={images.map((img) => ({ ...img, loading: 'lazy' }))} />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-8 mt-3 text-center text-dark-blue">Frequently Asked Questions</h2>
        <FAQList faqs={faqs} visibleIndex={visibleIndex} toggleAnswer={toggleAnswer} />
      </div>
    </div>
  );
}

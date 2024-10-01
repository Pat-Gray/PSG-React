import React, { useState } from 'react';

export default function TripDetails({ TripDetails }) {
  const [openIndex, setOpenIndex] = useState(null); // State to manage which item is open

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col space-y-4">
      {TripDetails.map((el, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md transition-all duration-300 m-6">
          <div onClick={() => toggleOpen(index)} className="cursor-pointer">
            <div className="flex flex-col">
              <div className="flex justify-between items-center p-6 pb-1">
                <h3 className="text-xl font-semibold hover:text-blue-500">{el.title}</h3>
                <span className="text-sm bg-blue-500 text-white rounded-md px-3 py-1">{el.difficulty}</span>
              </div>
              {openIndex !== index && <p className="text-xs pl-6 hover:text-blue-500">Click to find out more</p>}
            </div>
            {openIndex !== index && (
              <img
                src={el.img}
                alt={el.alt}
                className="w-full h-auto object-cover rounded-t-lg transition-max-height duration-500 ease-in-out"
              />
            )}
          </div>
          <div className={`p-4 pb-0  ${openIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {openIndex === index && (
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-gray-700 text-base leading-relaxed mb-4 col-span-2">{el.description}</p>
              </div>
            )}
          </div>
          {/* {openIndex === index && (
            <div className="flex">
              <img
                src={el.img2}
                alt={el.alt2}
                className="w-auto h-3/6 object-cover transition-max-height duration-500 ease-in-out ounded-b-lg"
              />
              <div>
                <img
                  src={el.img3}
                  alt={el.alt3}
                  className="w-full h-auto object-cover  transition-max-height duration-500 ease-in-out "
                />
                <img
                  src={el.img3}
                  alt={el.alt3}
                  className="w-full h-auto object-cover rounded-b-lg transition-max-height duration-500 ease-in-out "
                />
              </div>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
}

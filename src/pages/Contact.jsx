import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useMediaQuery } from 'react-responsive';
import PetContact from '../Images/GuideImages/Pet-on-ridge.jpg';
import PetFootstoolSkiDescent from '../Images/GuideImages/PetFootstoolSkiDescent.jpg';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const isMediumOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_1mjximv';
    const templateID = 'template_hXAjj4thBMxE7eg1W';
    const userID = 'user_1234567890abcdef';

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Form submission failed. Please try again.');
      }
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-blue-100 text-dark-blue">
      {isMediumOrLarger ? (
        <img
          src={PetFootstoolSkiDescent}
          alt="Pet Footstool Ski Descent"
          className="w-full md:w-1/2 h-auto shadow-lg"
        />
      ) : (
        <img src={PetContact} alt="Petrouchka on Ridge in Norway" className="w-full h-auto shadow-lg" />
      )}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-evenly">
        <h2 className="text-center text-2xl font-semibold mb-4 mt-5">
          <i>Get in touch today if you have a dream climb and ski that you want to make a reality</i>
        </h2>
        <a
          href="https://wa.me/0225618309?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white p-3 rounded-md mb-4 hover:bg-green-600 m-5"
        >
          Contact us on WhatsApp <FaWhatsapp className="inline text-lg" />
        </a>
        <p className="text-xl pb-6 text-center leading-loose">
          OR
          <br />
          Please Complete this form:
        </p>
        <form className="bg-white p-6 rounded-lg shadow-md w-full text-black" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            aria-label="Name"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone"
            aria-label="Phone"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            aria-label="Email"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            id="message"
            name="message"
            required
            placeholder="Message"
            aria-label="Message"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

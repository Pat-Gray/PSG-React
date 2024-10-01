import React from 'react';
import Slider from 'react-slick';

export default function Testimonials() {
  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    centerPadding: '0rem',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3, // Show 3 slides on larger screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h3 className="text-3xl font-bold text-dark-blue text-center pt-4 mt-10">Testimonials</h3>
      <div className="px-6 py-8 ">
        <Slider {...settings}>
          <div className=" !w-[95%] p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg inline-block">
            <p>
              <i>"Pet was a fantastic guide with a high level of knowledge and professionalism."</i>
            </p>
          </div>
          <div className="p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg mx-auto !w-[95%]">
            <p>
              <i>
                "Petrouchka was an excellent guide. She was clearly very competent and calm and managed the diversity
                and needs of the group gently and well. She remained calm and instilled confidence and group
                togetherness. She was a clear communicator and an outstanding leader and not thrown by one group member
                struggling with the trip."
              </i>
            </p>
            <h4 className="mt-4 font-semibold">
              Elsa - <i>Ball Pass Crossing</i>
            </h4>
          </div>
          <div className="p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg mx-auto !w-[95%]">
            <p>
              <i>"10/10. Pet was patient, methodical and had a wealth of experience to pass on!"</i>
            </p>
            <h4 className="mt-4 font-semibold">
              Kevin - <i>Backcountry Touring Course</i>
            </h4>
          </div>
          <div className="p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg mx-auto !w-[95%]">
            <p>
              <i>
                "The guide in particular was outstanding. I have previously had experience with 5 other ski-touring
                guides through other companies and I would describe them all as excellent however Petrouchka was in an
                outstanding league of her own!"
              </i>
            </p>
            <h4 className="mt-4 font-semibold">
              Taylor - <i>Backcountry Touring Course</i>
            </h4>
          </div>
        </Slider>
      </div>
    </>
  );
}

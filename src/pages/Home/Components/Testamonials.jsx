import React from 'react';
import Slider from 'react-slick';

export default function Testimonials() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
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
      <h3 className="text-3xl font-bold text-dark-blue  text-center pt-4">Testamonials</h3>
      <div className="box-border slider-container px-6 py-8 custom-slider">
        <Slider {...settings}>
          <div className="p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg">
            <p>
              <i>
                "Pet was a fantastic guide with a high level of knowledge and professionalism. Would highly recommend."
              </i>
            </p>
            <h4 className="mt-4 font-semibold">
              Jessica - <i>Mountaineering Course</i>
            </h4>
          </div>
          <div className="p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg">
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
          <div className="p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg">
            <p>
              <i>"10/10. Pet was patient, methodical and had a wealth of experience to pass on!"</i>
            </p>
            <h4 className="mt-4 font-semibold">
              Kevin - <i>Backcountry Touring Course</i>
            </h4>
          </div>
          <div className="p-6 text-font-blue bg-dark-blue rounded-lg shadow-lg">
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

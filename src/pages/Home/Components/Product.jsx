import EastRidge from '../../../Images/climb-images/petOnEastRidge.jpg';
import PatStetind from '../../../Images/climb-images/Climbing Stetind Norway.jpg';
import SkiPlane from '../../../Images/climb-images/SkiPlane.jpg';
import Trogan from '../../../Images/climb-images/PetTrogan.jpg';
import SkiPlateau from '../../../Images/products-imgs/SkitouringPlateau.jpg';

import iceaxe from '../../../../public/Logo/icons/ice-axe.png';
import ski from '../../../../public/Logo/icons/alpine.png';
import mountain from '../../../../public/Logo/icons/mountain.png';
import climbing from '../../../../public/Logo/icons/climbing.png';
import { Link } from 'react-router-dom';

const productArray = [
  {
    img: PatStetind,
    alt: 'Climbing on Stetind, Norways National Mountain',
    title: 'Mountaineering',
    description: 'Private Mountain Ascents, Mountaineering Courses and Ice Climbing Guiding',
    iconSrc: iceaxe,
    iconAlt: 'Ice axe icon',
    path: '/mountaineering&climbing',
  },
  {
    img: SkiPlateau,
    alt: 'Skiing on Grand Plateau, NZ',
    title: 'Ski Touring',
    description: 'Ski touring, Ski-mountaineering descents & Avalanche Courses',
    iconSrc: ski,
    iconAlt: 'ski icon',
    path: '/skiing',
  },
  {
    img: Trogan,
    alt: 'Rock Climbing at Arapiles',
    title: 'Rock Climbing',
    description: 'Guided Rock Ascents and trips',
    iconSrc: climbing,
    iconAlt: 'Climbing icon',
    path: '/',
  },
  {
    img: SkiPlane,
    alt: 'Ski Plane on the glacier',
    title: 'Expeditions & Custom Trips',
    description: 'Get in touch if you have a dream trip or climb',
    iconSrc: mountain,
    iconAlt: 'Mountain icon',
    path: '/expeditions',
  },
];

function mapProducts() {
  return productArray.map((el, index) => (
    <div key={index} className="flex justify-center items-center w-full md:w-1/2 lg:w-1/2 mt-10 mb-10">
      <Link to={el.path}>
        <div className="relative max-w-lg m-2 overflow-hidden rounded-md group">
          {/* Image with smooth hover scale */}
          <img
            src={el.img}
            alt={el.alt}
            className="w-full h-96 object-cover rounded-md drop-shadow-xl transition-transform duration-500 transform group-hover:scale-105"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md transition-opacity duration-500 ease-in-out group-hover:bg-opacity-60"></div>
          {/* Title (h3) always visible, enlarges on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <img
              src={el.iconSrc}
              alt={el.iconAlt}
              className="mt-2 drop-shadow-xl opacity-0 w-16 p-3 mb-5 bg-white rounded-3xl transition-opacity duration-500 transform group-hover:opacity-100 group-hover:scale-105"
            ></img>
            <h3 className="text-2xl font-bold drop-shadow-xl transition-transform duration-500 transform group-hover:scale-110">
              {el.title}
            </h3>
            {/* Description (p) hidden initially, fades in on hover */}
            <p className="mt-2 drop-shadow-xl opacity-0 transition-opacity duration-500 transform group-hover:opacity-100 group-hover:scale-105">
              {el.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));
}

export default function Product() {
  return <div className="flex flex-wrap">{mapProducts()}</div>;
}

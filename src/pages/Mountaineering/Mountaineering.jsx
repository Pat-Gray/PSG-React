import React from 'react';
import EastRidge from '../../Images/climb-images/petOnEastRidge.jpg';
import HansClimbing from '../../Images/climb-images/HansIceClimbing.jpg';
import { LuMountainSnow } from 'react-icons/lu';
import { timeline } from '@material-tailwind/react';
import LowPk from '../../Images/climb-images/AdamMountCookLowPk.jpg';
import TripDetails from '../../Components/TripDetails';
import SthFace from '../../Images/climb-images/DouglasSthFace.jpg';
import Pointing from '../../Images/climb-images/pointingInCookNp.jpg';

import PetNorway2 from '../../Images/climb-images/PetNorwayIce2.jpg';
import ClimbingCard from './ClimbingCard';

export default function Mountaineering() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative text-center">
        <img src={EastRidge} alt="Petrouchka on East Ridge" className="h-auto w-full object-cover shadow-lg" />
        <div className="absolute inset-0"></div>
        <div className="absolute inset-10 flex flex-col items-center justify-start text-white drop-shadow-lg">
          <h2 className="text-4xl font-bold">Mountaineering & Climbing</h2>
          <h4 className="text-2xl mt-2">Technical Ascents | Mountaineering Courses</h4>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row p-6  ">
        <div className="md:w-1/2 p-8 bg-white  shadow-md space-y-6">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center space-x-2">
              <LuMountainSnow />
              <span>Technical Ascents</span>
            </h3>
            <p className="text-gray-700 leading-loose">
              I specialize in providing{' '}
              <strong>
                <em>custom, personalized guided experiences</em>
              </strong>{' '}
              for climbers of all levels eager to explore the breathtaking Alpine Mountains of New Zealand. Recognizing
              that every climber's journey is unique, I tailor each trip to align with your individual skills, goals,
              and preferences. Whether you’re drawn to{' '}
              <em>challenging ice routes, majestic granite faces, or stunning alpine ridges</em>, I can recommend and
              guide you through the perfect adventure. Join me for an unforgettable experience in the high mountains,
              where you'll discover the true essence of personalized guided climbing.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center bg-white">
          <img src={HansClimbing} alt="Ice climbing in the Darrans" className="w-full h-auto shadow-md" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 p-6 justify-items-center w-full">
        <ClimbingCard />
      </div>
    </div>
  );
}

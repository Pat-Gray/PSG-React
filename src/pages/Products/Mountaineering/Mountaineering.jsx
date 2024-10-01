import React from 'react';
import EastRidge from '../../../Images/climb-images/petOnEastRidge.jpg';
import HansClimbing from '../../../Images/climb-images/HansIceClimbing.jpg';
import { LuMountainSnow } from 'react-icons/lu';
import { timeline } from '@material-tailwind/react';
import LowPk from '../../../Images/climb-images/AdamMountCookLowPk.jpg';

import SthFace from '../../../Images/climb-images/DouglasSthFace.jpg';
import Pointing from '../../../Images/climb-images/pointingInCookNp.jpg';

import ProductCards from './ProductCards';
import PetNorway2 from '../../../Images/climb-images/PetNorwayIce2.jpg';
import ProductHeader from '../Components/ProductHeader';
import GeneralOverview from '../Components/GeneralOverview';
import { mountaineeringProducts } from './climbProductData';

export default function Mountaineering() {
  return (
    <div className="bg-gray-100">
      <ProductHeader
        img={EastRidge}
        alt="Petrouchka on East Ridge"
        title="Mountaineering & Climbing"
        subtitle="Technical Ascents | Mountaineering Courses"
      />
      <GeneralOverview
        icon={<LuMountainSnow />}
        title="Technical Ascents"
        description="I specialize in providing custom, personalized guided experiences for climbers of all levels eager to explore the breathtaking Alpine Mountains of New Zealand. Recognizing that every climber's journey is unique, I tailor each trip to align with your individual skills, goals, and preferences. Whether you’re drawn to challenging ice routes, majestic granite faces, or stunning alpine ridges, I can recommend and guide you through the perfect adventure. Join me for an unforgettable experience in the high mountains, where you'll discover the true essence of personalized guided climbing."
        img={HansClimbing}
        alt="ice climbing in Fiordland, NZ"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 p-6 justify-items-center w-full">
        <ProductCards array={mountaineeringProducts} />
      </div>
    </div>
  );
}

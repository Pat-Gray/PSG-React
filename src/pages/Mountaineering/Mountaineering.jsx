import React from 'react';
import EastRidge from '../../Images/climb-images/petOnEastRidge.jpg';
import HansClimbing from '../../Images/climb-images/HansIceClimbing.jpg';
import { LuMountainSnow } from 'react-icons/lu';
import { timeline } from '@material-tailwind/react';
import LowPk from '../../Images/climb-images/AdamMountCookLowPk.jpg';
import TripDetails from '../../Components/TripDetails';
import SthFace from '../../Images/climb-images/DouglasSthFace.jpg';
import Pointing from '../../Images/climb-images/pointingInCookNp.jpg';
import FiordlandIce from '../../Images/climb-images/FiordlandIceClimbing.jpg';
import PetNorway2 from '../../Images/climb-images/PetNorwayIce2.jpg';

const mountaineeringProducts = [
  {
    img: LowPk,
    alt: "High up on Mount Cook's Low Peak",
    title: 'Do you want to climb the 3000m peaks of New Zealand?',
    description:
      "Embark on the adventure of a lifetime by tackling all 3000m peaks of New Zealand—a dream that inspires many mountaineers. This ambitious journey will requires numerous trips, extensive experience, and a deep understanding of the mountains' ever-changing weather and seasonal conditions. There are 24 mountains above 3000m with all of them inside Mt Cook/Aoraki National Park except for Mount Aspiring. Each ascent presents unique challenges, making it essential to select the right mountain at the right time. Some peaks are best climbed in early spring snow conditions, others are best late season when its alpine rock although at most of the year something amazing will be in condition. Climbing with a trusted guide not only enhances your safety but also ensures that you find the perfect level of challenge tailored to your skills. With my expertise, you can navigate the complexities of high-alpine climbing while maintaining a strong safety margin. This long-term project is not just about reaching summits; it's about embracing the journey, conquering fears, and achieving personal milestones in some of the most breathtaking landscapes in the world. Join me if you to be climbing amonst New Zealand's most majestic peaks.",
    difficulty: 'Life-long dream',
    season: 'Winter, Spring, Summer',
    img2: SthFace,
    alt2: 'Douglas South Face, NZ',
    img3: Pointing,
    alt3: 'Standing on a saddle in Aoraki National Park',
    img4: Pointing,
    alt4: 'Standing on a saddle in Aoraki National Park',
  },
  {
    img: FiordlandIce,
    alt: 'Ice Climbing in Fiordland',
    title: 'Ice Climbing',
    description:
      'Discover the thrill of ice climbing in New Zealand’s breathtaking Southern Alps with expert guidance tailored for both beginners and advanced climbers. Whether you’re looking to master essential ice climbing techniques or take on some of the country’s most formidable alpine routes, I offer an unforgettable adventure in winter.',
    difficulty: 'Private Ascents or Instruction',
    season: 'Winter',
    img2: PetNorway2,
    alt2: 'Ice Clmbing',
    img3: PetNorway2,
    alt3: 'Ice Clmbing',
    img4: PetNorway2,
    alt4: 'Ice Clmbing',
  },
];

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
      <div className="flex flex-col md:flex-row p-6 md:space-x-4">
        <div className="md:w-1/2 p-8 bg-white rounded-lg shadow-md space-y-6">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            <LuMountainSnow />
            Technical Ascents
          </h3>
          <p className="text-gray-700 leading-loose">
            I specialize in providing{' '}
            <strong>
              <em>custom, personalized guided experiences</em>
            </strong>{' '}
            for climbers of all levels eager to explore the breathtaking Alpine Mountains of New Zealand. Recognizing
            that every climber's journey is unique, I tailor each trip to align with your individual skills, goals, and
            preferences. Whether you’re drawn to{' '}
            <em>challenging ice routes, majestic granite faces, or stunning alpine ridges</em>, I can recommend and
            guide you through the perfect adventure. Join me for an unforgettable experience in the high mountains,
            where you'll discover the true essence of personalized guided climbing.
          </p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img src={HansClimbing} alt="Ice climbing in the Darrans" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
      <TripDetails TripDetails={mountaineeringProducts} />
    </div>
  );
}

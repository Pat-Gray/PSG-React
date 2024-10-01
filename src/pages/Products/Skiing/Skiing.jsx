import SkiingPlateau from '../../../Images/products-imgs/skitouringplateau.jpg';
import { LuMountainSnow } from 'react-icons/lu';
import ProductHeader from './../Components/ProductHeader';
import HansClimbing from '../../../Images/climb-images/HansIceClimbing.jpg';
import GeneralOverview from '../Components/GeneralOverview';
import PointingmtCook from '../../../Images/climb-images/pointingInCookNp.jpg';

export default function Skiing() {
  return (
    <>
      <div className="bg-gray-100">
        <ProductHeader
          img={PointingmtCook}
          alt="Client ski touring on the  Grand plateau"
          title="Ski-Touring & Ski-Mountaineering"
          subtitle="Glacial Ski Touring | Ski-Mountaineering Courses"
        />
      </div>
      <GeneralOverview
        icon={<LuMountainSnow />}
        title="Skiing"
        description="I specialize in offering customized, personalized ski mountaineering and glacial ski touring experiences for skiers of all levels, eager to explore the majestic peaks and glaciers of New Zealand's alpine terrain. Understanding that each skier's journey is unique, I tailor each adventure to your individual skills, previous experiences, and goals. Whether you're drawn to challenging high-alpine routes, vast glacial expanses, or pristine powder descents, I can recommend and guide you through the perfect mountain experience. Join me for a flexible, tailored adventure that builds on your previous trips and unlocks the best of New Zealand's backcountry."
        img={HansClimbing}
        alt="ice climbing in Fiordland, NZ"
      />
    </>
  );
}

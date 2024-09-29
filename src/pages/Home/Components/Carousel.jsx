import { Carousel } from '@material-tailwind/react';
import GuidePet from '../../../Images/GuideImages/GuidePet.jpg';
import GuidePetJapan from '../../../Images/GuideImages/PetGuidingJapan.jpg';
import GuidePetTasman from '../../../Images/GuideImages/Pet1.webp';

export default function CarouselDefault() {
  return (
    <Carousel className=" bg-font-blue">
      <img src={GuidePet} alt="Petrouchka Guiding" className="h-full w-full object-cover" />
      <img src={GuidePetTasman} alt="Ski Guiding on the Tasman Glacier" className="h-full w-full object-cover" />
    </Carousel>
  );
}

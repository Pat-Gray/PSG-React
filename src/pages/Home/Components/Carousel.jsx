import React, { Suspense, lazy } from 'react';
import { Carousel } from '@material-tailwind/react';
import GuidePet from '../../../Images/GuideImages/GuidePet.webp';
import GuidePetTasman from '../../../Images/GuideImages/Pet1.webp';

export default function CarouselDefault() {
  return (
    <Carousel className="max-h-[700px] overflow-hidden">
      <img src={GuidePet} alt="Petrouchka Guiding" className="w-full h-[700px] object-cover" loading="lazy" />
      <img
        src={GuidePetTasman}
        alt="Ski Guiding on the Tasman Glacier"
        className="w-full h-[700px] object-cover"
        loading="lazy"
      />
    </Carousel>
  );
}
